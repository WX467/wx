import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var KnowCss = require('../Know/know1.css');
export default class Know extends React.Component{
    render(){
        return(
            <div className={KnowCss.know1}>
                <div className={KnowCss.top}>
                    <Link to="aboutus">
                        <Button icon="left" type="primary"> 使用需知</Button>
                    </Link>
                </div>
                <div className={KnowCss.wenzi}>
                    <p>本产品使用需知如下：</p>
                    <ul>
                        <li>提供信息仅供参考</li>
                        <li>请用户妥善保护好个人信息，本站不涉及交易</li>
                        <li>若提供信息有误，欢迎与我们联系</li>
                        <li>此产品宗旨在于为用户提供方便，您也可以向好友推广</li>
                    </ul>
                </div>
            </div>
        )
    }

}