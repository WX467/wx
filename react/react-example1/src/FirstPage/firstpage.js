import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';


var FirstPageCss = require('../FirstPage/firstpage.css');
export default class FirstPage extends React.Component{
    render(){
        return(
            <div className={FirstPageCss.border}>
                <div className={FirstPageCss.top}>
                    <Link to="homepage">
                        <Button icon="left" type="primary"> 首 页</Button>
                    </Link>
                </div>
                <div className={FirstPageCss.slideshow}>
                    <ul className={FirstPageCss.pictures}>
                        <li><img src="img/图4.jpg"/></li>
                        <li><img src="img/图14.jpg"/></li>
                        <li><img src="img/图16.jpg"/></li>
                        <li><img src="img/图6.jpg"/></li>
                        <li><img src="img/图15.jpg"/></li>
                    </ul>
                </div>
                <div className={FirstPageCss.category}>
                    <Link to="recoverable">
                        <img src="img/可回收.jpg"/>
                    </Link>
                    <Link to="harmful">
                        <img src="img/有害垃圾.jpg"/>
                    </Link>
                    <Link to="dry">
                        <img src="img/干垃圾.jpg"/>
                    </Link>
                    <Link to="wet">
                        <img src="img/湿垃圾.jpg"/>
                    </Link>
                </div>
                <div className={FirstPageCss.search}>
                    <Link to="inquire">
                        <Button type="primary" size="large">垃 圾 查 询</Button>
                    </Link>
                </div>
            </div>
        )
    }
}