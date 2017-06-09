import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Splash from './components/Splash';
import RestoList from './components/restos/RestoList';
import NewFormContainer from './components/forms/NewFormContainer';
import JoinFormContainer from  './components/forms/JoinFormContainer';
import WaitRoom from './components/waitroom/WaitRoom';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
            key="splash"
            component={Splash}
            title="RestoPick"
            />
      <Scene
            key="newGroupForm"
            component={NewFormContainer}
            title="Create a Group"
            />
      <Scene
            key="joinGroupForm"
            component={JoinFormContainer}
            title="Join a Group"
            />

      <Scene
            key="restoList"
            component={RestoList}
            title="Ranking Time!"
            />
      <Scene
            key="waitRoom"
            component={WaitRoom}
            title="Waiting..."
            initial/>
    </Router>
  );
};

export default RouterComponent;
