// src/components/Center.js

import React from 'react';
import styles from './styles.module.css'; // 导入CSS Modules

// 该组件会接收所有子元素（图片）并将其居中
function ContentCenter({ children }) {
  return (
    <div className={styles.centerContainer}>
      {children}
    </div>
  );
}

export default ContentCenter;