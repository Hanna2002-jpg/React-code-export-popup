import React, { useState } from 'react';
import ExportPopup from './components/ExportPopup/ExportPopup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="app">
      <div className="demo-container">
        <h1 className="demo-title">Code Export Demo</h1>
        <p className="demo-description">
          Click the button below to open the export popup and view your
          code in different formats.
        </p>
        
        <button 
          className="export-trigger-button"
          onClick={handleOpenPopup}
        >
          📥 Export Code
        </button>

        <div className="features-section">
          <h2>Features Included:</h2>
          <div className="features-grid">
            <div className="feature-item">
              ✅ Tab-based navigation between HTML and NextJS formats
            </div>
            <div className="feature-item">
              ✅ One-click copy to clipboard functionality  
            </div>
            <div className="feature-item">
              ✅ Keyboard navigation support (ESC to close, Tab navigation)
            </div>
            <div className="feature-item">
              ✅ Responsive design that works on all screen sizes
            </div>
            <div className="feature-item">
              ✅ Smooth animations and transitions
            </div>
            <div className="feature-item">
              ✅ ARIA labels and accessibility features
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <ExportPopup 
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default App;