import { create } from 'zustand';
import { TabState, TabInstance } from '../types/tab';
import { TAB_CONFIG } from '../config/tabRegistry';
import { v4 as uuidv4 } from 'uuid';

export const useTabStore = create<TabState>((set, get) => ({
  tabs: [],
  activeTabId: null,

  addTab: (tabType: string, data?: Record<string, any>) => {
    const config = TAB_CONFIG[tabType];
    if (!config) return;

    let url = config.url.url;
    
    // For tabs that should be unique (like Dashboard), check if already open
    const isUnique = ['DASHBOARD', 'TIMESHEET', 'PROJECTS'].includes(tabType);
    if (isUnique) {
      const existingTab = get().tabs.find(tab => tab.tabType === tabType);
      if (existingTab) {
        get().setActiveTab(existingTab.instanceId);
        return;
      }
    }

    // Handle dynamic URLs with parameters
    if (data && Object.keys(data).length > 0) {
      Object.entries(data).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value as string);
      });
    }

    const newTab: TabInstance = {
      instanceId: uuidv4(),
      tabType,
      url,
      data
    };

    set(state => ({
      tabs: [...state.tabs, newTab],
      activeTabId: newTab.instanceId
    }));
  },

  removeTab: (instanceId: string) => {
    set(state => {
      const newTabs = state.tabs.filter(tab => tab.instanceId !== instanceId);
      return {
        tabs: newTabs,
        activeTabId: state.activeTabId === instanceId
          ? newTabs[newTabs.length - 1]?.instanceId || null
          : state.activeTabId
      };
    });
  },

  setActiveTab: (instanceId: string) => {
    set({ activeTabId: instanceId });
  }
})); 