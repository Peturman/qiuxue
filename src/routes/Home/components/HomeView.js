import React from 'react'
import Banner from '../assets/banner.jpg'
import Banner_01 from '../assets/banner_01.png'
import Banner_02 from '../assets/banner_02.png'
import Banner_03 from '../assets/banner_03.png'
import Banner_04 from '../assets/banner_04.png'
import './HomeView.less'

export const HomeView = () => (
  <div>
    <article>
      <header className='header'>
        <div className='header-left'>求学网络</div>
        <div className='header-middle'>
          <ul>
            <li className='active'>首页</li>
            <li>产品发布</li>
            <li>资讯发布</li>
            <li>帮助中心</li>
            <li>关于我们</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div className='header-right'>
          <span className='icon'><i className='iconfont icon-caller' /></span>
          <span className='tel'>400200200</span>
        </div>
      </header>
      <section className='banner' style={{ backgroundImage: Banner }}>
        <div className='banner-top'>
          <h3>我们无法做到完美</h3>
          <p>Perfection’snot attainable</p>
        </div>
        <footer className='banner-footer'>
          <ul>
            <li>
              <img src={ Banner_01 } />
              <p>流线式网页布局设计方案让网站制作成和维护为一件轻松惬意的事</p>
            </li>
            <li>
              <img src={ Banner_02 } />
              <p>流线式网页布局设计方案让网站制作成和维护为一件轻松惬意的事</p>
            </li>
            <li>
              <img src={ Banner_03 } />
              <p>流线式网页布局设计方案让网站制作成和维护为一件轻松惬意的事</p>
            </li>
            <li>
              <img src={ Banner_04 } />
              <p>流线式网页布局设计方案让网站制作成和维护为一件轻松惬意的事</p>
            </li>
          </ul>
        </footer>
      </section>
    </article>
  </div>
)

export default HomeView
