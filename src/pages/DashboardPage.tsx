import React from 'react';
import { 
  Page, 
  Layout, 
  Card, 
  FormLayout, 
  TextField, 
  Box,
  Text
} from '@shopify/polaris';
import { 
  ProjectMetrics, 
  TaskMetrics, 
  TeamMetrics, 
  ProgressMetrics 
} from '../components/dashboard';
import { useDashboardStore } from '../store/dashboardStore';
import { shallow } from 'zustand/shallow';
import { ProjectList } from '../components/dashboard/ProjectList';

const DashboardPage: React.FC = () => {
  const { metrics, updateMetrics } = useDashboardStore(
    (state) => ({
      metrics: state.metrics,
      updateMetrics: state.updateMetrics
    }),
    shallow
  );

  const handleMetricChange = (field: string) => (value: string) => {
    const numValue = parseInt(value) || 0;
    updateMetrics({ [field]: numValue });
  };

  return (
    <Page title="Dashboard Overview">
      <Layout>
        <Layout.Section variant="oneHalf">
          <ProjectMetrics />
        </Layout.Section>
        <Layout.Section variant="oneHalf">
          <TaskMetrics />
        </Layout.Section>
        <Layout.Section variant="oneHalf">
          <TeamMetrics />
        </Layout.Section>
        <Layout.Section variant="oneHalf">
          <ProgressMetrics />
        </Layout.Section>

        <Layout.Section>
          <ProjectList />
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Box padding="400">
              <Box paddingBlockEnd="400">
                <Text variant="headingMd">Update Metrics</Text>
              </Box>
              <FormLayout>
                <FormLayout.Group>
                  <TextField
                    label="Total Projects"
                    type="number"
                    value={metrics.totalProjects.toString()}
                    onChange={handleMetricChange('totalProjects')}
                    autoComplete="off"
                  />
                  <TextField
                    label="Active Projects"
                    type="number"
                    value={metrics.activeProjects.toString()}
                    onChange={handleMetricChange('activeProjects')}
                    autoComplete="off"
                  />
                </FormLayout.Group>

                <FormLayout.Group>
                  <TextField
                    label="Completed Tasks"
                    type="number"
                    value={metrics.completedTasks.toString()}
                    onChange={handleMetricChange('completedTasks')}
                    autoComplete="off"
                  />
                  <TextField
                    label="Pending Tasks"
                    type="number"
                    value={metrics.pendingTasks.toString()}
                    onChange={handleMetricChange('pendingTasks')}
                    autoComplete="off"
                  />
                </FormLayout.Group>

                <FormLayout.Group>
                  <TextField
                    label="Team Utilization (%)"
                    type="number"
                    value={metrics.teamUtilization.toString()}
                    onChange={handleMetricChange('teamUtilization')}
                    autoComplete="off"
                    min="0"
                    max="100"
                  />
                  <TextField
                    label="Total Hours"
                    type="number"
                    value={metrics.totalHours.toString()}
                    onChange={handleMetricChange('totalHours')}
                    autoComplete="off"
                  />
                </FormLayout.Group>

                <FormLayout.Group>
                  <TextField
                    label="Project Progress (%)"
                    type="number"
                    value={metrics.projectProgress.toString()}
                    onChange={handleMetricChange('projectProgress')}
                    autoComplete="off"
                    min="0"
                    max="100"
                  />
                  <TextField
                    label="Budget Utilization (%)"
                    type="number"
                    value={metrics.budgetUtilization.toString()}
                    onChange={handleMetricChange('budgetUtilization')}
                    autoComplete="off"
                    min="0"
                    max="100"
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
            </Box>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardPage; 