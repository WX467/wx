import React from 'react';
import {Input,Button,Avatar} from 'antd';
import{Link} from 'react-router-dom';

var RegisterCss = require('../Register/register.css');
export default class Register extends React.Component{
    render(){
        return(
            <div className={RegisterCss.register}>
                <div className={RegisterCss.registerborder}>
                    <div className={RegisterCss.touxiang}>
                        <Avatar size={64} icon="user" />
                    </div>

                    <div className={RegisterCss.name}>
                        <strong>用户名：</strong>
                         <Input placeholder="昵称"className={RegisterCss.nameinput} ></Input>
                    </div>

                    <div className={RegisterCss.number}>
                        <strong>手机号码：</strong>
                         <Input placeholder="手机号"className={RegisterCss.numberinput} ></Input>
                    </div>

                    <div className={RegisterCss.yanzheng}>
                        <strong>验证码：</strong> 
                        <Input placeholder="验证码"className={RegisterCss.yanzhenginput} ></Input>
                        <Button type="primary">获取验证码</Button>
                    </div>

                    <div className={RegisterCss.area}>
                        <strong>所在地区：</strong>
                        <Input placeholder="XX省"className={RegisterCss.areainput1} ></Input>
                        <Input placeholder="XX市"className={RegisterCss.areainput2} ></Input>
                    </div>
                    <div className={RegisterCss.password1}>
                    <strong>密码：</strong>
                    <Input.Password className={RegisterCss.password1input}/>
                    </div>
                    <div className={RegisterCss.password2}>
                    <strong>确认密码：</strong>
                    <Input.Password className={RegisterCss.password2input}/>
                    </div>
                    <div className={RegisterCss.zhuce}>
                        <Link to="homepage">
                            <Button type="primary"> 注 册 </Button>
                        </Link>
                    </div>

                </div>
                
            </div>
        )
    }
}