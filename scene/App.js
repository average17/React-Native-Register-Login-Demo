/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

//引入三个界面文件，并设置引入的类
//引入主界面
import HomeScene from './homeScene';
//引入登陆界面
import LoginScene from './loginScene';
//引入注册界面
import RegisterScene from './registerScene';

//注册导航界面
const SimpleApp = StackNavigator({
    Login: {
      screen: LoginScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          headerTitle: '登陆',  //设置导航栏标题
      }
    },
    Home: {
      screen: HomeScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          header: null,  //隐藏导航栏
      }
    },
    Register: {
      screen: RegisterScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          headerTitle: '注册',  //设置导航栏标题
      }
    }
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}