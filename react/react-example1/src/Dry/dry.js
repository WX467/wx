import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var DryCss = require('../Dry/dry.css');
export default class Dry extends React.Component{
    render(){
        return(
            <div className={DryCss.dry}>
                <div className={DryCss.top}>
                <Link to="firstpage">
                        <Button icon="left" type="primary"> 首 页 </Button>
                    </Link> 
                </div>
                <div className={DryCss.menu}>
                    <div className={DryCss.menu1}>
                        <Link to="recoverable">
                            <p>可回收物</p>
                        </Link>
                    </div>
                    <div className={DryCss.menu2}>
                        <Link to="harmful">
                            <p>有害垃圾</p>
                        </Link>
                    </div>
                    <div className={DryCss.menu3}>
                        <p>干垃圾</p>
                    </div>
                    <div className={DryCss.menu4}>
                        <Link to="wet">
                            <p>湿垃圾</p>
                        </Link>
                    </div>
                </div>
                <div className={DryCss.middle}>
                    <img src="img/干垃圾.jpg"></img>
                    <br></br>
                    <br></br>
                    <p><strong>干垃圾：</strong>干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物。</p>
                    <br></br>
                    <br></br>
                    <p><strong>投放要求：</strong>生活垃圾的具体分类标准可根据经济社会发展水平、生活垃圾特性和处置利用需要予以调整。其他垃圾危害较小，但无再次利用价值，如建筑垃圾类，生活垃圾类等，一般采取填埋、焚烧、卫生分解等方法，部分还可以使用生物解决，如放蚯蚓等。是可回收垃圾、厨余垃圾、有害垃圾剩余下来的一种垃圾。</p>
                </div>
                <div className={DryCss.right}>
                    <div className={DryCss.righttop}>
                        <strong>常见干垃圾:</strong>
                    </div>
                    <div className={DryCss.item}>
                    餐巾纸<br/>卫生间用纸<br/>尿不湿<br/>猫砂<br/>狗尿垫<br/>污损纸张<br/>烟蒂<br/>干燥剂<br/>
                    污损塑料<br/>尼龙制品<br/>编织袋<br/>防碎气泡膜<br/>大骨头<br/>硬贝壳<br/>
                    硬果壳（椰子壳、榴莲壳、核桃壳、玉米衣、甘蔗皮）<br/>硬果实（榴莲核、菠萝蜜核）<br/>毛发<br/>
                    灰土<br/>炉渣<br/>橡皮泥<br/>太空沙<br/>带胶制品（胶水、胶带）<br/>花盆<br/>毛巾<br/>
                    一次性餐具<br/>镜子<br/>陶瓷制品<br/>竹制品（竹篮、竹筷、牙签
                        
                    </div>

                </div>
            </div>
        )
    }
}