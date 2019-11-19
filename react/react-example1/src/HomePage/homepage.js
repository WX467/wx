import React from 'react';
import{Link} from 'react-router-dom';


var HomePageCss = require('../HomePage/homepage.css');
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.homeborder}>
                <div className={HomePageCss.nav}>
                <ul>
                    <Link to="firstpage">
                        <li><a href="#">首页</a></li>
                    </Link>
                    <Link to="message">
                        <li><a href="#">资讯</a></li>
                    </Link>
                    <Link to="aboutus">
                        <li><a href="#"><b>关于我们</b></a></li>
                    </Link>
                    <Link to="personal">
                        <li><a href="#">个人中心</a></li>
                    </Link>
                </ul>
                </div>
                <div className={HomePageCss.slideshow}>
                    <ul className={HomePageCss.pictures}>
                        <li><img src="img/图7.jpg"/></li>
                        <li><img src="img/图8.jpg"/></li>
                        <li><img src="img/图9.jpg"/></li>
                        <li><img src="img/图10.jpg"/></li>
                        <li><img src="img/图11.jpg"/></li>
                     </ul>
                </div>
            </div>
        )
    }
}