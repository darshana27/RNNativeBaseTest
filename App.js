import React, {Component} from 'react';
import Main from './app/root/Main';
import {Tab} from './app/navigator/Tabnavigator';
import {Root} from 'native-base';
export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Root>
      <Main/>
      </Root>
      // <Tab/>
    );
  }
}


