// Tab configuration object
export const tabConfig = {
  html: {
    id: 'html',
    label: 'HTML',
    icon: '📄',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Component</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 class="title">Your Exported Component</h1>
        <p class="description">
            This is your exported HTML component with proper
            semantic structure and accessibility features.
        </p>
        <div class="content">
            <div class="card">
                <h2>Feature Card</h2>
                <p>This is a sample feature card with proper HTML structure.</p>
                <button class="btn-primary">Learn More</button>
            </div>
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-number">100+</span>
                    <span class="stat-label">Happy Customers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Projects Completed</span>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            font-family: 'Arial', sans-serif;
        }
        
        .title {
            color: #111827;
            font-size: 32px;
            margin-bottom: 16px;
        }
        
        .description {
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 32px;
        }
        
        .card {
            background: white;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 24px;
        }
        
        .btn-primary {
            background: #6366f1;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        
        .stats {
            display: flex;
            gap: 32px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            display: block;
            font-size: 24px;
            font-weight: bold;
            color: #6366f1;
        }
    </style>
</body>
</html>`
  },
  nextjs: {
    id: 'nextjs',
    label: 'NextJS', 
    icon: '⚛️',
    content: `import React from 'react';
import styles from './ExportComponent.module.css';

const ExportComponent = () => {
  const [activeFeature, setActiveFeature] = React.useState(0);
  
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      title: "Modern Design", 
      description: "Clean and contemporary interface"
    },
    {
      title: "Responsive Layout",
      description: "Works perfectly on all devices"
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Exported Component</h1>
      <p className={styles.description}>
        This is your exported NextJS component with proper
        TypeScript support and modular CSS.
      </p>
      
      <div className={styles.content}>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={\`\${styles.featureCard} \${
                activeFeature === index ? styles.active : ''
              }\`}
              onClick={() => setActiveFeature(index)}
            >
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportComponent;

/* ExportComponent.module.css */
/*
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', -apple-system, sans-serif;
}

.title {
  color: #111827;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.025em;
}

.description {
  color: #6b7280;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.featureCard {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.featureCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.featureCard.active {
  border-color: #6366f1;
  background: #f8faff;
}

.featureTitle {
  color: #111827;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.featureDescription {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}

.stats {
  display: flex;
  justify-content: space-around;
  background: #f9fafb;
  padding: 32px;
  border-radius: 12px;
}

.statItem {
  text-align: center;
}

.statNumber {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 4px;
}

.statLabel {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .featureGrid {
    grid-template-columns: 1fr;
  }
}
*/`
  }
};

// Methods for data parsing
export const getTabContent = (tabId) => tabConfig[tabId]?.content || '';
export const getActiveTabData = (activeTab) => tabConfig[activeTab];
export const getAllTabs = () => Object.values(tabConfig);
export const getTabLabels = () => Object.keys(tabConfig);