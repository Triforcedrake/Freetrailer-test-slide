import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import StyleSheet from './components/my_styles'; 

import SwipeButton from 'rn-swipe-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Unlock\nFreetrailer',
      icon: <Ionicons name="lock-closed-outline" size={100} color="white" />,
    };
  }

  keyIcon = () => <Ionicons name="key-outline" size={40} color="white" /> 

  showIcon = icon => this.setState({icon}); 

  renderIconStatus = () => (
      <Text style={StyleSheet.text}>{this.state.icon}</Text>
  );

  showMessage = message => this.setState({message});

  renderMessageStatus = () => (
    <Text style={StyleSheet.text}>{this.state.message}</Text>
  );

  render() {
    return (
      <View style={StyleSheet.container}>
        <ImageBackground source={require('./assets/img/background.jpg')} style={StyleSheet.background}>
          <View style={StyleSheet.top}>
            {this.renderIconStatus()}
            {this.renderMessageStatus()}
          </View>
          <View style={StyleSheet.swipe}>
            <Text style={[StyleSheet.text, StyleSheet.nonBold]}>SLIDE TO OPEN</Text>
          <SwipeButton
            RightToLeftSwipe
            thumbIconComponent={this.keyIcon}
            thumbIconBackgroundColor="teal"
            title=""
            swipeSuccessThreshold={70}
            railBackgroundColor="#c2c2d6"
            railFillBackgroundColor="transparent"
            railFillBorderColor="transparent"
            onSwipeStart={() => 
              {this.showMessage('Opening\nFreetrailer'); 
              this.showIcon(<Entypo name="progress-two" size={100} color="white" />);
            }}
            onSwipeSuccess={() => {
              this.showMessage('Your Freetrailer is now open'); 
              this.showIcon(<Ionicons name="md-checkmark-circle" size={100} color="green" />);
            }}
          /></View>
        </ImageBackground>
      </View>
    );
  }
}
