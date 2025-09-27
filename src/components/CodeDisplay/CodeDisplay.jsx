import React, { useState } from 'react';
import './CodeDisplay.css';

const CodeDisplay = ({ content, tabId, onCopy }) => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
      if (onCopy) onCopy();
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = content;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000);
        if (onCopy) onCopy();
      } catch (fallbackErr) {
        setCopyStatus('Copy failed');
        setTimeout(() => setCopyStatus(''), 2000);
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="code-display">
      <div className="code-header">
        <div className="code-info">
          <span className="code-label">{tabId.toUpperCase()} Code</span>
          <span className="code-lines">{content.split('\n').length} lines</span>
        </div>
        <button 
          className={`copy-button ${copyStatus ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy to clipboard"
          aria-label={`Copy ${tabId} code to clipboard`}
        >
          <span className="copy-icon">
            {copyStatus ? '✓' : '📋'}
          </span>
          <span className="copy-text">
            {copyStatus || 'Copy'}
          </span>
        </button>
      </div>
      <div className="code-content">
        <pre className="code-pre">
          <code className="code-block">{content}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeDisplay;