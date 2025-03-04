import React from 'react';
import { Tabs, Button, InlineStack, Text } from '@shopify/polaris';
import { CancelMajor } from '@shopify/polaris-icons';
import { useTabStore } from '../store/tabStore';
import { TAB_CONFIG } from '../config/tabRegistry';

const TabContainer: React.FC = () => {
  const { tabs, activeTabId, setActiveTab, removeTab } = useTabStore();

  const tabItems = tabs.map(tab => {
    const config = TAB_CONFIG[tab.tabId];
    
    return {
      id: tab.instanceId,
      content: (
        <InlineStack gap="200" align="center">
          <Text as="span">{config.tabDisplayData.label}</Text>
          <Button
            variant="plain"
            icon={CancelMajor}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();  // Prevent tab selection when clicking close
              removeTab(tab.instanceId);
            }}
            accessibilityLabel="Close tab"
          />
        </InlineStack>
      ),
      accessibilityLabel: config.tabDisplayData.label
    };
  });

  const handleTabChange = (selectedTabIndex: number) => {
    const tab = tabs[selectedTabIndex];
    if (tab) {
      setActiveTab(tab.instanceId);
    }
  };

  return (
    <Tabs
      tabs={tabItems}
      selected={tabs.findIndex(tab => tab.instanceId === activeTabId)}
      onSelect={handleTabChange}
      fitted
    />
  );
};

export default TabContainer; 