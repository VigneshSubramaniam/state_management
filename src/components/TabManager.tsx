import React, { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTabStore } from '../store/tabStore';
import { TAB_CONFIG } from '../config/tabRegistry';
import TabContainer from './TabContainer';
import TabStateWrapper from './TabStateWrapper';

const TabManager: React.FC = () => {
  const { tabs, activeTabId } = useTabStore();
  const navigate = useNavigate();

  // Only render the active tab's component
  const activeTab = tabs.find(tab => tab.instanceId === activeTabId);
  const activeConfig = activeTab ? TAB_CONFIG[activeTab.tabId] : null;

  React.useEffect(() => {
    if (activeTab) {
      navigate(activeTab.url);
    }
  }, [activeTabId]);

  return (
    <div className="tab-manager">
      <TabContainer />
      <div className="tab-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.entries(TAB_CONFIG).map(([key, config]) => (
              <Route
                key={config.tabId}
                path={config.url.path}
                element={
                  <TabStateWrapper>
                    <config.component />
                  </TabStateWrapper>
                }
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default TabManager; 