import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Splash from './components/Splash';
import RestoListContainer from './components/restos/RestoListContainer';
import NewFormContainer from './components/forms/NewFormContainer';
import JoinFormContainer from  './components/forms/JoinFormContainer';
import RankingPage from './components/restos/RankingPage';
import { createRankings } from './actions/resto_actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
              key="splash"
              component={Splash}
              title="RestoPick"
              initial/>
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

        <Scene key="rank">
          <Scene
              title="Ranking Time!"
              rightTitle="Confirm"
              onRight={() => Actions.rankingPage()}
              key="restoList"
              component={RestoListContainer}
              />
          <Scene
              title="Confirm Rankings"
              key="rankingPage"
              component={RankingPage}
              />
        </Scene>
      </Router>
    );
  };

export default RouterComponent;
