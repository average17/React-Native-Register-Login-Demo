import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button
} from 'react-native';

export default class LoginScene extends Component {

    username = '';  //保存用户名
    password = '';  //保存密码

    /**
     * 当用户名输入框值改变时，保存改变的值
     * @param  {[type]} newUsername [输入的用户名]
     */
    onUsernameChanged = (newUsername) => {
        console.log(newUsername);//运行后可以在输入框随意输入内容并且查看log验证！
        this.username = newUsername;
    };

    /**
     * 当密码输入框值改变时，保存改变的值
     * @param  {[type]} newUsername [输入的密码]
     */
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.password = newPassword;
    };

    /**
     * 点击空白处使输入框失去焦点
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
    }

    /**
     * 登陆按钮，点击时验证输入的用户名和密码是否正确，正确时进入主页面，否则弹出提示
     */
    login = () => {
        if (this.username == 'Admin' && this.password == '123') {
            this.refs.username.blur();
        	this.refs.password.blur();
            const { navigate } = this.props.navigation;  //获取navigation的navigate方法
            navigate('Home');  //跳转到注册过的Home界面
        } else {
            Alert.alert("登陆失败","用户名或密码不正确");  //弹出提示框

        }
    };

    /**
     * 注册按钮，点击进入注册界面
     */
    register = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Register');  //跳转到注册过的Register界面
    }

    /**
     * 渲染图形界面
     * @return {[type]} [返回所渲染的界面]
     */
    render() {
        return (
            <TouchableOpacity  //用可点击的组件作为背景
            	activeOpacity={1.0}  //设置背景被点击时的透明度改变值
            	onPress={this.blurTextInput}  //添加点击事件
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                    	ref="username"  //设置描述
                        onChangeText={this.onUsernameChanged}  //添加值改变事件
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'用户名'}  //设置占位符
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                    	ref="password"  //设置描述
                        onChangeText={this.onPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        secureTextEntry={true}  //设置为密码输入框
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                <TouchableOpacity
                    onPress={this.login} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.register}  //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>注册</Text>
                </TouchableOpacity>
            </TouchableOpacity>
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
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});