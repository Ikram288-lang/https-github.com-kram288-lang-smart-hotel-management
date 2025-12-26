'use client';

import React from 'react';
import { Toast } from './Toast';
import { useNotification } from '../contexts/NotificationContext';

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={removeNotification}
          id={notification.id}
        />
      ))}
    </div>
  );
};
