import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default class RegisterScene extends Component {

    username = '';  //保存用户名
    password = '';  //保存密码
    confirmPassword = '';  //保存确认密码

    /**
     * 当用户名输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的用户名]
     */
    onUsernameChanged = (newUsername) => {
        console.log(newUsername);//运行后可以在输入框随意输入内容并且查看log验证！
        this.username = newUsername;
    };

    /**
     * 当密码输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的密码]
     */
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.password = newPassword;
    };

    /**
     * 当确认密码输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的确认密码]
     */
    onConfirmPasswordChanged = (newConfirmPassword) => {
        console.log(newConfirmPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.confirmPassword = newConfirmPassword;
    }

    /**
     * 点击空白处使输入框失去焦点
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
        this.refs.confirmPassword.blur();
    }

    /**
     * 注册按钮，根据输入的内容判断注册是否成功
     */
    register = () => {
        if (this.username != '' && this.password != '') {
            if (this.username != 'Admin') {
                if (this.password === this.confirmPassword) {
                    const { goBack } = this.props.navigation;  //获取navigation的goBack方法

                    Alert.alert("注册成功","返回登陆",[{text: '确定', onPress: () => { goBack(); }}])  //给弹出的提示框添加事件
                } else {
                    Alert.alert("注册失败","密码与确认密码不同");
                }
            } else {
                Alert.alert("注册失败","此用户名已经被注册");
            }
        } else {
            Alert.alert("注册失败","用户名或密码不能为空");
        }
    };

    /**
     * 渲染图形界面
     * @return {[type]} [返回所渲染的界面]
     */
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}  //设置背景被点击时，透明度不变
                onPress={this.blurTextInput}  //添加点击事件
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="username"  //添加描述
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
                        ref="password"  //添加描述
                        onChangeText={this.onPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="confirmPassword"  //添加描述
                        onChangeText={this.onConfirmPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'确认密码'}  //设置占位符
                    />
                </View>
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
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});