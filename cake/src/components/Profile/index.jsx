import React, { Component } from 'react'

import profile from './index.module.css'

export default class Profile extends Component {
  render() {
    return (
      <div className={profile.profile}>
        {/* 左右两侧标题盒子 */}
        <div className={profile.btnTitle}>
          <p className={profile.btnLeft}>幸福西饼</p>
          <p className={profile.btnRight}>关于我们</p>
        </div>
        {/* 主体内容 */}
        <div className={profile.content}>
          <div id="intro">
            <div className={profile.intro1}>
              <img src="./images/about/01.jpg" alt="图片加载失败" />
              <p className={profile.box_content}>
                幸福西饼，2008年创立于深圳。10多年来，幸福西饼紧跟趋势，拥抱变化，融入变化，已发展成为一家由数据和技术驱动的新零售烘焙品牌，渐成行业驱动者。基于信息技术的革新和用户消费习惯的改变以及新零售基础设施的完善，幸福西饼为烘焙行业注入新零售的理念，即“线上下单，线下配送”，为消费者提供良好的消费体验，保证消费者随时随地享用更新鲜、更绿色、更安全、更健康的烘焙食品。幸福西饼秉持“用心、传递幸福”的服务理念，始终坚持“新鲜现做”的原则，不断超越自我，完善服务，自2015年开放品牌合作以来，幸福西饼先后覆盖了全国200多个城市，包括深圳、上海、北京、广州、澳门等，建立了400多个分布式制作中心，拥有超千万粉丝，微信搜索并关注幸福西饼（xfxbsz）公众号即可购买。用户下单后，幸福西饼分布式制作中心即时快速生产，覆盖范围内2～5小时专业冷链高效配送，为2亿人次送去幸福的味道。
              </p>
              <p className={profile.box_content}><b>什么是新鲜现做（现做即送）？</b><br />
                依据中国商业联合会发布的《烘烤食品网络销售及经营规范》文件，新鲜现做（现做即送），即按订单需求和产品最佳食用时间即时安排产品制作和配送，适用于现制现送的烘焙食品。
              </p>
            </div>
          </div>
          <div id="happiness">
            <div className={profile.event1}>
              <p className={profile.event_title}>幸福大事记</p>
              <p className={profile.event_subtitle}>11 years.</p>
              <div className={profile.event_line}>
                <i></i>
              </div>
              <div className={profile.img_box}>
                <img src="./images/about/02.jpg" alt="图片加载失败" />
                <div className={profile.event1_title}>
                  <p className={profile.years}><span>2008</span> / 2014</p>
                  <p className={profile.subtitle}>BLISS MALL/BLISSCAKE 2019</p>
                </div>
                <table className={profile.event_list}>
                  <tbody>
                    <tr>
                      <td className={profile.title}>幸 福 起 点</td>
                      <td className={profile.content}>首家分店在深圳市罗湖区春风路隆重开业</td>
                      <td className={profile.data}>
                        <p>2008 / 10</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>金 牌 月 饼</td>
                      <td className={profile.content}>全国烘焙创艺大赛获“金牌月饼”</td>
                      <td className={profile.data}>
                        <p>2011 / 09</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>进 驻 华 润</td>
                      <td className={profile.conten}>进驻华润V&gt;ngo便利店、华润万家标超和华润万家大卖场</td>
                      <td className={profile.data}>
                        <p>2012 / 07</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>蓝 海 战 略</td>
                      <td className={profile.content}>启动”蓝海战略计划“全面转型，减少实体店，增加线上投入紧跟Web2.0时代，最终实现颠覆传统烘焙</td>
                      <td className={profile.data}>
                        <p>2013 / 12</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>网 络 商 城</td>
                      <td className={profile.content}>布局O2O互联网市场，网络商城正式上线，全市免费配送正式启动。</td>
                      <td className={profile.data}>
                        <p>2014 / 01</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>商 城 升 级</td>
                      <td className={profile.content}>网络商城升级版隆重上线。</td>
                      <td className={profile.data}>
                        <p>2014 / 11</p>
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>销 售 创 高</td>
                      <td className={profile.content}>实现单日1400个蛋糕订单，月均每日780个创新记录。</td>
                      <td className={profile.data}>
                        <p>2014 / 12</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={profile.event2}>
              <table>
                <tbody>
                  <tr>
                    <td className={profile.left}>
                      <img src="./images/about/03.jpg" alt="图片加载失败" />
                    </td>
                    <td className={profile.right}>
                      <p className={profile.years}>2015 / <span>2017</span></p>
                      <p className={profile.subtitle}>BLISS&nbsp;&nbsp;MALL/BLISSCAKE&nbsp;&nbsp;2019</p>
                      <table className={profile.event_list}>
                        <tbody>
                          <tr>
                            <td className={profile.title}>移 动 订 购</td>
                            <td className={profile.content}>网络商城APP、手机、微信订购全面开通</td>
                            <td className={profile.data}>
                              <p>2015 / 03</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>幸 福 承 诺</td>
                            <td className={profile.content}>深圳开放幸福承诺，货不对板退款不退货，每迟到1分钟减1元，迟到30分钟免费赠送</td>
                            <td className={profile.data}>
                              <p>2015 / 04</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>幸福拼出来</td>
                            <td className={profile.content}>下载APP“幸福西饼”，拼出你的幸福蛋糕，一个蛋糕多款组合随心选，一次满足多个愿望！</td>
                            <td className={profile.data}>
                              <p>2015 / 04</p>
                            </td>
                          </tr>

                          <tr>
                            <td className={profile.title}>地 铁 广 告</td>
                            <td className={profile.content}>深圳地铁1_5号线全面铺开，进一步提升品牌知名度</td>
                            <td className={profile.data}></td>
                          </tr>
                          <tr>
                            <td className={profile.title}>开 放 合 作</td>
                            <td className={profile.content}>开放品牌合作转型，重庆店开业。</td>
                            <td className={profile.data}>2015 / 11</td>
                          </tr>
                          <tr>
                            <td className={profile.title}>突 破 创 新</td>
                            <td className={profile.content}>单日突破5000单，历史最高峰。</td>
                            <td className={profile.data}>2016 / 03</td>
                          </tr>
                          <tr>
                            <td className={profile.title}>众志成城</td>
                            <td className={profile.content}>第一届幸福商城年会暨合作城市交流大会盛大举行。
                              我们举杯，庆祝过去的硕果；我们誓言，幸福西饼越来越好！</td>
                            <td className={profile.data}>2016 / 03</td>
                          </tr>

                          <tr>
                            <td className={profile.title}>百 万 大 关</td>
                            <td className={profile.content}>
                              微信公众号达到百万粉丝，幸福承诺永不变。用户社群更庞大、互动交流更舒心，菜单栏优化升级、后台服务更贴心。</td>
                            <td className={profile.data}>
                              <p>2016 / 04</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>节 节 高 升</td>
                            <td className={profile.content}>单日销量突一万，幸福西饼香飘万家、连接你我他。</td>
                            <td className={profile.data}>
                              <p>2016 / 05</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>开启新纪元</td>
                            <td className={profile.content}>
                              全国50城市尊享“幸福”。商城服务范围，辐射到全国50个城市，无论身居何处，北国风光还是南国梦里，幸福香味都会送到你手中。
                            </td>
                            <td className={profile.data}>
                              <p>2016 / 08</p>
                            </td>
                          </tr>

                          <tr>
                            <td className={profile.title}>多媒体广告</td>
                            <td className={profile.content}>
                              全方位、高密集、多渠道地投放广告，全面提升品牌知名度和美誉度。广告投放包括深圳电台广告、影院映前广告、公交车身广告和广州地铁广告等。
                            </td>
                            <td className={profile.data}>
                              <p>2016 / 10</p>
                            </td>
                          </tr>

                          <tr>
                            <td className={profile.title}>进 无 止 境</td>
                            <td className={profile.content}>落户全国70多个城市，单日销量突破19000单，创历史最高峰。</td>
                            <td className={profile.data}>
                              <p>2017 / 03</p>
                            </td>
                          </tr>

                          <tr>
                            <td className={profile.title}>更上一层楼</td>
                            <td className={profile.content}>单日销量突破24000单，不忘初心，卓越进取！</td>
                            <td className={profile.data}>
                              <p>2017 / 05</p>
                            </td>
                          </tr>

                          <tr>
                            <td className={profile.title}>品 牌 形 象 全 新 升 级</td>
                            <td className={profile.content}>覆盖城市达100个，并如期召开“幸福西饼品牌战略发布会
                              ”，签约何炅为品牌形象代言人。09月何炅代言广告全国全面上线。
                            </td>
                            <td className={profile.data}>
                              <p>2017 / 08</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>幸 福 狂 欢 节</td>
                            <td className={profile.content}>
                              创办“910幸福狂欢节”，请全国人民免费吃蛋糕。届时每年的9月10日，将举办狂欢节，就（9）是（10）要给你幸福。
                            </td>
                            <td className={profile.data}></td>
                          </tr>
                          <tr>
                            <td className={profile.title}>千万里程碑</td>
                            <td className={profile.content}>
                              单日销售额破千万，创品牌传奇！
                            </td>
                            <td className={profile.data}>2017 / 09</td>
                          </tr>

                          <tr>
                            <td className={profile.title}>正 版 授 权 儿 童 蛋 糕 就 在 幸 福 西 饼</td>
                            <td className={profile.content}>
                              推出正版授权儿童蛋糕，抢占相对空白的市场先机。其中《熊熊乐园》《熊出没》与《汪汪队立大功》IP蛋糕已上线，《爱探险的朵拉》《海绵宝宝》《海底小纵队》《超级飞侠》《猪猪侠》等IP蛋糕即将上线。
                            </td>
                            <td className={profile.data}>
                              <p>2017 / 12</p>
                            </td>
                          </tr>
                          <tr>
                            <td className={profile.title}>A 轮 融 资</td>
                            <td className={profile.content}>
                              完成由美团点评发起的产业基金龙珠资本，璀璨资本跟投的9600 万人民币 A 轮融资，幸福西饼将迎来新的市场大爆发。
                            </td>
                            <td className={profile.data}>
                              <p>2017 / 12</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={`${profile.event2}+${profile.item}`} id={profile.event3}>
              <table>
                <tbody>
                  <tr>
                    <td className={profile.right} style={{ paddingRight: 60 + "px", paddingLeft: 0 }}>
                      <p className={profile.years}>2018 / <span>2020</span></p>
                      <p className={profile.subtitle}>BLISS&nbsp;&nbsp;MALL/BLISSCAKE&nbsp;&nbsp;2020</p>
                      <table className={profile.event_list}>
                        <tbody>

                          <tr>
                            <td className="title">全面布局品牌宣传</td>
                            <td className="content">
                              深耕品牌影响力。视频广告登录东方卫视、深圳都市频道和广东珠江卫视等主流电视频道，以及创维OTT开屏广告。
                            </td>
                            <td className="data">
                              <p>2018/ 03</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">优 化 幸 福 承 诺</td>
                            <td className="content">
                              继落户全国200多个城市以来，为进一步增强客户体验，确保幸福承诺体系在执行过程中得到有效落地，特作出以下优化：就敢减：每迟到1分钟减1元；就敢退：货不对板退款不退货；就敢送：迟到30分钟免费赠送；就敢赔：早到或迟到60分钟以上，双倍赔付。
                            </td>
                            <td className="data">
                              <p>2018/ 04</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">构 建 代 言 人 家 族</td>
                            <td className="content">
                              打造全明星阵容，形成集聚效应。为获取与年轻用户近距离沟通的契机，让年轻人“对话”年轻人，签约90后当红人气明星刘昊然；为拓展儿童蛋糕消费场景，打造温馨幸福的品牌形象，携手吴京谢楠双代言，也是二人首次以夫妻名义代言。
                            </td>
                            <td className="data">
                              <p>2018 / 05</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">销 量 再 创 新 高</td>
                            <td className="content">母亲节单日销量达85660个，同比去年增长338%。</td>
                            <td className="data"></td>
                          </tr>
                          <tr>
                            <td className="title">B 轮 融 资</td>
                            <td className="content">
                              获得华兴新经济基金领投，美团龙珠资本、璀璨资本继续加码，新投资人亚商投资、信中利跟投4亿人民币融资。创烘焙新零售领域纪录。
                            </td>
                            <td className="data">2018 / 06</td>
                          </tr>
                          <tr>
                            <td className="title">下 一 站 · 更 幸 福</td>
                            <td className="content">
                              召开“2018·幸福西饼十周年庆典暨B轮融资发布会”。庆祝十年辉煌，正式签约神州鹰。十年砥砺，这一站圆满抵达，下一站也将幸福开启！
                            </td>
                            <td className="data">
                              <p>2018 / 07</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">抢 滩 新 零 售</td>
                            <td className="content">深圳平安金融中心新零售店试运营。行业率先发力新零售，再次定义商业模式。
                            </td>
                            <td className="data">
                              <p>2018 / 08</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title"></td>
                            <td className="content">幸福西饼车公庙店开业，该店位于深圳市福田区丰盛町地下阳光街B区C2-068。
                            </td>
                            <td className="data">
                              <p>2018 / 10</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">2019新零售+新制造战略布局</td>
                            <td className="content">新制造：数据化、智能化、定制化；新零售：新的技术支持，新的运营方式，新的展示方式。
                            </td>
                            <td className="data"></td>
                          </tr>
                          <tr>
                            <td className="title">2019年时令水果季产品</td>
                            <td className="content">
                              发起“水果”革命，布局“新审美、新体验、新突破”的一年五季时令水果产品，深化品牌核心优势“新鲜”的层次。
                            </td>
                            <td className="data">
                              <p>2019 / 01</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">升 级 品 牌 广 告 语</td>
                            <td className="content">
                              为进一步强化品牌特色，经充分市场调研后，决定全面停用“新鲜现做，就是幸福西饼”“幸福西饼，就是新鲜现做”“新鲜好味，幸福心选”广告语，统一升级为“新鲜现做，就是幸福西饼”。
                            </td>
                            <td className="data">
                              <p>2019 / 05</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">智 慧 零 售 门 店 加 速 布 局</td>
                            <td className="content">
                              运用大数据改造传统门店，截止到2019年10月30日，在广州、深圳、东莞、惠州、三亚等地共计布局30余家新零售门店。
                            </td>
                            <td className="data"></td>
                          </tr>
                          <tr>
                            <td className="title">品质先行</td>
                            <td className="content">商城获得“ISO9001质量管理体系认证证书”，幸福西饼将进一步加强对食品安全工作的重视和强化。
                            </td>
                            <td className="data">2019 / 11</td>
                          </tr>
                          <tr>
                            <td className="title">助力抗击疫情</td>
                            <td className="content">
                              幸福商场通过深圳市青少年发展基金会向武汉市慈善会、深圳市慈善会共捐赠100万元人民币用于新型冠状病毒疫情防控工作。各个城市纷纷积极参与防控志愿工作，捐赠物资、善款，履行社会责任。
                            </td>
                            <td className="data">2020 / 02</td>
                          </tr>
                          <tr>
                            <td className="title">携手古天乐，探索新未来</td>
                            <td className="content">签约古天乐为品牌形象代言人，并推出代言人定制系列蛋糕——幸福先生。
                            </td>
                            <td className="data">2020 / 03</td>
                          </tr>
                          <tr>
                            <td className="title">携手王森面包研修社，迈向“新烘焙”</td>
                            <td className="content">与王森面包研修社达成战略合作关系，并聘请王森冠军团队成员为幸福西饼品牌技术顾问。
                            </td>
                            <td className="data">2020 / 05</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className={profile.left}>
                      <img src="./images/about/04.jpg" alt="图片加载失败" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${profile.culture}+${profile.item}`} id={profile.culture}>
            <div className={profile.box_center} id="culture1">
              <p className={profile.culture_title}>企业文化</p> 
              <p className={profile.culture_subtitle} style={{fontSize:50 + "px"}}>What we work for?</p>
              <div className={profile.culture_line}>
                <i></i>
              </div>
              <div className={profile.img_box}>
                <img src="./images/about/05.jpg" alt="图片加载失败" />
                <div className={profile.culture_title}>
                  <p className={profile.slogon}><span>企业文化</span> / BLISS MALL</p>
                  <p className={profile.subtitle}>BLISS&nbsp;&nbsp;MALL/BLISSCAKE&nbsp;&nbsp;2019</p>
                </div>
                <table className={profile.culture_list}>
                  <tbody>
                    <tr>
                      <td className={profile.title}>企 业 愿 景</td>
                      <td className={profile.content}>成为中国烘焙第一品牌，实现百年企业梦想<br /></td>
                    </tr>
                    <tr>
                      <td className={profile.title}>企 业 使 命</td>
                      <td className={profile.content}>幸福就在家门口</td>
                    </tr>
                    <tr>
                      <td className={profile.title}>企业SLOGAN</td>
                      <td className={profile.content}>新鲜现做，就是幸福西饼<br />新鲜现做，准时送达，用心传递幸福</td>
                    </tr>
                    <tr>
                      <td className={profile.title}>企 业 价 值 观</td>
                      <td className={profile.content}>
                        客户第一：以客户为中心，提升客户满意度；准时为客户提供超预期产品和服务<br />良心守正：恪守正道；为顾客提供安全、高品质的产品<br />创新高效：拥抱变化，不断迭代商业模式、产品、技术；践行准时文化，马上就做，做就做好
                        <br /> 敬业共赢：胜任本职，幸福是奋斗出来的
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>“幸福五好”系统</td>
                      <td className={profile.content}>好员工ⅹ好产品ⅹ好服务ⅹ好DTⅹ好运营=好的业绩
                      </td>
                    </tr>
                    <tr>
                      <td className={profile.title}>核心竞争力</td>
                      <td className={profile.content}>产品、服务、品牌
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className={`${profile.feature3}+${profile.item}`} id="feature3">
              <div className={profile.box_center}>
                <p className={profile.feature_title}>专属特色</p>
                <p className={profile.feature_subtitle}>WHAT MAKE US DIFFERENT?</p>
                <div className={profile.feature_line}>
                  <i></i>
                </div>
                <div className={profile.img_box}>
                  <img src="./images/about/06.jpg" alt="图片加载失败" />
                  <table className={profile.feature_list}>
                    <tbody>
                      <tr>
                        <td className={profile.title}>幸福承诺</td>
                        <td className={profile.content}>
                          幸福西饼旨在打造一个敢承诺，敢守信的影响力服务品牌。幸福西饼从维护消费者的根本福利出发，用实际行动获得消费者的信任，用优质服务来回报消费者的选择。幸福承诺具体诠释：
                        </td>
                      </tr>
                      <tr>
                        <td className={profile.title}>就 敢 减</td>
                        <td className={profile.content}>每迟到1分钟减1元</td>
                      </tr>
                      <tr>
                        <td className={profile.title}>就 敢 退</td>
                        <td className={profile.content}>货不对板退款不退货</td>
                      </tr>
                      <tr>
                        <td className={profile.title}>就 敢 送</td>
                        <td className={profile.content}>迟到30分钟免费赠送</td>
                      </tr>
                      <tr>
                        <td className={profile.title}>就 敢 赔</td>
                        <td className={profile.content}>早到或迟到60分钟以上，双倍赔付</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={profile.content}>
                    <p>幸福商城，旨在打造一个敢承诺，敢守信的影响力服务品牌</p>
                    <p>幸福商城从维护消费者的根本福利出发，用实际行动获得消费者的信任</p>
                    <p>用优质服务来回报消费者的选择</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${profile.feature1}+${profile.item}`} id="feature1">
              <div className={profile.box_center}>
                <div className={profile.img_box}>
                  <img src="./images/about/07.jpg" alt="图片加载失败" />
                  <div className={profile.feature1_title}>
                    <p className={profile.slogon}><span> 2 _ 5 小时</span> / 免费送达</p>
                    <p className={profile.subtitle}>BLISS&nbsp;&nbsp;MALL/BLISSCAKE&nbsp;&nbsp;2019</p>
                  </div>
                  <div className={profile.content}>
                    <p>无论是在哪个地区，只要是在配送范围内</p>
                    <p>订货和收货都可以在2_5小时送达，配送员全年无休，风雨无阻</p>
                    <p>幸福商城不生产蛋糕，幸福商城只是在用心传递幸福</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${profile.feature2}+${profile.item}`} id="feature2">
              <div className={profile.box_center}>
                <div className={profile.img_box}>
                  <img src="./images/about/08.jpg" alt="图片加载失败" />
                  <div className={profile.feature2_title}>
                    <p className={profile.slogon}><span> 1 小时</span> / 专车服务</p>
                    <p className={profile.subtitle}>BLISS&nbsp;&nbsp;MALL/BLISSCAKE&nbsp;&nbsp;2019</p>
                  </div>
                  <div className={profile.content}>
                    <p>如果客户有特殊需求，即可申请1小时专车服务；仅需1个小时，幸福就会到达你的家门口</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${profile.feature4}+${profile.item}`} id="feature4">
            <div className={profile.box_center}>
              <p className={profile.feature_title}>新零售招商加盟</p>
              <p className={profile.feature_subtitle}>JOIN US</p>
              <div className={profile.feature_line}>
                <i></i>
              </div>
              <div className={profile.img_box}>
                <img src="./images/about/09.jpg" style={{ height: 726 + "px" }} alt="图片加载失败" />
                <div className={profile.feature_list}>
                  <p className={profile.job}>幸福西饼成长为一家由数据和技术驱动的O2O电商蛋糕品牌，不仅在逐步完善自己的品牌，还凭借其五大优势吸引着各地创业者加盟新零售。</p>
                  <p className={profile.job}>五大优势</p>
                  <p><span className={profile.spanl}>1.成熟品牌</span><br />
                    10多年稳健经营，线上线下同时发力，已发展成为一家由数据和技术驱动的新
                    零售烘焙品牌</p>
                  <p><span className={profile.spanl}>2.数据和技术</span><br />
                    通过大数据对客群和产品进行分析，触达精准用户，实现"货"找"人"。在算法驱动下，降低打包、配送、调货等出错率，节约成本，提高人效。
                  </p>
                  <p><span className={profile.spanl}>3.源头直采、基地集采</span><br />
                    根据统一标准，基地、源头集采，移植规模优势，全国同享优质优价，不分产品利润，保证价格和品质稳定，提升供应链效率。</p>
                  <p><span className={profile.spanl}>4.专业团队</span><br />
                    组建成熟的研发、技术和运营团队，已成为拥有经典产品、流量、大数据库和供应链的烘焙行业巨头。
                  </p>
                  <p><span className={profile.spanl}>5.整合营销</span><br />
                    线上赋能线下，以优质的资源，打造营销矩阵，减少单店品牌营销费用，节约运营成本，打破流量壁垒，实现高效推广。</p>
                  <p className={profile.job}>招商合作</p>
                  <p>幸福西饼作为一个成熟的O2O品牌公司，不仅在逐步完善自己的品牌，还凭借其五大优势吸引着各地的加盟商。</p>
                  <p>
                    1、产品特点：精选品质食材、新鲜现做、降低30%甜度、绿色健康。<br />
                    2、多渠道营销平台：各大团购、商城APP、天猫、微信、手机等。<br />
                    3、多维度品牌推广：新媒体、地铁、电梯、电台、社区等。<br />
                    4、O2O无缝对接：线上下单预定，线下及时配送。<br />
                    5、独家城市运营权：该城市的运营规划，全由你做主。为更好地统一标准，幸福西饼还为合作商提供一系列配套服务：开业指导、站点设计、客户服务、推广服务、设备配置、技术培训、市场定位、原料供应。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={profile.aboutus_footer}>
          <div className={profile.logo}>
            <img src="./images/about/10.png" alt="图片加载失败" />
          </div>
          <div className={profile.slogon}>
            <p>为更好地统一标准，幸福商城还为合作商提供一系列配套服务</p>
            <p>开业指导、站点设计、客户服务、推广服务、设备配置、技术培训、市场定位、原料供应</p>
          </div>
        </div>

      </div>
    )
  }
}
