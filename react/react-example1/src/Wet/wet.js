import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var WetCss = require('../Wet/wet.css');
export default class Wet extends React.Component{
    render(){
        return(
            <div className={WetCss.wet}>
                <div className={WetCss.top}>
                <Link to="firstpage">
                        <Button icon="left" type="primary"> 首 页 </Button>
                    </Link> 
                </div>
                <div className={WetCss.menu}>
                    <div className={WetCss.menu1}>
                        <Link to="recoverable">
                            <Link to="recoverable">
                                <p>可回收物</p>
                            </Link>
                        </Link>
                    </div>
                    <div className={WetCss.menu2}>
                        <Link to="harmful">
                            <p>有害垃圾</p>
                        </Link>
                    </div>
                    <div className={WetCss.menu3}>
                        <Link to="dry">
                            <p>干垃圾</p>
                        </Link>
                    </div>
                    <div className={WetCss.menu4}>
                        <p>湿垃圾</p>
                    </div>
                </div>
                <div className={WetCss.middle}>
                    <img src="img/湿垃圾.jpg"></img>
                    <br></br>
                    <br></br>
                    <p><strong>湿垃圾：</strong>湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物。</p>
                    <br></br>
                    <br></br>
                    <p><strong>投放要求：</strong>应从产生时就与其它品种垃圾分开收集；投放前应尽量沥干水分；有外包装的应尽量去除外包装投放</p>
                </div>
                <div className={WetCss.right}>
                    <div className={WetCss.righttop}>
                        <strong>常见湿垃圾:</strong>
                    </div>
                    <div className={WetCss.item}>
                    谷物及其加工食品<br/>肉蛋及其加工食品<br/>水产及其加工食品<br/>蔬菜<br/>火锅汤底（沥干后的固体废弃物）<br/>
                    鱼骨<br/>碎骨<br/>茶叶渣<br/>咖啡渣糕饼<br/>糖果<br/>风干食品（肉干、红枣、中药材）<br/>
                    粉末类食品（冲泡饮料、面粉）<br/>宠物饲料<br/>水果果肉（椰子肉）<br/>水果果皮（西瓜皮、桔子皮、苹果皮）<br/>
                    水果茎枝（葡萄枝）<br/>果实（西瓜籽）<br/>家养绿植<br/>花卉<br/>花瓣<br/>枝叶<br/>小龙虾黄<br/>小龙虾<br/>
                    小龙虾肉<br/>小龙虾壳<br/>整只小龙虾
                        
                    </div>

                </div>
            </div>
        )
    }
}