import React from 'react';
import {StyleSheet,Image,View,Dimensions,ScrollView,NetInfo,Text,TouchableOpacity,ImageBackground} from 'react-native';
import LineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons'
import styles from '../CenterTabTrial/styles';
import {  Container, Card, CardItem, Left, Right, Thumbnail, Content, Footer, FooterTab, Button, Icon, Body } from 'native-base';

export default class cardsDemo extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <Container>      
                <Content contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>
                <Card style={{width:Dimensions.get('window').width-20}}>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'https://picsum.photos/100/100?image=1079'}} />
                    <Body>
                    <Text style={{fontWeight:'bold'}}>Mr. Eagle</Text>
                    <Text note style={{fontSize:12}}>I'm FLYINGGGGG</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody style={{alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../assets/gif/sampleGif.gif')} style={{height:100,width:300}} />
                </CardItem>
                <CardItem>
                <Left>
                    <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>11h ago</Text>
                </Right>
                </CardItem>
          </Card>
                </Content>
                    <Footer style={{bottom:0,position:'relative'}}>
                        <FooterTab style={{backgroundColor:'#222222'}}>
                            <Button>
                                <LineIcon name="picture" color='#28B463'  size={20} />
                                <Text  style={{fontSize:12,color:'#28B463'}}>Gallery</Text>
                            </Button>
                            <Button>
                                <LineIcon name="camera" color='#28B463'  size={20}/>
                                <Text style={{fontSize:12,color:'#28B463'}}>Capture</Text>
                            </Button>
                            <Button>
                                <LineIcon name="frame" color='#28B463'  size={20}/>
                                <Text style={{fontSize:12,color:'#28B463'}}>Crop</Text>
                            </Button>
                            <Button>
                                <LineIcon name="camrecorder"  color='#28B463'  size={20}/>
                                <Text style={{fontSize:12,color:'#28B463'}}>Record</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
           </Container>
        )
    }

}