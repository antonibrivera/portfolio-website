import React from 'react';
import store from '../store';
import ProjectItem from './ProjectItem';

export default function Projects(props) {

  const generateProjectItems = (projects) => {
    const temp = projects.map(project => {
      return <ProjectItem 
        key={project.id}
        id={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        liveLink={project.liveLink}
        repoLink={project.repoLink}
      />
    })
    return temp;
  };

  return (
    <section className="content-section">
      <header>
        <h1 className="projects-header">Projects</h1>
        <p className="projects-subtitle">Here a list of the projects I'm most proud of! Feel free to visit the GitHub Repo and the Live Site with the links in the bottom right corner.</p>
      </header>
      <ul className="projects-list">
        {generateProjectItems(store.projects)}
      </ul>
      <p className="coming-soon">More projects on the way!</p>
    </section>
  )
}