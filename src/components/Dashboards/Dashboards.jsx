import React, { useState } from 'react';
import SvgEcommerce from "./IconComps/Ecommerce";
import SvgProjects from "./IconComps/Projects";
import SvgCourse from "./IconComps/Course";
import SvgDefault from "./IconComps/Default";
import SvgDownArrow from "../../components/icons/DownArrow";
import SvgRightArrow from "../../components/icons/RightArrow";
import "./Dashboards.css";



function DashboardComp() {



  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(prev => (prev === menuId ? null : menuId));
  };

  const menuItems = [
    {
      id: 'Ecommerce',
      title: 'eCommerce',
      icon: <SvgEcommerce />,
      subItems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
    },
    {
      id: 'Projects',
      title: 'Projects',
      icon: <SvgProjects />,
      subItems: ['Personal Info', 'Security', 'Preferences', 'Billing']
    },
    {
      id: 'Course',
      title: 'Online Course',
      icon: <SvgCourse />,
      subItems: ['Team', 'Departments', 'Offices']
    },
  ];

  return (
    <div className="pages-container">
      <div className="pages-header">
        <h2>Pages</h2>
      </div>

      <div className='default'>
        <div className='defaul-style'>

          <div className='defaul-style-inner'>
            
          </div>

        </div>
        <div className='default-icon'>
          <SvgDefault />
        </div>
          <h2 className='titles'>Default</h2>
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



export default DashboardComp
