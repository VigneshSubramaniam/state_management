import React from 'react';
import { Card, FormLayout, TextField, BlockStack, Text } from '@shopify/polaris';
import { useDashboardStore } from '../../store/dashboardStore';
import { shallow } from 'zustand/shallow';

const DashboardForm: React.FC = () => {
  const { metrics, updateMetrics } = useDashboardStore(
    (state) => ({
      metrics: state.metrics,
      updateMetrics: state.updateMetrics,
    }),
    shallow
  );

  return (
    <Card>
      <BlockStack gap="4">
        <Text as="h2" variant="headingMd">Update Metrics</Text>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Total Projects"
              type="number"
              value={metrics.totalProjects.toString()}
              onChange={(value) => updateMetrics({ totalProjects: parseInt(value) || 0 })}
              autoComplete="off"
            />
            <TextField
              label="Active Projects"
              type="number"
              value={metrics.activeProjects.toString()}
              onChange={(value) => updateMetrics({ activeProjects: parseInt(value) || 0 })}
              autoComplete="off"
            />
            <TextField
              label="Team Utilization"
              type="number"
              value={metrics.teamUtilization.toString()}
              onChange={(value) => updateMetrics({ teamUtilization: parseInt(value) || 0 })}
              suffix="%"
              autoComplete="off"
            />
            <TextField
              label="Team count"
              type="number"
              value={metrics.teamCount.toString()}
              onChange={(value) => updateMetrics({ teamCount: parseInt(value) || 0 })}
              autoComplete="off"
            />
          </FormLayout.Group>
        </FormLayout>
      </BlockStack>
    </Card>
  );
};

export default DashboardForm; 