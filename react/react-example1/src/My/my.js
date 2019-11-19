import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Avatar} from 'antd';


var MyCss = require('../My/my.css');
export default class My extends React.Component{
    render(){
        return(
            <div className={MyCss.my}>
                <div className={MyCss.top}>
                    <Link to="personal">
                        <Button icon="left" type="primary"> 我的</Button>
                    </Link>
                </div>
                <div className={MyCss.picture}>
                <Link to="touxiang">
                    <Avatar src="img/头像.jpg" />
                </Link>
                </div>
                <div className={MyCss.nicheng}>
                    <p>昵称：XXXX</p>
                </div>
                <div className={MyCss.number}>
                    <p>电话号码：XXXXXXXXX</p>
                </div>
            </div>
        )
    }
}