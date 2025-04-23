// import React from 'react'
// import "./Projects.css"
// import { useSelector } from 'react-redux';
// import { TiThLarge } from 'react-icons/ti';


// const Projects = () => {
//   const { loading,portfolioData } = useSelector((state)=>state.root);
//   const {projects} =portfolioData;
//   // const projectData=portfolioData?.Projects;
  

//   // const projects =Array.isArray(projectData)  ? projectData :[projectData]
//   const{title,description,image1,image2} =projects;

//   console.log(title)
//   return (
//     <div id='Projects'>
//       <h2>Projects</h2>
//       <h4>title</h4>
//       projects.map((item,index) => (
//       <p className='para1'>A Cosmetic Website is an online platform designed to showcase and sell beauty and skincare products.
//          It typically includes features like product catalogs, customer reviews, shopping carts, and secure 
//          payment gateways.<br/>

//                 Technologies Used:<br/>
//                 HTML – Structures the web pages and organizes content.<br/>
//                 CSS – Styles the website with appealing designs, colors, and layouts.<br/>
//                 JavaScript – Adds interactivity, such as image sliders, product filters, and animations.<br/>
//                 MySQL – Manages the database for storing product details, user accounts, and orders.<br/>
//                 PHP – Handles server-side processing, such as user authentication, cart management, and database interactions.</p>
//                 <div className='img'>
//         <img src="/src/assets/profile.jpeg" alt="profile" className='profile' />
//         <img src="/src/assets/profile.jpeg" alt="profile" className='profile' />
        
        
//      </div>))
//                 {/* <div>
//                 <h5>NEWSWAVE – A Dynamic News Portal</h5>

//                 <p className='para2'>NEWSWAVE is an interactive news portal designed to deliver real-time news updates across various categories like 
//                 politics, sports, entertainment, and technology. It ensures a user-friendly experience with responsive design,
//                 interactive elements, and a secure database for managing news articles and user interactions.

//                 Technologies Used:<br/>
//                 HTML – Structures the web pages, ensuring organized content display.<br/>
//                 CSS – Enhances the visual appeal with stylish layouts and responsive design.<br/>
//                 JavaScript – Adds interactivity, including live news updates, sliders, and dynamic content.<br/>
//                 MySQL – Stores and manages news articles, user comments, and other data.<br/>
//                 PHP – Handles server-side operations such as user authentication, content management, and database interactions.
//                 </p>
//                 <div className='img'>
//         <img src="/src/assets/profile.jpeg" alt="profile" className='profile' />
//         <img src="/src/assets/profile.jpeg" alt="profile" className='profile' />
//      </div>
// </div> */}
//     </div>
//   )
// }

// export default Projects
import React from "react";
import "./Projects.css";
import { useSelector } from "react-redux";

const Projects = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const projects = portfolioData?.projects || [];

  return (
    <div id="Projects">
      <h2>Projects</h2>

      {projects.length > 0 ? (
        projects.map((item, index) => (
          <div key={index} className="">
            <h3>{item.title}</h3>
            <p className="para1">{item.description}</p>
            <div className="img">
              
            </div>
          </div>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};

export default Projects;
