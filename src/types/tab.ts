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
  tabId: string;
  tabIcon?: Icon;
  url: TabUrl;
  tabDisplayData: TabDisplayData;
  tabContentData: TabContentData;
  component: FC;
  serviceName?: string;
}

export interface TabState {
  tabs: TabInstance[];
  activeTabId: string | null;
  addTab: (tabId: string) => void;
  removeTab: (instanceId: string) => void;
  setActiveTab: (instanceId: string) => void;
}

export interface TabInstance {
  instanceId: string;  // Unique instance ID
  tabId: string;      // References the tab type from config
  url: string;        // Current URL state of this instance
} 