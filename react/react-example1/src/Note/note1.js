import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Input} from 'antd';
const { TextArea } = Input;

var NoteCss = require('../Note/note1.css');
export default class Note extends React.Component{
    render(){
        return(
            <div className={NoteCss.note1}>
                <div className={NoteCss.top}>
                    <Link to="personal">
                        <Button icon="left" type="primary"> 分类笔记</Button>
                    </Link>
                </div>
                <div className={NoteCss.shuru}>
                    <TextArea rows={6} placeholder="请输入您的笔记" />   
                    <Button type="primary">提交</Button>
                </div>
            </div>
        )
    }
}