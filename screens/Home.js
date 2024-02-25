import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  Linking
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safe} />
        <ImageBackground
          source={require("../assets/stars.gif")}
          style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Stellar</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Dailypic")}}>
            <Text style={styles.buttonText}>Dailypic</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Image source={require("../assets/daily_pictures.png")} style={styles.buttonImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Spacecraft")}}>
            <Text style={styles.buttonText}>Spacecraft</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Image source={require("../assets/spacecraft.png")} style={styles.buttonImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Starmap")}}>
            <Text style={styles.buttonText}>Starmap</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Image source={require("../assets/star_map.png")} style={styles.buttonImage}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    flex: 0.2,
    borderRadius: 30,
    backgroundColor: 'rgba(52,52,52,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25
  },
  knowMore: {
    paddingLeft: 30,
    color:"red",
    fontSize: 20
  },
  one: {
    color: "rgba(180,180,180,0.5)",
    fontSize: 150,
    right: 20,
    position: "absolute",
    bottom: -15,
    zIndex: -5
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    marginBottom: 70,
    marginLeft: 200
  }
});
