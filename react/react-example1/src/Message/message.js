import React from 'react';
import{Link} from 'react-router-dom';
import{Button} from 'antd';

var MessageCss = require('../Message/message.css');
export default class Message extends React.Component{
    render(){
        return(
            <div className={MessageCss.message}>
                <div className={MessageCss.top}>
                    <Link to="homepage">
                        <Button icon="left" type="primary"> 资 讯</Button>
                    </Link>
                </div>
                <div className={MessageCss.newborder}>
                    <div className={MessageCss.new1}>
                        <strong>上海高校新生专属：录取通知书内或藏垃圾分类指南</strong><br/><br/>
                        <img src="img/新闻1.1.jpeg"></img>
                        <p>近日，考取了华东师范大学的四川考生小易收到了录取通知书，
                            华东师大贴心地附上了《2019年本科生新生报到须知》，其中，
                            特意以附表形式标注了垃圾分类的内容，列举了废纸张、废荧光灯管、
                            食材废料等常见物品分类，将可回收物、有害垃圾、湿垃圾、干垃圾分门别类详细列举。</p>
                        <img src="img/new1.2.png"></img>
                        <p>7月1日，上海已实施《上海市生活垃圾管理条例》。上海各高校开学后，如何让来上海
                            求学的新生更快掌握分类技能？像华东师范大学这样将垃圾分类的提醒与新生报到须知一起
                            寄出去的不只这一家，上海师范大学同样将《上海市单位生活垃圾分类指引》印在新生报到
                            须知里面。对这样的垃圾分类提示，新生直呼“贴心”.</p>
                        <p>华东师大后勤老师赵星熠表示，“上海市自7月1日起正式实行垃圾分类，我校也制定了校园垃圾
                            分类管理实施办法。新生来自全国各地，今年将垃圾分类指南编入新生指导手册是对新生教育
                            的方式之一，主要目的是让新生了解上海市及学校的垃圾分类政策规范，入学后尽快适应并学
                            会垃圾分类。”</p>
                    </div>
                    <div className={MessageCss.new2}>
                        <strong>上海各区、街镇垃圾分类成绩出炉 崇明、长宁、徐汇排前三 这三个区竟然垫底</strong>
                        <p>今年4月至6月，上海各个区和街镇的生活垃圾分类实效到底好不好？答案今天揭晓。
                        上海市生活垃圾分类减量推进工作联席会议办公室今天公布了生活垃圾分类实效测评结果，上海各个区中，
                        崇明、长宁、徐汇是今年第二季度生活垃圾分类实效最好的三个区，而黄浦、浦东、金山三个区的生活垃
                        圾分类实效排名垫底。
                        上海各个街道(镇、乡、工业区)中，陈家镇、临汾路街道、凌云路街道等29个街镇生活垃圾分类实效测评
                        结果为优，另有44个、79个、68个街镇的测评结果为良、中、差。在最差的68个街镇中，不乏陆家嘴街道、
                        南京东路街道、瑞金二路街道等中心城区的街道。
                        具体排名如下：
                        行政区排名：崇明区、长宁区、徐汇区、虹口区、奉贤区、杨浦区、静安区、嘉定区、闵行区、、松江区、
                        宝山区、普陀区、青浦区、黄浦区、浦东新区、金山区
                        街镇排名：
                        优(29个)：陈家镇、港西镇、横沙乡、建设镇、绿华镇、庙镇、三星镇、新村乡、中兴镇、石湖荡镇、新
                        江湾城街道、临汾路街道、庄行镇、凌云路街道、港沿镇、新海镇、天山路街道、周家桥街道、虹桥街道、
                        新河镇、华阳路街道、新泾镇、凉城新村街道、长兴镇、虹梅路街道、柘林镇、佘山镇、城桥镇、向化镇。
                        良(44个)：北新泾街道、彭浦新村街道、南桥镇、堡镇、菊园新区、漕河泾街道、康健新村街道、曲阳路
                        街道、斜土路街道、竖新镇、江苏路街道、重固镇、程家桥街道、嘉兴路街道、控江路街道、江浦路街道、
                        延吉新村街道、漕泾镇、殷行街道、新华路街道、安亭镇、龙华街道、东平镇、石门二路街道、吴淞街道、
                        海湾旅游区、南翔镇、欧阳路街道、吴泾镇、新浜镇、仙霞新村街道、曹家渡街道、徐家汇街道、彭浦镇、
                        枫林路街道、长桥街道、北外滩街道、方松街道、江湾镇街道、定海路街道、湖南路街道、浦锦街道、泖港
                        镇、嘉定工业区。
                        中(79个)：共和新路街道、天平路街道、七宝镇、天目西路街道、书院镇、奉浦街道、泗泾镇、广富林街道
                        、古美路街道、宝山路街道、西渡街道、九里亭街道、四川北路街道、老港镇、新成路街道、五角场街道、
                        江宁路街道、广中路街道、金泽镇、长海路街道、芷江西路街道、田林街道、江川路街道、岳阳街道、浦江镇、
                        夏阳街道、中山街道、徐行镇、长风新村街道、江桥镇、嘉定镇、大桥街道、真如镇街道、长白新村街道、上
                        钢新村街道、豫园街道、南汇新城镇、外冈镇、大场镇、周家渡街道、马桥镇、叶榭镇、曹杨新村街道、金汇镇、
                        颛桥镇、静安寺街道、张庙街道、练塘镇、小东门街道、永丰街道、张江镇、华泾镇、虹桥镇、真新街道、月浦镇
                        、南码头路街道、白鹤镇、南京西路街道、万里街道、洋泾街道、盈浦街道、平凉路街道、东明路街道、罗店镇、
                        华亭镇、淞南镇、香花桥街道、半淞园路街道、大宁路街道、嘉定新城(马陆镇)、潍坊新村街道、莘庄镇、莘庄工
                        业区、合庆镇、甘泉路街道、海湾镇、外滩街道、长征镇、高东镇。平路街道、顾村镇、五里桥街道、赵巷镇、泥城镇
                        、高行镇、长寿路街道、友谊路街道、张堰镇、花木街道、陆家嘴街道、塘桥街道、罗泾镇、金海社区、沪东新村街道、
                        桃浦镇、川沙新镇、洞泾镇、高境镇、奉城镇、青村镇、九亭镇、万祥镇、打浦桥街道、小昆山镇、南京东路街道、瑞金
                        二路街道、金杨新村街道、华漕镇、淮海中路街道、杨行镇、四团镇、亭林镇、新虹桥街道、朱家角镇、山阳镇、浦兴路
                        街道、新桥镇、三林镇、吕巷镇、高桥镇、宜川路街道、老西门街道、石那么，生活垃圾分类实效测评的标准是什么？取
                        得怎样的实际效果，才算达标？
                        根据上海市绿化市容局去年5月发布的《上海市生活垃圾分类达标、示范街道(镇、乡)考评办法(试行)》。一张总分100分
                        的“考卷”，一个街镇必须考到85分以上，才能获得达标街镇称号。
                        这张100分的“考卷”，主要有五类“题目”：居住区达标(20分)、单位分类达标(10分)、分类收集运输处置达标(30分)、宣
                        传氛围达标(20分)、长效机制达标(20分)。比如，每个街镇辖区内60%的居住区要在垃圾分类上达标，60%的单位垃圾箱房
                        符合达标单位标准，如果达标居住区或达标单位垃圾箱房少于60%，每低1个百分点，就扣1分。也就是说，如果有的街镇，
                        其辖区内只有44%的居住区达标，那么扣除16分后，这个只剩84分的街镇已经“不合格”了。
                        达不达标，除了看各个街镇垃圾分类的整体水平，还要看是否实现了全程分类：辖区内各类垃圾分类投放、分类收集(分拣、暂存)、
                        分类运输物流体系明确，有明确的收集、运输人员，明确的分类收集运输规范，明确的资源化利用或无害化处理去向。一旦缺少一类
                        垃圾分类的物流去向，就扣5分。此外，如果街镇辖区内无两网融合中转站，要扣10分。
                        垃圾分类取得良好实际效果的街镇，往往有健全的“四驾马车”——居委、物业、业主、第三方，在推进垃圾分类上，各方责任明确、落
                        实有效，有据可查。如果街镇未建立垃圾分类领导和协调机制，将扣5分。
                        持续的监督检查，也是促进垃圾分类实效的必要手段。根据相关办法，街镇应建立辖区源头分类实效监督检查机制，对居住区、单位
                        的日常分类工作开展检查，检查结果用于相关考核、激励、补贴机制等实际工作。如果没有建立监督反馈机制，扣5分；检查机制不完
                        善、频率低、结果应用不到位扣1-3分。
                        上海市绿化市容局相关负责人坦言，达标标准制定得相当严格，旨在倒逼各单位加快生活垃圾分类的推进速度。
                        考虑到上海各区水平不一，浦东、虹口、宝山、青浦等区快速实现垃圾分类全覆盖的条件较差，因此，上海所有区将分3支梯队，分先
                        后，实现垃圾分类全覆盖。
                        2018年，静安、长宁、杨浦、松江、奉贤、崇明等6个区和其余各区2个街镇率先实现垃圾分类全覆盖，严禁有害垃圾混入其他生活垃圾
                        ，日常干、湿两分类，鼓励资源回收。
                        今年，黄浦、徐汇、普陀、闵行、嘉定、金山等6个区实现全覆盖，浦东、虹口、宝山、青浦等4个区50%以上的街镇实现全覆盖</p>
                    </div>
                    <div className={MessageCss.new3}>
                        <strong>四川拟出台法规因地制宜推进农村生活垃圾分类处理工作</strong>
                        <p>近日，《四川省乡村振兴促进条例（草案）》提请四川省第十三届人大常委会第十二次会议审议。条例草案共十章七十一条，分为总则、
                            产业振兴、人才振兴、文化振兴、生态振兴、组织振兴、保障措施、监督检查、法律责任和附则。在产业振兴方面，条例草案提出，要
                            建立和完善种养业技术支撑体系，延伸产业链，构建现代农业产业体系，推动种养业协同发展、一二三产业融合发展，促进产业
                            兴村强县建设，培育农业产业强镇。
                            值得一提的是，条例草案明确，地方各级人民政府应当开展“川字号”区域公用品牌、企业品牌、产品（服务）品牌培育，强化农产品地理
                            标志、商标等知识产权保护，提升全省农产品品牌知名度和影响力。
　　                        近期热门的垃圾分类也出现在条例草案中：地方各级人民政府应当因地制宜推进农村生活垃圾分类处理工作，建立分类投放、分类收集、分
                            类运输、分类处理的制度，推行户分类、村收集、乡转运、县处理的垃圾处理方式，逐步实现垃圾处理减量化、资源化和无害化。
　　                        条例草案还提出，应当加强乡村基础设施建设，促进城乡基础设施互联互通。具体来看，要加强农村生活性基础设施建设，推进饮水、电网、
                            能源、信息等基础设施建设，推进城乡供水一体化、农村饮水安全工程规模化标准化，支持发展太阳能、风能、生物质能等新能源，扩大通
                            信网络有效覆盖，建设数字乡村。
　　                        同时，要优先发展农村教育事业，统筹推进县域内义务教育校际资源均衡配置，推行义务教育学校标准化建设，完善县乡村学前教育公共服
                            务网络、发展面向农村的职业教育和继续教育。推进教育信息化发展，推动优质教育资源城乡共享。
　　                        要健全乡村医疗卫生服务体系，支持基层医疗卫生机构标准化建设，改善乡镇卫生院和村卫生室条件，支持医养结合发展，全面建立分级诊
                            疗制度，健全网络化运行机制，开展巡回医疗、远程医疗，提高就地就近治疗水平。
　　                        此外，还要全面实施特困人员救助供养制度，健全农村留守儿童和妇女、老年人关爱服务体系；全面落实城乡劳动者平等就业制度，拓宽就业
                            空间，完善职业培训、就业服务、劳动维权工作机制。本报记者 张家华</p>
                    </div>
                    <div className={MessageCss.new4}>
                        <strong>垃圾分类“法”与“罚”需双管齐下</strong>
                        <p>23日，记者从晋安区城管局获悉，根据市城管委的通报，该局5月27日对福州泰杰顺保洁服务公司开出的罚单，是《福州市生活垃圾分类管理办法》
                            施行后开出的第一张罚单。本月初，福州泰杰顺保洁服务公司退出五城区垃圾清运市场（7月24日福州新闻网）。<br/>
                            生活垃圾分类既可对部分可回收垃圾进行回收利用，减少资源浪费，还可减少垃圾填埋、焚烧量，减少大气污染，
                            保障居民健康。目前已有9个城市对垃圾分类立法，其中有25个城市已明确对个人违规投放处罚，最高罚款1000元。
                            以此可见，垃圾分类立法在多个城市已然列在城市管理重要议事日程中。<br/>
                            在人们日常惯性思维中，垃圾分类处罚似乎只对市民，也就是垃圾分类的源头发挥功效。但事实上，垃圾分类的投放、
                            收集、运输、处置任一环节都很重要，任一环节都需要法律规定予以严格规范。像保洁公司运输车对可回收物与其他
                            垃圾混装运输现象，会让不少居民感觉对生活垃圾进行分类投放缺乏实际意义，是在做“无用功”，这样大家自然就会
                            缺乏对生活垃圾分类投放的积极性，进而影响与妨碍生活垃圾分类投放这一举措的实施。<br/>
                            福州市生活垃圾分类管理办法》今年5月1日起施行，分类管理办法第十八条规定，禁止将已分类收集的生活垃圾混合
                            运输。当地城管局依据该办法，于27日对该企业处以3万元的顶格处罚，要求其立刻退出晋安市场。这种严法严罚之举
                            赢得了市民一片掌声，也必定会让所有垃圾运输、处置企业引以为戒，对于促进城市垃圾分类工作来说既是一次正面的
                            宣传，更是一次生动的普法。<br/>
                            事实上，随着城镇化的快速发展，我国垃圾总量不断攀升，“垃圾围城”的困境成为悬在很多城市头顶的“达摩克利斯之剑”。
                            而发达国家的实践也表明，通过立法对居民投放垃圾行为进行强制性规范和约束，是推进强制性垃圾分类的必由之路。如
                            日本法律对乱扔垃圾和随意焚烧行为明确了判刑、处罚金或者两者并处的规定，引导居民按要求分类投放垃圾。因此，不
                            管你认同不认同垃圾分类，都要按规定进行垃圾分类；不管你习惯不习惯“被强制”，都必须习惯这种方式，法律规则面前
                            谁也不能例外。<br/>
                            以目前国人的生活习惯,从“人人都是垃圾生产者”到“人人都是垃圾分类者”,将是一个很长的过程,需要进行科学论证和具
                            体把握，总体上应当因地而异、因城施策。但在推进前期，人们习惯养成初期，“法”与“罚”得双管齐下、齐步走，而且“强
                            制力度”不妨大一点。</p>
                    </div>
                    <div className={MessageCss.bottom}>
                        抱歉，到底啦！
                    </div>
                </div>
            </div>
        )
    }
}