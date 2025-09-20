import React, { useState } from 'react';
import SvgUserprofile from "./IconsComps/Userprofile";
import SvgAccount from "./IconsComps/Account";
import SvgCorporate from "./IconsComps/Corporate";
import SvgBlog from "./IconsComps/Blog";
import SvgSocial from "./IconsComps/Social";
import SvgDownArrow from "../../components/icons/DownArrow";
import SvgRightArrow from "../../components/icons/RightArrow";
import "./Pages.css";

function Pages() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(prev => (prev === menuId ? null : menuId));
  };

  const menuItems = [
    {
      id: 'userProfile',
      title: 'User Profile',
      icon: <SvgUserprofile />,
      subItems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
    },
    {
      id: 'account',
      title: 'Account',
      icon: <SvgAccount />,
      subItems: ['Personal Info', 'Security', 'Preferences', 'Billing']
    },
    {
      id: 'corporate',
      title: 'Corporate',
      icon: <SvgCorporate />,
      subItems: ['Team', 'Departments', 'Offices']
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: <SvgBlog />,
      subItems: ['Latest Posts', 'Categories', 'Tags']
    },
    {
      id: 'social',
      title: 'Social',
      icon: <SvgSocial />,
      subItems: ['Friends', 'Groups', 'Events']
    }
  ];

  return (
    <div className="pages-container">
      <div className="pages-header">
        <h2>Pages</h2>
      </div>
      
      <div className="pages-menus">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div 
              className={`page-menu ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => item.subItems.length > 0 && toggleMenu(item.id)}
            >
              <div className="section-one">
                {item.subItems.length > 0 ? (
                  activeMenu === item.id ? <SvgDownArrow /> : <SvgRightArrow />
                ) : (
                  <div style={{ width: '16px' }}></div>
                )}
              </div>

              <div className="section-two">
                {item.icon}
              </div>

              <div className="section-three">
                <span className="titles">{item.title}</span>
              </div>
            </div>
            
            {item.subItems.length > 0 && activeMenu === item.id && (
              <div className="submenu">
                {item.subItems.map((subItem) => (
                  <div key={subItem} className="submenu-item">
                    <span className="titles">{subItem}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
