import * as React from 'react';
import { useView } from '../../providers';
import { View } from '../../constants.ts';
import { LandingPage } from '../../pages';

const ViewManager: React.FC = () => {
  const { currentView } = useView();

  switch (currentView) {
    case View.Landing:
      return <LandingPage />;

    default:
      return <LandingPage />;
  }
};

export default ViewManager;
