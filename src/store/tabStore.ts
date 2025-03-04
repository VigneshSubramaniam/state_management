import { create } from 'zustand';
import { TabState, TabInstance } from '../types/tab';
import { TAB_CONFIG } from '../config/tabRegistry';
import { v4 as uuidv4 } from 'uuid';

export const useTabStore = create<TabState>((set, get) => ({
  tabs: [],
  activeTabId: null,

  addTab: (tabId: string) => {
    const config = TAB_CONFIG[tabId];
    if (!config) return;

    const existingTab = get().tabs.find(tab => tab.tabId === tabId);
    if (existingTab) {
      get().setActiveTab(existingTab.instanceId);
      return;
    }

    const newTab: TabInstance = {
      instanceId: uuidv4(),
      tabId: tabId,
      url: config.url.url
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