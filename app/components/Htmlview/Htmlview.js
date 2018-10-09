import React from 'react';

import {StyleSheet,Image,View,Button,Dimensions,ScrollView,NetInfo,Text,TouchableOpacity} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { TextField } from 'react-native-material-textfield';
import { TabHeading } from 'native-base';

 
export default class Htmlview extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.renderNode=this.renderNode.bind(this)
    }

    // getInitialState() {
    //   return {
    //     index: 0,
    //     types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
    //     size: 100,
    //     color: "#FFFFFF",
    //     isVisible: true
    //   }
    // }

    next() {
      if (this.state.index++ >= this.state.types.length)
        this.setState({index: 0})
      else
        this.setState({index: this.state.index++})
    }

    increaseSize() {
      this.setState({size: this.state.size + 10});
    }

    changeColor() {
      this.setState({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
    }

    changeVisibility() {
      this.setState({isVisible: !this.state.isVisible});
    }

    componentDidMount(){
      
      NetInfo.isConnected.fetch().then(isConnected => {
        alert('First, is ' + (isConnected ? 'online' : 'offline'));
      });
      NetInfo.getConnectionInfo().then((connectionInfo) => {
        alert('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      });
      NetInfo.isConnectionExpensive()
      .then(isConnectionExpensive => {
        alert('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));
      })
      .catch(error => {
        alert(error);
      });
    }

renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == 'img') {
        const a = node.attribs;
        return ( 
            <Image style={{width: 300, height: 300}} source={{uri: a.src}}/> );
      
    }
}
  render() {
  
    const htmlContent = `<h4>&nbsp;&nbsp;&nbsp;HTMLView demo</h4><p>
    Lorem Ipsum is simply <b><i>dummy</i></b> text of the printing 
    and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and 
    scrambled it to make a type specimen book. It has 
    survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially 
    unchanged.
    
    <a href="http://jsdf.co">&hearts; nice job!</a></p>

    `;
 
    return (
   
      <ScrollView>
       <TextField
        label='Phone number'
      
      />
        <HTMLView
          value={htmlContent}
          stylesheet={styles}
          renderNode={this.renderNode}
        />

      </ScrollView>
      
    );
  }
}
 
const styles = StyleSheet.create({
  p :{
    color:'#222'
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});