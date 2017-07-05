import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import RestoListContainer from './components/restos/RestoListContainer';
import NewFormContainer from './components/forms/NewFormContainer';
import JoinFormContainer from  './components/forms/JoinFormContainer';
import RankingPageContainer from './components/restos/RankingPageContainer';
import { createRankings } from './actions/resto_actions';
import { connect } from 'react-redux';
import WaitRoomContainer from './components/waitroom/WaitRoomContainer';
import ResultContainer from './components/result/ResultContainer';
import { clearGroup } from './actions/group_actions';

console.disableYellowBox = true;

class RouterComponent extends React.Component {
  render(){
    return (
      <Router sceneStyle={styles.sceneStyle} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="entry" initial>
          <Scene
            sceneStyle={styles.splashStyle}
            key="splash"
            component={Splash}
            title="RestoPick"
            hideNavBar={true}
            />
          <Scene
            key="newGroupForm"
            sceneStyle={styles.splashStyle}
            component={NewFormContainer}
            title="Create a Group"
            hideNavBar={false}
            />
          <Scene
            key="joinGroupForm"
            sceneStyle={styles.splashStyle}
            component={JoinFormContainer}
            title="Join a Group"
            hideNavBar={false}
            />
        </Scene>

        <Scene key="rank">
          <Scene
              sceneStyle={styles.rankingStyle}
              title="Ranking Time!"
              rightTitle="Confirm"
              onRight={() => Actions.rankingPage()}
              key="restoList"
              component={RestoListContainer}
              />
          <Scene
              sceneStyle={styles.rankingStyle}
              title="Confirm Rankings"
              key="rankingPage"
              component={RankingPageContainer}
              />
        </Scene>

        <Scene key="room">
          <Scene
            sceneStyle={styles.rankingStyle}
            onRight={() =>{this.props.clearGroup();
              Actions.entry({type: "reset"});
            }}
            rightTitle="Leave"
            key="waitRoom"
            component={WaitRoomContainer}
            title="Waiting..."
            />
        </Scene>

        <Scene key="end">
          <Scene
            sceneStyle={styles.rankingStyle}
            onRight={() => {this.props.clearGroup();
              Actions.entry({type: "reset"});}}
            rightTitle="Leave"
            key="results"
            component={ResultContainer}
            title="Results"
            />
        </Scene>

      </Router>
    );
  }
}




const styles = {
  sceneStyle: {
    paddingTop: 65,
    // backgroundColor: '#1879fd'
  },
  splashStyle: {
    paddingTop: 0
  },

  rankingStyle: {
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  navBar: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0)'
    // backgroundColor: '#1879fd', // changing navbar color
  },
  navTitle: {
    // color: 'white',
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  // routerScene: {
  //   paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
  // },
};


const mapDispatchToProps = dispatch => ({
  clearGroup: ()=> dispatch(clearGroup())
});
export default connect(null, mapDispatchToProps)(RouterComponent);
