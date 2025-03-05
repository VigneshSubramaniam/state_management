import React, { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTabStore } from '../store/tabStore';
import { TAB_CONFIG } from '../config/tabRegistry';
import TabContainer from './TabContainer';
import TabStateWrapper from './TabStateWrapper';
import { Spinner } from '@shopify/polaris';

const TabManager: React.FC = () => {
  const { tabs, activeTabId } = useTabStore();
  const navigate = useNavigate();

  // Only render the active tab's component
  const activeTab = tabs.find(tab => tab.instanceId === activeTabId);

  React.useEffect(() => {
    if (activeTab) {
      navigate(activeTab.url);
    }
  }, [activeTabId, navigate]);

  return (
    <div className="tab-manager">
      <TabContainer />
      <div className="tab-content">
        <Suspense fallback={<Spinner />}>
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