import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var RecoverableCss = require('../Recoverable/recoverable.css');
export default class Recoverable extends React.Component{
    render(){
        return(
            <div className={RecoverableCss.recoverable}>
                <div className={RecoverableCss.top}>
                <Link to="firstpage">
                        <Button icon="left" type="primary"> 首 页 </Button>
                    </Link> 
                </div>
                <div className={RecoverableCss.menu}>
                    <div className={RecoverableCss.menu1}>
                        <p>可回收物</p>
                    </div>
                    <div className={RecoverableCss.menu2}>
                        <Link to="harmful">
                            <p>有害垃圾</p>
                        </Link>
                    </div>
                    <div className={RecoverableCss.menu3}>
                        <Link to="dry">
                            <p>干垃圾</p>
                        </Link>
                    </div>
                    <div className={RecoverableCss.menu4}>
                        <Link to="wet">
                            <p>湿垃圾</p>
                        </Link>
                    </div>
                </div>
                <div className={RecoverableCss.middle}>
                    <img src="img/可回收.jpg"></img>
                    <br></br>
                    <br></br>
                    <p><strong>可回收物：</strong>指废纸张、废塑料、废玻璃制品、废金属、废织物等适宜回收、可循环利用的生活废弃物</p>
                    <br></br>
                    <br></br>
                    <p><strong>投放要求：</strong>应尽量保持清洁干燥，避免污染；立体包装应清空内容物，清洁后压扁投放；易破损或有裹尖锐边角的应包后投放</p>
                </div>
                <div className={RecoverableCss.right}>
                    <div className={RecoverableCss.righttop}>
                        <strong>常见可回收物:</strong>
                    </div>
                    <div className={RecoverableCss.item}>
                        报纸<br/>书本纸<br/>包装用纸<br/>办公用纸<br/>广告用纸<br/>纸盒塑料袋<br/>塑料泡沫<br/>塑料包装<br/>一次性塑料餐盒餐具<br/>
                        硬塑料<br/>料牙刷<br/>塑料杯子<br/>矿泉水瓶<br/>玻璃瓶<br/>碎玻璃片<br/>镜子<br/>灯泡<br/>暖瓶<br/>易拉罐<br/>铁皮罐头盒<br/>
                        牙膏皮<br/>废弃衣服<br/>桌布<br/>毛巾<br/>布包<br/>鞋<br/>摄像机<br/>香烟盒<br/>足球<br/>围巾<br/>录音机<br/>扑克牌<br/>
                        泡沫盒子<br/>信用卡<br/>啤酒瓶盖<br/>蜜蜡<br/>显示屏<br/>电熨斗<br/>雨伞伞面<br/>洗发露瓶<br/>乐高玩具<br/>自拍杆<br/>浴帘<br/>
                        手镯<br/>毛绒玩具<br/>床单<br/>电路板
                        
                    </div>

                </div>
            </div>
        )
    }
}