import React, { Component } from 'react'
import { View, Text, Button} from '@tarojs/components'
import './shopping.scss'
import Taro from '@tarojs/taro'

export default class Index extends Component {

  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }
  gotoIndex=()=>{
    Taro.navigateTo({url:'/pages/index/index'})
  }
  render () {
    return (
      <View>
        <Text>Shopping Page</Text>
        <Button type="primary" size="mini" onClick={this.gotoIndex}>我要去Index页面</Button>
      </View>
    )
  }
}


