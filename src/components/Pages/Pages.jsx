import React, { useState } from 'react';
import SvgUserprofile from "./IconsComps/Userprofile";
import SvgDownArrow from "../../components/icons/DownArrow";
import SvgRightArrow from "../../components/icons/RightArrow";
import "./Pages.css";

function Pages() {
  const [expandedMenus, setExpandedMenus] = useState({
    userProfile: true,
    account: false,
    corporate: false
  });

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const menuItems = [
    {
      id: 'userProfile',
      title: 'User Profile',
      subItems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
    },
    {
      id: 'account',
      title: 'Account',
      subItems: ['Personal Info', 'Security', 'Preferences', 'Billing']
    },
    {
      id: 'corporate',
      title: 'Corporate',
      subItems: ['Team', 'Departments', 'Offices']
    },
    {
      id: 'blog',
      title: 'Blog',
      subItems: ['Team', 'Departments', 'Offices']
    },
    {
      id: 'social',
      title: 'Social',
      subItems: ['Team', 'Departments', 'Offices']
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
              className={`page-menu ${expandedMenus[item.id] ? 'active' : ''}`}
              onClick={() => item.subItems.length > 0 && toggleMenu(item.id)}
            >
              <div className="section">
                {item.subItems.length > 0 ? (
                  expandedMenus[item.id] ? <SvgDownArrow /> : <SvgRightArrow />
                ) : (
                  <div style={{ width: '16px' }}></div>
                )}
              </div>

              <div className="section">
                <SvgUserprofile />
              </div>

              <div className="section">
                <span className="titles">{item.title}</span>
              </div>
            </div>
            
            {item.subItems.length > 0 && expandedMenus[item.id] && (
              <div className="submenu">
                {item.subItems.map((subItem) => (
                  <div key={subItem} className="submenu-item">
                   
                    <div className="section">
                      <span className="submenu-title">{subItem}</span>
                    </div>
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