import React from 'react';

let projects = [
    {
      id: 1,
      image: {
      imgSrc: 'https://i.ibb.co/52mfLKP/quiz-app-demo.gif',
      imgAlt: 'World Quiz App Preview'
      },
      title: 'World Capital Quiz',
      description: 'This project was made for anyone, from kids to adults, that loves quiz games and who are looking to test their knowledge on world capitals! The app guides you through a series of questions and gives you multiple choices to pick from. If you get an answer wrong or right, you\'ll be given the appropriate response and your score will be kept to let you know how well you\'re doing. I built this app to test my knowledge on how to make a modular, interactive web app using JavaScript and jQuery. Click the window button to give it a go!',
      technologies: [
        <i className="fab fa-html5"></i>,
        <i className="fab fa-css3-alt"></i>,
        <i className="fab fa-js-square"></i>,
        <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" viewBox="0 0 32 32" fill="#0868ac"><path d="M2.144 7.705c-2.83 4.07-2.48 9.364-.316 13.7.05.104.105.206.158.308l.1.195c.02.038.042.075.063.112.037.07.075.134.113.202l.207.354.118.194.24.375.102.158c.113.168.228.336.347.5l.068.092a16.39 16.39 0 0 0 .316.42l.12.152.292.36.112.134c.133.157.27.313.407.465.014.015.02.02.024.026a20.44 20.44 0 0 0 .414.436l.133.134.33.324.135.13a16.98 16.98 0 0 0 .453.412l.496.42.17.136.343.268.183.14.385.276.18.127c.123.085.248.166.374.247l.162.108a20.81 20.81 0 0 0 .585.358l.162.1.44.246c.08.043.162.084.243.125l.314.163.073.035.13.062.498.23.105.047a17.83 17.83 0 0 0 .581.241l.14.056.548.203.07.024a21.72 21.72 0 0 0 .61.2l.148.044c.2.063.416.14.63.178 13.694 2.497 17.67-8.23 17.67-8.23-3.34 4.352-9.27 5.5-14.9 4.222-.213-.048-.42-.114-.627-.176l-.156-.047a18.62 18.62 0 0 1-.604-.197l-.083-.03a20.87 20.87 0 0 1-.532-.197l-.15-.06a15.16 15.16 0 0 1-.575-.24l-.115-.05-.485-.226-.14-.067c-.126-.06-.25-.127-.375-.2l-.25-.13c-.152-.08-.3-.166-.45-.252l-.152-.085a21.76 21.76 0 0 1-.585-.358c-.053-.034-.105-.07-.158-.105l-.416-.277c-.046-.03-.1-.064-.134-.094l-.394-.285-.175-.132-.355-.278-.158-.127-.442-.373a.73.73 0 0 0-.05-.04l-.465-.423-.13-.126-.332-.33-.13-.13c-.14-.143-.276-.287-.4-.434-.007-.007-.014-.014-.02-.022a16.98 16.98 0 0 1-.416-.474l-.1-.13-.3-.37-.1-.137-.346-.46C2.982 15.6 1.86 9.722 4.354 4.902m6.58-.625c-2.048 2.947-1.937 6.9-.34 10.008a13.06 13.06 0 0 0 .906 1.512c.307.44.647.963 1.054 1.316.148.163.302.32.46.477l.12.12a13.41 13.41 0 0 0 .469.436c.007.005.012.012.02.017.182.16.366.3.553.458l.124.097a13.46 13.46 0 0 0 .574.419l.017.012c.086.06.174.115.262.173.042.027.082.056.124.082a11.64 11.64 0 0 0 .425.26l.06.035.376.2c.044.025.1.046.134.07l.263.136c.013.007.027.012.04.018a11.39 11.39 0 0 0 .548.255l.12.05a14.16 14.16 0 0 0 .45.182l.192.07a14.26 14.26 0 0 0 .413.143l.187.06c.197.06.4.14.597.173 10.573 1.752 13.014-6.4 13.014-6.4-2.2 3.17-6.46 4.68-11.008 3.5a13.06 13.06 0 0 1-.599-.173c-.06-.018-.12-.038-.18-.058l-.42-.144-.2-.07a15.08 15.08 0 0 1-.45-.182l-.122-.05a12.58 12.58 0 0 1-.552-.256l-.277-.14-.16-.082a13.16 13.16 0 0 1-.35-.197l-.084-.047a12.34 12.34 0 0 1-.424-.26c-.043-.027-.085-.057-.128-.085l-.275-.182a13.24 13.24 0 0 1-.57-.418l-.13-.1c-2-1.572-3.568-3.72-4.318-6.154-.786-2.525-.617-5.36.745-7.66m5.732-.183C17.12 3.5 17 5.698 17.838 7.66c.883 2.083 2.693 3.716 4.806 4.5l.262.1.116.036.377.1c5.838 1.128 7.42-2.996 7.843-3.603-1.387 1.997-3.718 2.476-6.578 1.782-.226-.055-.474-.137-.692-.214a8.46 8.46 0 0 1-.822-.341 8.5 8.5 0 0 1-1.441-.879C19.15 7.2 17.56 3.486 19.23.47"/></svg>
      ],
      liveLink: 'https://thinkful-ei-narwhal.github.io/quiz-app-Joseph-Orkun/',
      repoLink: 'https://github.com/thinkful-ei-narwhal/quiz-app-Joseph-Orkun',
    },
    {
      id: 2,
      image: {
      imgSrc: 'https://i.ibb.co/fqpJVPx/entrack-app-gif.gif',
      imgAlt: 'EnTrack App Preview'
      },
      title: 'EnTrack',
      description: 'This app was made for business owners and entrepreneurs to help better keep track of their time. Not only do you have a traditional to-do list of tasks, but you can also keep track of the hours it will take to complete them. You can also keep a list of preset tasks you know you always have to complete. This makes it easier and quicker to manage precious time entrepreneurs need to grow their business. I built this app with no external input or help with the purpose of developing a full-stack application with React.js, Node.js, and an SQL database. Give it a go!',
      technologies: [
        <i className="fab fa-js-square"></i>,
        <i className="fab fa-react"></i>,
        <i className="fab fa-node-js"></i>,
        <img className="psql-icon" src="https://img.icons8.com/color/40/000000/postgreesql.png" alt="PostgreSQL logo"/>,
      ],
      liveLink: 'https://entrack-app.now.sh/',
      repoLink: 'https://github.com/antonibrivera/entrack-app-client',
    },
    {
      id: 3,
      image: {
      imgSrc: 'https://i.ibb.co/C7XmFFf/penny-thoughts-demo.gif',
      imgAlt: 'Penny Thoughts Preview'
      },
      title: 'Penny Thoughts',
      description: 'This project was made in an agile team of 6 developers. The app was made to help provide a place for positive messages to be exchanged in a time where national and international tensions are rising. Penny Thoughts takes advantage of a premade Tensor Flow toxicity model to determine whether messages are positive or not. As a user you can view other positive messages, but if you come across a negative message it\'s encouraged for the user to report the message so an admin can do a final review. Learning and implementing new technologies like TensorFlow.js and encryption with Crypto.js gave me the confidence to learn how to work collaboratively in a team while juggling the functionality and performance of the app. Sign up now and give Penny thoughts a try!',
      technologies: [
        <i className="fab fa-js-square"></i>,
        <i className="fab fa-react"></i>,
        <i className="fab fa-node-js"></i>,
        <img className="psql-icon" src="https://img.icons8.com/color/40/000000/postgreesql.png" alt="PostgreSQL logo"/>,
        <span className="iconify ts-icon" data-icon="simple-icons:tensorflow" data-inline="false"></span>
      ],
      liveLink: 'https://penny-thoughts.vercel.app/',
      repoLink: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-client',
    },
  ];

  export default {
    projects
  }