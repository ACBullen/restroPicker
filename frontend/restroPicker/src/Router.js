import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import RestoList from './components/restos/RestoList';
import NewFormContainer from './components/forms/NewFormContainer';
import JoinFormContainer from  './components/forms/JoinFormContainer';
import WaitRoomContainer from './components/waitroom/WaitRoomContainer';
import Result from './components/result/Result';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="entry">
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
      </Scene>

      <Scene key="rank">
        <Scene
              key="restoList"
              component={RestoList}
              title="Ranking Time!"
        />
      </Scene>

      <Scene key="room" initial>
        <Scene
              onRight={() => Actions.entry()}
              rightTitle="Leave"
              key="waitRoom"
              component={WaitRoomContainer}
              title="Waiting..."
        />
      </Scene>

      <Scene key="end">
        <Scene
              onRight={() => Actions.entry()}
              rightTitle="Leave"
              key="results"
              component={Result}
              title="Results"
        />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
