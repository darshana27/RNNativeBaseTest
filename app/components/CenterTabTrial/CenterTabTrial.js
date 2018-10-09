import React from 'react';
import {StyleSheet,Image,View,Dimensions,ScrollView,NetInfo,Text,TouchableOpacity,ImageBackground} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';
import {Container, Content, Tabs,Tab,Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Htmlview from '../Htmlview/Htmlview';
import Lightbox from '../Lightbox/Lightbox';
import CardsDemo from '../CardsDemo/CardsDemo';

export default class CenterTabTrial extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

//      componentDidMount(){

//         // require the module
// var RNFS = require('react-native-fs');

// // create a path you want to write to
// // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
// var path = RNFS.ExternalDirectoryPath+ '/logs.txt';
// console.log(path)
// // write the file
// RNFS.writeFile(path, 'Lorem ipsum dolor \n sit amet', 'utf8')
//   .then((success) => {
//     console.log('FILE WRITTEN!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
//     }

    render(){
        return(
            <Container>
                {/* <Header style={{backgroundColor:'#28B463'}} androidStatusBarColor='#CB4335'> */}
                <Header style={{backgroundColor:'#222222'}} androidStatusBarColor='#CB4335'>

                    <Left>
                        <Button transparent>
                        <Icon style={{color:'#28B463'}} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'#28B463'}}>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <FeatherIcon size={16} color='#28B463' name='search' />
                        </Button>
                        <Button transparent>
                            <FeatherIcon size={16} color='#28B463' name='heart' />
                        </Button>
                        <Button transparent>
                            <FeatherIcon size={16} name='more' color='#28B463'/>
                        </Button>
                    </Right>
                </Header> 
                <View>
                
                    <ImageBackground source={{uri:'https://picsum.photos/400/400?image=992'}} style={{height:250,width:400}}>
                        <View style={{margin:20,width:330,height:200}}>
                            <Text style={{color:'#fff',fontWeight:'600',fontSize:18,marginTop:30}}>Junoon (Sportobuddy's Mini Pro Football League)</Text>
                            <Text style={{color:'white',fontSize:13,marginTop:10}}>Western Railway Ground,Worli, Mumbai,Maharashtra, India</Text>
                            <View style={{flexDirection:'row',marginTop:20}}>
                                <TouchableOpacity style={{height:30,width:130,borderColor:'white',borderWidth:0.7,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <FeatherIcon name="activity" size={12} color="#fff"/>
                                    <Text style={{color:'white',fontSize:12}}>Predict-O-Meter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{height:30,width:130,borderColor:'white',borderWidth:0.7,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:40}}>
                                    <FeatherIcon name="grid" size={12} color="#fff"/>
                                    <Text style={{color:'white',fontSize:12}}>Playerboard</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                    <Tabs tabBarUnderlineStyle= { {backgroundColor: '#28B463'} }>
                        <Tab heading="Htmlview" 
                            tabStyle={{backgroundColor:'white',color:'black'}}
                            textStyle={{color:'black'}}
                            activeTabStyle={{backgroundColor:'white',color:'red'}}
                            activeTextStyle={{color:'#28B463'}}
                            >
                            <Htmlview/>
                        </Tab>
                        <Tab heading="Lightbox"
                            tabStyle={{backgroundColor:'white',color:'black'}}
                            textStyle={{color:'black'}}
                            activeTabStyle={{backgroundColor:'white',color:'red'}}
                            activeTextStyle={{color:'#28B463'}}
                        >
                            <Lightbox/>
                        </Tab>
                        <Tab heading="Cards"
                            tabStyle={{backgroundColor:'white',color:'black'}}
                            textStyle={{color:'black'}}
                            activeTabStyle={{backgroundColor:'white',color:'red'}}
                            activeTextStyle={{color:'#28B463'}}
                        >
                            <CardsDemo/>
                        </Tab>
                    </Tabs>
            </Container>
                
        )
    }
}