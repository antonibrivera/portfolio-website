import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(props) {
  return (
    <section className='content-section not-found-section'>
      <header>
        <h2>Sorry, that page doesn't exist!</h2>
        <p>Click the button below to go back home.</p>
      </header>
      <span role='img' className='not-found-emoji' aria-label='confused emoji'>&#128533;</span>
      <Link to='/' className='not-found-btn'>Go Home</Link>
    </section>
  )
}