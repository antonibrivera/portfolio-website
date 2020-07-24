import React from 'react';

export default function ProjectItem(props) {

  const generateTechItems = (technologies) => {
    const temp = technologies.map(item => {
      return <li key={technologies.indexOf(item) + 1}>{item}</li>
    })
    return temp;
  }

  return (
    <li className="project-item" key={props.id}>
      <img src={props.image.imgSrc} alt={props.image.imgAlt} className="app-preview" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul className="technologies">
        {generateTechItems(props.technologies)}
      </ul>
      <div className="github-links">
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-window-maximize"></i></a>
        <a href={props.repoLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
      </div>
    </li>
  )
}