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
  Alert,
  Linking
} from 'react-native';
import axios from 'axios';



export default class Dailypic extends Component {

  constructor()
  {
    super();
    this.state = {
      apod: {}
    }
  }
  
  getAPOD=()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Nn7ACh8DUfVIC739SRcD2KDBSxtia0v1YvY77DnX")
    .then(response => {
      this.setState({ apod: response.data })
    })
    .catch(error => {
      Alert.alert(error.message)
    })
  }

  componentDidMount()
  {
    this.getAPOD();
  }  
  
  render()
  {
    return(
      <View>
        <SafeAreaView />
        <ImageBackground source={require("../assets/stars.gif")}>
          <Text>Astronomy Picture of the Day</Text>
          <Text>{this.state.apod.title}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Image source={require("../assets/play-video.png")} style={{width: 50, height: 50, marginTop: 200}}/>
            </View>
          </TouchableOpacity>
          <Text>{this.state.apod.explanation}</Text>
        </ImageBackground>
      </View>
    );
  }

}