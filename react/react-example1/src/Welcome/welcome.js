import React from 'react';
import {Button,Icon} from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import LoginPage from '../LoginPage/login';

var WelcomeCss = require('../Welcome/welcome.css')
export default class Welcome extends React.Component{
    render(){
        return(
            <div className={WelcomeCss.welcome}>
                <div className={WelcomeCss.in} >
                    <BrowserRouter>
                    <Link to="/login">
                        <Button shape="round" type="denger" icon="right-circle" >  立即开启守护之旅 </Button>
                    </Link>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}