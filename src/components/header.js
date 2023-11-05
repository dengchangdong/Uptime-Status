import { useEffect } from 'react';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteName;
  }, []);

  return (
    <div id='header'>
      <div className='container'>
        <h1 className='logo'>{window.Config.SiteName}</h1>
        <div className='navi'>
          {window.Config.Navi.map((item, index) => (
            <Link key={index} to={item.url} text={item.text} />
          ))}
        </div>
      </div>
      <div className='status-top'>
        <div className='status-tip' id='status-tip'></div>
        <p className='status-text' id='status-text'>服务状态加载中</p>
        <p className='status-text' id='status-down'>部分服务无法运行</p>
        <p className='status-time' id='status-time-up'>上次更新于 <span id='status-last-time'>00:00</span> | 检测频率 5 分钟</p>
      </div>
    </div>
  );
}

export default Header;
