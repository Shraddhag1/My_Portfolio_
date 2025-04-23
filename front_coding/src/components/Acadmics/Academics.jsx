import React from 'react';
import './Acadmics.css';
import { useSelector } from 'react-redux';

const Academics = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { education } = portfolioData;
  
  // Extract skills from education array
  const skills = education?.[0]?.skill || [];
  console.log(skills)


  return (
    <div id='Academics'>
      <div>
        <p>
          Education & Skills<br />  <br />
          Bachelor of Science in Computer Science (2021-24)<br />
          [University of Mumbai]<br />
          Master's in Data Science (Ongoing, 1st Year)<br />
          [University of Mumbai]
        </p>
        <div className="py-5">
          <p>Skills</p>
          <h3 className="text-blue-600">
            Here are a few technologies I've been working with recently
          </h3>

          {/* Tailwind Flexbox layout for skills */}
          <div className="flex gap-5 mt-5 flex-wrap">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="border-2 border-blue-950 py-3 px-10 ml-2 flex items-center justify-center"
                >
                  <h1 className="text">{skill}</h1>
                </div>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
