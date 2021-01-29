import React, { Component } from 'react'
import { View, Icon, Input, Button, Text, Image, Label} from '@tarojs/components'
import './index.scss'
import logo from '../../img/logo.png'
import mercari from '../../img/mercari.png'
// import amozon from '../../img/amozon.png'
// import junhewu from '../../img/junhewu.png'
import Taro from '@tarojs/taro'
import { Swiper, SwiperItem } from '@tarojs/components'

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
      url: 'http://10.20.99.177:3000/catogory/test', //仅为示例，并非真实的接口地址
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
        <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            // vertical
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>
                <View>
                  <Image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4002513153,205348724&fm=26&gp=0.jpg" 
                  style="height: 100px;align-content: center "
                  ></Image>
                </View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>
                <View>
                  <Image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3704376025,3781366144&fm=26&gp=0.jpg" 
                  style="height: 100px;"
                  ></Image>
                </View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>
                <View>
                  <Image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=960995070,2005580090&fm=26&gp=0.jpg" 
                  style="height: 100px;"
                  ></Image>
                </View>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        {/* <View style="display: flex; flex-direction: row;"> */}
        <View className='at-row'>
          <View className='at-col'>
            <Image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330514628,1753793501&fm=26&gp=0.jpg"
              style="height:50px; width: 50px"
            ></Image>
            <View>煤炉</View>
          </View>
          <View className='at-col'>
            <Image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2506043342,1411704096&fm=26&gp=0.jpg"
              style="height:50px; width: 50px"
            ></Image>
            <View>
              日亚
            </View>
          </View>
          <View className='at-col'>
          <Image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=720277829,233735344&fm=26&gp=0.jpg"
              style="height:50px; width: 50px"
            ></Image>
            <View>
              骏河屋
            </View>
          </View>
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
