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
        <p className="projects-subtitle">
          This website is a project in itself! Made with React.js and mobile-first CSS, this portfolio was deployed using Vercel to house the
          projects I'm most proud of. 
          <br/><br/>
          Feel free to visit the <a href="https://github.com/antonibrivera/portfolio-website" target="_blank" rel="noopener noreferrer">GitHub Repo</a> to see how I made this website and look out for the links on the
          bottom-right of each project to visit their GitHub repos and Live Apps!
        </p>
      </header>
      <ul className="projects-list">
        {generateProjectItems(store.projects)}
      </ul>
      <p className="coming-soon">More projects on the way!</p>
    </section>
  )
}