import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';


export default class HomeScene extends Component {

    /**
     * 返回到登陆界面
     */
    backToLogin = () => {
        const { goBack } = this.props.navigation; //获取navigation的goBack方法
        goBack();  //返回上一界面
    }

    /**
     * 渲染图形界面
     * @return {[type]} [返回所渲染的界面]
     */
    render() {
        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.content}
                >登录成功!这是主页!</Text>
                <Button
                    onPress={this.backToLogin}  //添加点击事件
                    style={styles.button}
                    title='点击返回登陆'/>  //设置按钮标题
            </View>
        );
    }

}

/**
 * 设置界面的布局样式
 * @type {[StyleSheet]}
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        fontSize: 40,
    },
});