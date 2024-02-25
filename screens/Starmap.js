import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Platform,
  Image,
  TextInput
} from 'react-native';
import {WebView} from "react-native-webview";




export default class Starmap extends Component {

  constructor()
  {
    super();
    this.state = {
      longitude: "",
      latitude: ""
    }
  }
  
  render()
  {
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${this.state.longitude}&latitude=${this.state.latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
    return(
      <View>
      <SafeAreaView />
        <TextInput 
          style={{height: 40, borderColor: "gray", borderWidth: 1}}
          placeholder="Enter your latitude"
          placeholderTextColor= "#ffff#000000"
          onChangeText={(text)=>{
            this.setState({
              latitude: text
            })
          }}
        />
        <TextInput 
          style={{height: 40, borderColor: "gray", borderWidth: 1, marginTop: 10}}
          placeholder="Enter your longitude"
          placeholderTextColor= "#ffff#000000"
          onChangeText={(text)=>{
            this.setState({
              longitude: text
            })
          }}
        />
        <WebView
          scalesPageToFit={true}
          source={{uri: path}}
          style={{marginTop: 20, marginBottom: 20, flex: 1}}
        />
      </View>
    );
  }

}