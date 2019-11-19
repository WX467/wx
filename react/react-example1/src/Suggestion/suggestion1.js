import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Input} from 'antd';
const { TextArea } = Input;

var SuggestionCss = require('../Suggestion/suggestion1.css');
export default class Suggestion extends React.Component{
    render(){
        return(
            <div className={SuggestionCss.suggestion1}>
                <div className={SuggestionCss.top}>
                    <Link to="aboutus">
                        <Button icon="left" type="primary"> 用户建议</Button>
                    </Link>
                </div>
                <div className={SuggestionCss.shuru}>
                    <TextArea rows={6} placeholder="请输入您的建议" />   
                    <Button type="primary">提交</Button>
                </div>
            </div>
        )
    }
}