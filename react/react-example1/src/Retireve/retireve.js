import React from 'react';
import {Input,Icon,Button } from 'antd';
import{Link} from 'react-router-dom';


var RetireveCss = require('../Retireve/retireve.css');
export default class Retireve extends React.Component{
    render(){
        return(
            <div className={RetireveCss.retireve}>
                <div className={RetireveCss.retireveborder}>
                    <div className={RetireveCss.number}>
                    <Input placeholder="请输入手机号" prefix={<Icon type="mobile"></Icon>}></Input>
                    </div>
                    <div className={RetireveCss.yan}>
                        <Input placeholder="       验  证  码 "></Input>
                    </div>
                    <div className={RetireveCss.huoyan}>
                        <Button type="primary">获取验证码</Button>
                    </div>
                    <div className={RetireveCss.newpassword1}>
                    <Input.Password placeholder="请输入新密码" />
                    </div>
                    <div className={RetireveCss.newpassword2}>
                    <Input.Password placeholder="再次输入新密码"/>
                    </div>
                    <div className={RetireveCss.fanhui}>
                        <Link to="login">
                            <Button type="primary">返回登录</Button>
                        </Link>
                    </div>
                    <div className={RetireveCss.sure}>
                        <Link to="login">
                            <Button type="primary">确  定</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}