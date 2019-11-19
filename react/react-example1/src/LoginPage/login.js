import React from 'react';
import {Input,Icon,Button,Divider } from 'antd';
import{Link} from 'react-router-dom';

var LoginPageCss = require('../LoginPage/login.css');
export default class LoginPage extends React.Component{
    render(){
        return(
            <div className={LoginPageCss.login}>
                <div className={LoginPageCss.loginborder}>
                    <div className={LoginPageCss.input1}>
                        <Input placeholder="请输入手机号" prefix={<Icon type="mobile"></Icon>}></Input>
                    </div>
                    <div className={LoginPageCss.input2}>
                        <Input.Password placeholder="请输入密码" />
                    </div>
                    <Button className={LoginPageCss.denglu}>
                        <Link to="homepage">登录</Link>
                    </Button>
                    <div className={LoginPageCss.zhaozhu}>
                        <Link to="retireve"> 找回密码 | </Link>
                        <Link to="register"> 注册账号 </Link>
                    </div>
                    <div>
                    <Divider>第三方账号登陆</Divider>
                    </div>
                    <div>
                    <Link to="wechatpage">
                        <Icon type="wechat" style={{fontSize:'40px'}} className={LoginPageCss.weixin}/>
                    </Link>
                    <Link to="qqpage">
                        <Icon type="qq" style={{fontSize:'40px'}} className={LoginPageCss.qq} />
                    </Link>
                    <Link to="weibopage">
                        <Icon type="weibo-circle" style={{fontSize:'40px'}} className={LoginPageCss.weibo}/>
                    </Link>
                    </div>
                </div>
            </div>
        )
    } 
}
// function checkpost(){
//     if(document.forms[5].name.value=="用户名"&&document.forms[5].pw.value==" 密码"){ 
//           window.location="跳转的地址"}else{alert("用户名或密码不正确！")}
//         }