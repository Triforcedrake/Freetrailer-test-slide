import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

import SwipeButton from 'rn-swipe-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Unlock Freetrailer',
      icon: <FontAwesome5 name="lock" size={100} color="black" />,
    };
  }

  
  showIcon = icon => this.setState({icon}); 

  renderIconStatus = () => (
      <Text style={styles.text}>{this.state.icon}</Text>
  );

  showMessage = message => this.setState({message});

  renderMessageStatus = () => (
    <Text style={styles.text}>{this.state.message}</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/img/background.jpg')} style={styles.background}>
          {this.renderIconStatus()}
          {this.renderMessageStatus()}
          <SwipeButton
            RightToLeftSwipe
            thumbIconBackgroundColor="#FFFFFF"
            title=""
            swipeSuccessThreshold={70}
            railFillBackgroundColor="Blue"
            onSwipeStart={() => {this.showMessage('Opening Freetrailer'); this.showIcon(<Entypo name="progress-two" size={100} color="black" />);}}
            onSwipeSuccess={() => {this.showMessage('Your Freetrailer is now open'); this.showIcon(<Ionicons name="md-checkmark-circle" size={100} color="green" />);}}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
},

});
