import React, { Component } from 'react'
// import { View, Text, Checkbox, Label, Input, Button} from '@tarojs/components'
import { View, Text, Input, Button, Label, Checkbox, CheckboxGroup} from '@tarojs/components'
import './interest.scss'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  state = {
    list: [
      {
        value: '二次元',
        text: '二次元',
        checked: false
      },
      {
        value: '游戏',
        text: '游戏',
        checked: false
      },
      {
        value: '中古',
        text: '穿搭',
        checked: false
      },
      {
        value: '穿搭',
        text: '穿搭',
        checked: false
      },
      {
        value: '日饭圈',
        text: '日饭圈',
        checked: false
      }
    ]
  }

  gotoIndex=()=>{
    Taro.switchTab({url:'/pages/index/index'})
  }

  checkboxChange = (event) => {
    let checked = event.detail.value
    console.log("checked is :", checked);
    let changed = {}
    for (let i = 0; i < this.state.list.length; i++) {
      if (checked.indexOf(this.state.list[i].value) !== -1) {
        changed['list[' + i + '].checked'] = true
      } else {
        changed['list[' + i + '].checked'] = false
      }
    }
    this.setState (changed)
    console.log("changed is : ", changed);
  }

  render () {
    return (
      <View>
        <View style="margin: 30rpx">
          <Input style="border: 1px solid; padding: 5px" type='text' placeholder='搜索（搜索热门搜索文章）' focus={false}/>
        </View>
          <View>初次光临，请多关照</View>
          <br/>
          <View>请选择你感兴趣的标签</View>
          <View>趣奇会给你更好的推荐</View>
          <View className='page-body'>
            <CheckboxGroup onChange={this.checkboxChange}>
              {this.state.list.map((item, i) => {
                return (
                  <View>
                    <Label className='checkbox-list__label' for={i.toString()} key={i}>
                      <Checkbox value={item.value} checked={item.checked}>{item.text}</Checkbox>
                    </Label>
                  </View>
                )
              })}
            </CheckboxGroup>
          </View>
          <Button type="primary" size="mini" onClick={this.gotoIndex}>开启趣奇世界</Button>
          <br/>
          <Button type="primary" size="mini" plain= {true} >跳过，我先浏览看看</Button>
      </View>
    )
  }
}
