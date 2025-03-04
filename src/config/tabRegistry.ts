import { lazy } from 'react';
import {
  HomeMajor,
  TimelineAttachmentMajor,
  CollectionsMajor
} from '@shopify/polaris-icons';
import { TabConfig } from '../types/tab';

// Lazy load components
const TimeSheetPage = lazy(() => import('../pages/TimeSheetPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));

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
  }
}; 