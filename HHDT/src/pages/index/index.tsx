import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Picker, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='ofh'>
          <Button type='primary' size='mini' style={{ float: 'left' }}>按钮文案</Button>
          <AtButton type='primary' size='small' className='fl'>按钮文案</AtButton>
          <Text className='fl'>Hello world!</Text>
        </View>
        <Picker mode='region' value={[]} onChange={() => {}}>
          <View>
            当前选择：
          </View>
        </Picker>
      </View>
    )
  }
}
