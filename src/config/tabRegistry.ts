import { lazy } from 'react';
import {
  HomeMajor,
  TimelineAttachmentMajor,
  CollectionsMajor,
  ViewMajor
} from '@shopify/polaris-icons';
import { TabConfig } from '../types/tab';

// Lazy load components
const TimeSheetPage = lazy(() => import('../pages/TimeSheetPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetailsPage'));

export const TAB_CONFIG: Record<string, TabConfig> = {
  TIMESHEET: {
    tabId: 'timesheet',
    tabIcon: TimelineAttachmentMajor,
    url: {
      url: '/timesheet',
      path: '/timesheet'
    },
    tabDisplayData: {
      name: 'TIMESHEET',
      label: 'Timesheets'
    },
    tabContentData: {
      title: 'Timesheet',
      module: 'timesheet'
    },
    component: TimeSheetPage,
    serviceName: 'AccountService'
  },
  PROJECTS: {
    tabId: 'projects',
    tabIcon: CollectionsMajor,
    url: {
      url: '/projects',
      path: '/projects'
    },
    tabDisplayData: {
      name: 'PROJECTS',
      label: 'Projects'
    },
    tabContentData: {
      title: 'Projects',
      module: 'projects'
    },
    component: ProjectsPage,
    serviceName: 'ProjectService'
  },
  DASHBOARD: {
    tabId: 'dashboard',
    tabIcon: HomeMajor,
    url: {
      url: '/',
      path: '/'
    },
    tabDisplayData: {
      name: 'DASHBOARD',
      label: 'Dashboard'
    },
    tabContentData: {
      title: 'Dashboard',
      module: 'dashboard'
    },
    component: DashboardPage,
    // clearStores: [{
    //   store: 'dashboardStore',
    //   resetFunction: 'resetMetrics'
    // }]
  },
  PROJECT_DETAILS: {
    tabId: 'project-details',
    tabIcon: ViewMajor,
    url: {
      url: '/project/:projectId',
      path: '/project/:projectId'
    },
    tabDisplayData: {
      name: 'PROJECT_DETAILS',
      label: 'Project Details'
    },
    tabContentData: {
      title: 'Project Details',
      module: 'project-details'
    },
    component: ProjectDetailsPage
  }
}; 