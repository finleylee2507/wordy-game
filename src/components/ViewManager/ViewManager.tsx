import * as React from 'react';
import { useView } from '../../providers';
import { View } from '../../constants.ts';
import { Game, LandingPage } from '../../pages';

const ViewManager: React.FC = () => {
  const { currentView } = useView();

  switch (currentView) {
    case View.Landing:
      return <LandingPage />;

    case View.Game:
      return <Game />;

    default:
      return <LandingPage />;
  }
};

export default ViewManager;
