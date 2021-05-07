import React from 'react';

export default function About(props) {
  return (
    <section className="content-section">
      <header>
        <h1 className="about-header">Home</h1>
        <h2 className="about-subtitle">
          Hi, I’m Joseph. I’m a full-stack developer with an itch helping others
          fulfill something missing in their lives, whether through developing an app, conversation, or both!
        </h2>
      </header>
      <img src="https://i.ibb.co/zhxKyvy/profile-pic.png" alt="Headshot of Joseph" className="headshot" />
      <div className="about-section">
        <h2>About</h2>
        <p className="biography">
          I’m a son of immigrants that came to this country at very young ages. Living in a busy
          city like Miami, FL and being the first person in my family to be born and raised here has
          given me a sense of gratitude and drive to push forward in anything I do in life.
          <br/><br/>
          Before learning about the extent to which software development can apply, I worked in the fine dining
          industry. I greatly enjoyed seeing how happy guests would be when they tried their meal for the
          first time! Dealing with people worth thousands of dollars, and sometimes, millions of dollars,
          always had me on my A-game. Making everyone that visited feel welcome and pampered was important to me
          and I would make sure to reflect that when tending to and talking to every guest.
          <br/><br/>
          I am a full-stack developer and recent graduate of the Engineering Immersion bootcamp at Thinkful.
          I find it most satisfying to be able to think up and implement an idea from nothing. Using code to
          make something that can have an impact on even one person’s life brings me excitement. Having learned technologies
          like React.js, Node.js, PostgreSQL, Agile/Scrum methodologies and more, I geek out on
          making back ends work and learning new tools and techniques. I also strive working in collaborative, innovative team
          that isn't afraid to reach out for help when they need it. Having an effective team to be accountable to helps me develop
          better products and experiences.
          <br/><br/>
          When I'm not coding, I enjoy spending time with those who matter most to me or learning new things I didn’t know before on any topic.
          As a lifelong learner, it’s important to me to be more knowledgeable than I was yesterday; a few of the
          things I learned over the years are playing the guitar and ukulele, different ways of life across the globe,
          and how to speak Italian. I'm excited to be using my skillset in an always-changing industry to see how far
          I can push my boundaries as a developer!
        </p>
      </div>
      <div className="skills-sections">
      </div>
    </section>
  )
}