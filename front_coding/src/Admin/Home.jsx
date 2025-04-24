import React from 'react'
import { Tabs } from "antd";
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import {useSelector} from 'react-redux';
import Adminskills from './Adminskills';
import AdminProject from './AdminProject';

const Admin = () => {
  
    const {portfolioData} = useSelector((state)=> state.root);
  return (
    <div id='Admin'>
      {portfolioData && <div className='mt-5 p-5'>
      <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Intro', key: '1',
        children: <AdminIntro/>,
      },
      {
        label: 'About',
        key: '2',
        children: <AdminAbout/>,
    
      },
      {
        label: 'Skill',
        key: '3',
        children: <Adminskills/>,
      },
      {
        label: 'Project',
        key: '4',
        children: <AdminProject/>,
      },

      
    ]}
  />
      </div>}
    </div>
  );
}

export default Admin

