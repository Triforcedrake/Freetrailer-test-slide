import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
  
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-around",
        flexDirection: "column"
    },

    top: {
        flex: 4, 
        paddingTop: 200, 
    },

    swipe: {
        flex: 2, 
        padding: 30,
    },

    center: {
        textAlign: "center",
    },
    
    text: {
      fontSize: 40,
      paddingTop: 20, 
      paddingLeft: 20,
      paddingRight: 20,  
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },

    nonBold: {
        fontSize: 20, 
        fontWeight: "normal",
        paddingBottom: 20, 
    },   

});   