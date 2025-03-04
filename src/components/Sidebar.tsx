import React from 'react';
import { Navigation } from '@shopify/polaris';
import { 
  HomeMajor, 
  TimelineAttachmentMajor, 
  CollectionsMajor 
} from '@shopify/polaris-icons';
import { useTabStore } from '../store/tabStore';

const Sidebar: React.FC = () => {
  const { addTab } = useTabStore();

  const navigationItems = [
    {
      label: 'Dashboard',
      icon: HomeMajor,
      onClick: () => addTab('DASHBOARD'),
      selected: false
    },
    {
      label: 'Projects',
      icon: CollectionsMajor,
      onClick: () => addTab('PROJECTS'),
      selected: false
    },
    {
      label: 'Timesheet',
      icon: TimelineAttachmentMajor,
      onClick: () => addTab('TIMESHEET'),
      selected: false
    }
  ];

  return (
    <Navigation location="/">
      <Navigation.Section items={navigationItems} />
    </Navigation>
  );
};

export default Sidebar; 