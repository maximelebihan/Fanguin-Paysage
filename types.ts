import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}