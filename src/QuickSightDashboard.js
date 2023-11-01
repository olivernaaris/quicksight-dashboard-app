// src/QuickSightDashboard.js

import React from 'react';
import styles from './QuickSightDashboard.module.css';

const QuickSightDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <iframe
        className={styles.iframeStyle}
        src="https://eu-central-1.quicksight.aws.amazon.com/sn/embed/share/accounts/661234334835/dashboards/f77a8b5d-0b9c-42f8-8158-7077bf94ca68?directory_alias=pawapay-data-lake"
        allowFullScreen={true}
        title="QuickSight Dashboard"
      ></iframe>
    </div>
  );
};

export default QuickSightDashboard;
