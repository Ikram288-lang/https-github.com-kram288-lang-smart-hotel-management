'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timestamp: string;
  read: boolean;
  persistent?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type?: 'success' | 'error' | 'warning' | 'info', persistent?: boolean) => void;
  removeNotification: (id: number) => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  unreadCount: number;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  // Initialize notifications from localStorage on client side
  useEffect(() => {
    const stored = localStorage.getItem('notifications');
    if (stored) {
      try {
        const parsedNotifications = JSON.parse(stored);
        setNotifications(parsedNotifications);
      } catch (error) {
        console.error('Error parsing notifications from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage when notifications change
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Update unread count when notifications change
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const addNotification = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', persistent: boolean = false) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      persistent
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 19)]); // Keep only 20 latest
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
      markAsRead,
      markAllAsRead,
      clearAll,
      unreadCount
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
