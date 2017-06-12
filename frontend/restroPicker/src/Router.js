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

class RouterComponent extends React.Component {
  render(){
    return (
      <Router sceneStyle={{ paddingTop: 65, backgroundColor: '#1879fd'}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="entry" initial>
          <Scene
            key="splash"
            component={Splash}
            title="RestoPick"
            hideNavBar={true}
            />
          <Scene
            key="newGroupForm"
            component={NewFormContainer}
            title="Create a Group"
            hideNavBar={false}
            />
          <Scene
            key="joinGroupForm"
            component={JoinFormContainer}
            title="Join a Group"
            hideNavBar={false}
            />
        </Scene>

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
              component={RankingPageContainer}
              />
        </Scene>

        <Scene key="room">
          <Scene
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
  navBar: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#1879fd', // changing navbar color
  },
  navTitle: {
    // color: 'white',
    fontWeight: '600',
  },
  // routerScene: {
  //   paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
  // },
};


const mapDispatchToProps = dispatch => ({
  clearGroup: ()=> dispatch(clearGroup())
});
export default connect(null, mapDispatchToProps)(RouterComponent);
