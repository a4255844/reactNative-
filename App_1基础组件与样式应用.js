import React, { Component } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
/* 
  1. 在RN中默认容器 布局方式 都是Flex
  2. 方向 flex-direction : column;
  3. 在rn中演示 没有继承
  4. 单位
      1. 不用加 px  vw vh 
      2. 可以加 百分比 "50%"
      3. Dimensions用来获取设备的宽和高
  5. View组件,不支持放入文本内容, 不能绑定事件
  6. Text组件, 用来处理文本相关的东西, 支持绑定事件
*/
export default class App extends Component {
  state = {
    testText: '点击测试'
  }
  pressHandle = () => {
    this.setState({testText: '测试22222'})
    alert('触摸了')
  }
  render() {
    return (
      <>
        <View 
          style={{
            backgroundColor:'aqua', 
            flexDirection:'row', 
            color:'red',
            width: '50%',
            height: '50%'
          }}
        >
          <Text style={{color: 'red', fontSize:20}}> textInComponent </Text>
          <Text> textInComponent2 </Text>
          <Text> textInComponent2 </Text>
        </View>
        <View style={{width: windowWidth / 2, height: windowHeight / 2, backgroundColor: 'pink'}}>
          <TouchableOpacity  onPress={this.pressHandle}  activeOpacity={0.5}>
            <Text style={{transform:[{translateY: 50}, {scale: 1.5}]}} >{this.state.testText}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
