import React, { PureComponent } from 'react'
import axios from 'axios'


import home from './index.module.css';

export default class Home extends PureComponent {
  state = { wrap: [], count: 0 }

  getWrap = () => {
    axios.get("http://124.71.230.178:8080/cake/goods/Ibanner?i=5").then(
      response => {
        this.setState({ wrap: response.data })
      },
      error => {
        console.log(error);
      })
  }
  componentDidMount() {
    this.getWrap()
  }
  hmgeSwilcher = (index) => {
    return () => {
      const ulDom = this.ulDom
      const bgDom = this.bgDom
      switch (index) {
        case 0:
          ulDom.style.left = 0 + "%"
          bgDom.style.left = 0 + "%"
          break;
        case 1:
          ulDom.style.left = -249 + "%"
          bgDom.style.left = -249 + "%"
          break;
        case 2:
          ulDom.style.left = -498 + "%"
          bgDom.style.left = -498 + "%"
          break;
        case 3:
          ulDom.style.left = -748 + "%"
          bgDom.style.left = -748 + "%"
          break;
        case 4:
          ulDom.style.left = -997 + "%"
          bgDom.style.left = -997 + "%"
          break;
        case 5:
          ulDom.style.left = -1246 + "%"
          bgDom.style.left = -1246 + "%"
          break;
        default:
          break;
      }
      this.setState({ count: index })
    }
  }
  next = () => {
    const ulDom = this.ulDom
    const bgDom = this.bgDom
    let { count } = this.state
    if (count + 1 > 5) this.setState({ count: 0 }, () => {
      switch (this.state.count) {
        case 0:
          ulDom.style.left = 0 + "%"
          bgDom.style.left = 0 + "%"
          break;
        case 1:
          ulDom.style.left = -249 + "%"
          bgDom.style.left = -249 + "%"
          break;
        case 2:
          ulDom.style.left = -498 + "%"
          bgDom.style.left = -498 + "%"
          break;
        case 3:
          ulDom.style.left = -748 + "%"
          bgDom.style.left = -748 + "%"
          break;
        case 4:
          ulDom.style.left = -997 + "%"
          bgDom.style.left = -997 + "%"
          break;
        case 5:
          ulDom.style.left = -1246 + "%"
          bgDom.style.left = -1246 + "%"
          break;
        default:
          break;
      }
    })
    else this.setState({ count: count + 1 }, () => {
      switch (this.state.count) {
        case 0:
          ulDom.style.left = 0 + "%"
          bgDom.style.left = 0 + "%"
          break;
        case 1:
          ulDom.style.left = -249 + "%"
          bgDom.style.left = -249 + "%"
          break;
        case 2:
          ulDom.style.left = -498 + "%"
          bgDom.style.left = -498 + "%"
          break;
        case 3:
          ulDom.style.left = -748 + "%"
          bgDom.style.left = -748 + "%"
          break;
        case 4:
          ulDom.style.left = -997 + "%"
          bgDom.style.left = -997 + "%"
          break;
        case 5:
          ulDom.style.left = -1246 + "%"
          bgDom.style.left = -1246 + "%"
          break;
        default:
          break;
      }
    })
  }
  prev = () => {
    const ulDom = this.ulDom
    const bgDom = this.bgDom
    const { count } = this.state
    if (count - 1 < 0) this.setState({ count: 5 }, () => {
      switch (this.state.count) {
        case 0:
          ulDom.style.left = 0 + "%"
          bgDom.style.left = 0 + "%"
          break;
        case 1:
          ulDom.style.left = -249 + "%"
          bgDom.style.left = -249 + "%"
          break;
        case 2:
          ulDom.style.left = -498 + "%"
          bgDom.style.left = -498 + "%"
          break;
        case 3:
          ulDom.style.left = -748 + "%"
          bgDom.style.left = -748 + "%"
          break;
        case 4:
          ulDom.style.left = -997 + "%"
          bgDom.style.left = -997 + "%"
          break;
        case 5:
          ulDom.style.left = -1246 + "%"
          bgDom.style.left = -1246 + "%"
          break;
        default:
          break;
      }
    })
    else this.setState({ count: count - 1 }, () => {
      switch (this.state.count) {
        case 0:
          ulDom.style.left = 0 + "%"
          bgDom.style.left = 0 + "%"
          break;
        case 1:
          ulDom.style.left = -244 + "%"
          bgDom.style.left = -244 + "%"
          break;
        case 2:
          ulDom.style.left = -498 + "%"
          bgDom.style.left = -498 + "%"
          break;
        case 3:
          ulDom.style.left = -748 + "%"
          bgDom.style.left = -748 + "%"
          break;
        case 4:
          ulDom.style.left = -997 + "%"
          bgDom.style.left = -997 + "%"
          break;
        case 5:
          ulDom.style.left = -1246 + "%"
          bgDom.style.left = -1246 + "%"
          break;
        default:
          break;
      }
    })
  }
  render() {
    const { wrap } = this.state
    return (
      <div className={home.home}>
        <div className={home.box}>
          <div style={{ left: 0 }} className={home.bg} ref={c => this.bgDom = c}>
            <div className={home.bg1}></div>
            <div className={home.bg2}></div>
            <div className={home.bg3}></div>
          </div>
          <div className={home.wrap}>
            <ul style={{ left: 0 }} className={home.slider} ref={c => this.ulDom = c}>
              {
                wrap.map(item => {
                  return <li key={item.good_id} className={home.list}><img className={home.img} src={item.img_url} alt="wrap" /></li>
                })
              }
            </ul>
            <ul className={home.btn_ul}>
              {
                wrap.map((item, index) => {
                  return <li onClick={this.hmgeSwilcher(index)} key={item.good_id} className={home.btn_list}><img className={home.btn_img} src={item.img_url} alt="wrap" /></li>
                })
              }
            </ul>
          </div>
          <div className={home.btn}>
            <span onClick={this.prev} className={home.left}></span>
            <span onClick={this.next} className={home.right}></span>
          </div>
        </div>
        <div className={home.categories}>
          <div className={home.cake}>
            <img className={home.categoriesImg} src="./images/cake.png" alt="蛋糕" />
            <div className={home.categoriesTit}>
              <p className={home.title}>AFTERNOON TEA 下午茶</p>
              <p className={home.content}>“一杯咖啡，一份甜点，一抹偷不走的时光”。</p>
            </div>
          </div>
          <div className={home.tea}
          ><img className={home.categoriesImg} src="./images/tea.png" alt="下午茶" />
            <div className={home.categoriesTit}>
              <p className={home.title}>CAKE 蛋糕</p>
              <p className={home.content}>“只有国王才有资格拥有的，享受众人给予的祝福”。</p>
            </div>
          </div>
          <div className={home.souvenir}>
            <img className={home.categoriesImg} src="./images/souvenir.png" alt="手信" />
            <div className={home.categoriesTit}>
              <p className={home.tit}>SOUVENIR 手信。</p>
              <p className={home.content}>“不在于贵，一情意，一真诚”</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
