import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Image style={{width: '50%', height: '20%'}} source={require('./images/1_jpg.jpeg')}/>
        <Image style={{width: '50%', height: '20%'}} source={require('./images/2_png.png')}/>
        <Image style={{width: '50%', height: '20%'}} source={require('./images/3_gif.gif')}/>
        <Image style={{width: '50%', height: '20%'}} source={{uri: 'https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF'}}/>
      </View>
    )
  }
}
