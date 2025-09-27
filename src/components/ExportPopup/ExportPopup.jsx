import React, { useState, useEffect, useRef } from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import CodeDisplay from '../CodeDisplay/CodeDisplay';
import { getAllTabs, getTabContent } from '../../data/exportData';
import './ExportPopup.css';

const ExportPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('html');
  const [isAnimating, setIsAnimating] = useState(false);
  const popupRef = useRef(null);
  const previousFocusRef = useRef(null);
  
  const tabs = getAllTabs();

  // Handle popup opening/closing animations
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Store the previously focused element
      previousFocusRef.current = document.activeElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the popup after animation
      setTimeout(() => {
        if (popupRef.current) {
          popupRef.current.focus();
        }
      }, 100);
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      
      // Restore focus to previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch(e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case '1':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            setActiveTab('html');
          }
          break;
        case '2':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            setActiveTab('nextjs');
          }
          break;
        case 'Tab':
          handleTabNavigation(e);
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle tab navigation within popup
  const handleTabNavigation = (e) => {
    const focusableElements = popupRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle tab switching
  const handleTabSwitch = (tabId) => {
    setActiveTab(tabId);
  };

  // Handle copy feedback
  const handleCopySuccess = () => {
    // Optional: Add global copy feedback here
    console.log('Code copied successfully!');
  };

  if (!isOpen && !isAnimating) return null;

  const activeTabContent = getTabContent(activeTab);

  return (
    <div 
      className={`popup-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div 
        ref={popupRef}
        className={`popup-container ${isOpen ? 'open' : ''}`}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        tabIndex={-1}
        onAnimationEnd={() => {
          if (!isOpen) {
            setIsAnimating(false);
          }
        }}
      >
        {/* Header Section */}
        <div className="popup-header">
          <div className="header-content">
            <h2 id="popup-title" className="popup-title">
              Export Code
            </h2>
            <p id="popup-description" className="popup-description">
              Copy your component code in different formats
            </p>
          </div>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close export popup"
            title="Close (Esc)"
          >
            <svg 
              className="close-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        {/* Tab Navigation */}
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabSwitch}
        />
        
        {/* Content Area */}
        <div className="popup-content">
          <div 
            className={`tab-content ${isOpen ? 'active' : ''}`}
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <CodeDisplay 
              content={activeTabContent}
              tabId={activeTab}
              onCopy={handleCopySuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPopup;