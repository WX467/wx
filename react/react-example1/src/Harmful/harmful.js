import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var HarmfulCss = require('../Harmful/harmful.css');
export default class Harmful extends React.Component{
    render(){
        return(
            <div className={HarmfulCss.harmful}>
                   <div className={HarmfulCss.top}>
                <Link to="firstpage">
                        <Button icon="left" type="primary"> 首 页 </Button>
                    </Link> 
                </div>
                <div className={HarmfulCss.menu}>
                    <div className={HarmfulCss.menu1}>
                        <Link to="recoverable">
                            <p>可回收物</p>
                        </Link>
                    </div>
                    <div className={HarmfulCss.menu2}>
                        <p>有害垃圾</p>
                    </div>
                    <div className={HarmfulCss.menu3}>
                        <Link to="dry">
                            <p>干垃圾</p>
                        </Link>
                    </div>
                    <div className={HarmfulCss.menu4}>
                        <Link to="wet">
                            <p>湿垃圾</p>
                        </Link>
                    </div>
                </div>
                <div className={HarmfulCss.middle}>
                    <img src="img/有害垃圾.jpg"></img>
                    <br></br>
                    <br></br>
                    <p><strong>有害垃圾：</strong>有害垃圾指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。</p>
                    <br></br>
                    <br></br>
                    <p><strong>投放要求：</strong>分类投放有害垃圾时，应注意轻放。其中：废灯管等易破损的有害垃圾应连带包装或包裹后投放；废弃药品宜连带包装一并投放；杀虫剂等压力罐装容器，应排空内容物后投放；在公共场所产生有害垃圾且未发现对应收集容器时，应携带至有害垃圾投放点妥善投放。</p>
                </div>
                <div className={HarmfulCss.right}>
                    <div className={HarmfulCss.righttop}>
                        <strong>常见有害垃圾:</strong>
                    </div>
                    <div className={HarmfulCss.item}>
                        充电电池<br/>镉镍电池<br/>铅酸电池<br/>蓄电池<br/>纽扣电池<br/>荧光（日光）灯管<br/>卤素灯<br/>
                        过期药物<br/>药物胶囊<br/>药片<br/>药品内包装<br/>废油漆桶<br/>染发剂壳<br/>过期的指甲油<br/>
                        洗甲水<br/>废矿物油及其包装物<br/>废含汞温度计<br/>水银血压计<br/>水银体温计<br/>水银温度计<br/>
                        老鼠药（毒鼠强）<br/>杀虫喷雾罐<br/>x光片等感光胶片<br/>相片底片<br/>
废矿物油及其包装物
                    </div>

                </div>
            </div>
        )
    }
}