import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var IntroductionCss = require('../Introduction/introduction1.css');
export default class Introduction extends React.Component{
    render(){
        return(
            <div className={IntroductionCss.introduction}>
                <div className={IntroductionCss.top}>
                    <Link to="aboutus">
                        <Button icon="left" type="primary"> 功能介绍</Button>
                    </Link>
                </div>
                <div className={IntroductionCss.wenzi}>
                    <p>本产品主要功能如下：</p>
                    <ul>
                        <li>垃圾分类查询服务</li>
                        <li>一键式搜索解决用户垃圾分类不明确的困扰</li>
                        <li>了解垃圾分类相关知识</li>
                        <li>了解垃圾分类相关资讯</li>
                    </ul>
                </div>
            </div>
        )
    }
}