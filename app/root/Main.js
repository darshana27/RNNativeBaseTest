import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import Htmlview from '../components/Htmlview/Htmlview';
import Lightbox from '../components/Lightbox/Lightbox';
import CenterTabTrial from '../components/CenterTabTrial/CenterTabTrial';
import CardsDemo from '../components/CardsDemo/CardsDemo';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          screenName:this.props.screen     
        }
      }

    render(){
        return(
            <Stack/>
        )
    }
}

const Stack=createStackNavigator({
    Htmlview: {
        screen: Htmlview,
        title:Htmlview,
        navigationOptions:{
            header: null,
            }
    },
    Lightbox: {
        screen: Lightbox,
        title: Lightbox,
        navigationOptions:{
            header: null,
            }
    },
    CenterTabTrial: {
        screen: CenterTabTrial,
        title: CenterTabTrial,
        navigationOptions:{
            header: null,
        }
    },
    CardsDemo: {
        screen: CardsDemo,
        title: CardsDemo,
        navigationOptions:{
            header: null,
        }
    }
}, {initialRouteName:'CenterTabTrial'});

