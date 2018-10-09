import React from 'react';
import {TabNavigator} from 'react-navigation';
import Htmlview from '../components/Htmlview/Htmlview';
import Lightbox from '../components/Lightbox/Lightbox';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';

export const Tab=TabNavigator({
    Htmlview:{
        screen: Htmlview,
        navigationOptions:{
            tabBarLabel:'HtmlView Demo',
            tabBarIcon:( <FeatherIcon name="" size={30} color="#900" />)
        }
    },
    Lightbox:{
        screen:Lightbox,
    }
},{
    tabBarPosition:'bottom',
    swipeEnabled: true,
    tabBarOptions:{
        showIcon:true,
        activeBackgroundColor:'#000',
        activeTintColor:'#fff',
        inactiveTintColor:'#000',
        labelStyle:{
            fontSize:22,
            padding:12
        }
    }
}
)