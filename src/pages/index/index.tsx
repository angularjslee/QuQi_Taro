import React, { Component } from 'react'
import { View, Icon, Input, Button, Text, Image, Label} from '@tarojs/components'
import './index.scss'
import logo from '../../img/logo.png'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  state = {
    results: [],
    icon: [
      {
        text: "add",
        size: 'default',
        type: "circle",
        icon: "add"
      }
    ]
  }
  componentWillMount () { }

  componentDidMount () { 
    Taro.request({
      url: 'http://10.20.99.173:3000/catogory/test', //仅为示例，并非真实的接口地址
      // data: {
      //   x: '',
      //   y: ''
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setState({
          results: res.data
        })
        console.log(this.state.results)
      },
      fail: (res) => {
        console.log(res.errMsg);
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { 

  }

  componentDidHide () { }
  
  render () {
    const { results } = this.state
    console.log("results is ", results);
    
    return (
      <View>
        <View>
          <Input style="border: 1px solid; padding: 5px" type='text' placeholder='搜索（搜索热门搜索文章）' focus/>
        </View> 
        <View>
          <Image src={logo} style="height: 100px; width: 100px; border: 1px solid; align-content: center "></Image>
        </View>
        <View style="display: flex; flex-direction: row;">
          <View>
            <View>煤炉</View>
          </View>
          <View>日亚</View>
          <View>骏河屋</View>
        </View>
        <View>
          <View>推荐商品</View>
          {/* <View>{this.state.results[0].price}</View> */}
          <View>
            {results.map((item:any) => {
              return (
                <View>
                  <Image src={item.thumbnail} style="height: 150px; width: 150px"></Image>
                  <View style="height: 100px; width: 100px">{item.title}</View>
                  <View>{item.price}</View>
                </View>
              )
            })}
          </View>
        </View>
          {/* <Icon type="success" size="25" color = "purple"></Icon> */}
      </View>
    )
  }
}
