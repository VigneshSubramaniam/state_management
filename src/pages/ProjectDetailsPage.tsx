import React from 'react';
import { Page, Layout, Card, Text, ProgressBar, BlockStack } from '@shopify/polaris';
import { useParams } from 'react-router-dom';
import { INITIAL_PROJECTS } from '../types/project';

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = INITIAL_PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return <Text>Project not found</Text>;
  }

  const completionRate = (project.completedTasks / project.totalTasks) * 100;

  return (
    <Page title={project.name}>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="4">
              <Text as="h2" variant="headingLg">{project.name}</Text>
              <BlockStack gap="2">
                <Text variant="bodyMd">Status: {project.status}</Text>
                <Text variant="bodyMd">Type: {project.type}</Text>
                <Text variant="bodyMd">Tasks Completed: {project.completedTasks}</Text>
                <Text variant="bodyMd">Tasks Pending: {project.pendingTasks}</Text>
                <Text variant="bodyMd">Total Tasks: {project.totalTasks}</Text>
                <Text variant="bodySm">Completion Rate:</Text>
                <ProgressBar progress={completionRate} />
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProjectDetailsPage; 