import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Input,Icon} from 'antd';
const { Search } = Input;


var InquirePageCss = require('./inquire.css');
export default class inquire extends React.Component{
    render(){
        return(
            <div className={InquirePageCss.inquire}>
                <div className={InquirePageCss.top}>
                <Link to="firstpage">
                        <Button icon="left" type="primary"> 首 页 </Button>
                </Link> 
                </div>
                <div className={InquirePageCss.searchborder}>
                    <Search placeholder="请输入垃圾名称" onSearch={value => console.log(value)} enterButton={<Link to="result"><Icon type="search"></Icon> </Link>} />
                    <br/><br/><br/>
                    <strong>温馨提示：</strong>
                    <p><br/>此搜索针对站内已有垃圾名称有效</p>
                </div>

            </div>
        )
    }
}