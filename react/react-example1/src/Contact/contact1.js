import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var ContactCss = require('../Contact/contact1.css');
export default class Contact extends React.Component{
    render(){
        return(
            <div className={ContactCss.contact1}>
                <div className={ContactCss.top}>
                    <Link to="aboutus">
                        <Button icon="left" type="primary"> 联系客服</Button>
                    </Link>
                </div>
                <div className={ContactCss.wenzi}>
                    <p>欢迎您与我们联系：</p>
                    <br/><br/>
                    <p>客服电话：18385214703</p>
                </div>
            </div>
        )
    }
}