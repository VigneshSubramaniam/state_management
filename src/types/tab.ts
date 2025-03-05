import { FC } from 'react';
import type { Icon } from '@shopify/polaris';

export interface TabUrl {
  url: string;
  path: string;
}

export interface TabDisplayData {
  name: string;
  label: string;
}

export interface TabContentData {
  title: string;
  module: string;
}

export interface TabConfig {
  tabId: string;  // This is now the tab type identifier
  tabIcon: Icon;
  url: {
    url: string;
    path: string;
  };
  tabDisplayData: {
    name: string;
    label: string;
  };
  tabContentData: {
    title: string;
    module: string;
  };
  component: React.LazyExoticComponent<React.FC>;
}

export interface TabInstance {
  instanceId: string;     // Unique identifier for this specific tab instance
  tabType: string;       // References the tab type from TAB_CONFIG
  url: string;           // Actual URL with params replaced
  data?: Record<string, any>; // Any data needed for this tab instance
}

export interface TabState {
  tabs: TabInstance[];
  activeTabId: string | null;
  addTab: (tabType: string, data?: Record<string, any>) => void;
  removeTab: (instanceId: string) => void;
  setActiveTab: (instanceId: string) => void;
} 