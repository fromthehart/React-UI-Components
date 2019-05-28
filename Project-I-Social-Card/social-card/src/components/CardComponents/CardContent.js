import React from 'react';
import './Card.scss';

const CardContent = () => {
  return (
    <div class="card-content">
      <p>
        <strong>Get started with React</strong>
      </p>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <p>
        <a className="card-link" href ="https://reactjs.org">reactjs.org</a>
      </p>
    </div>
  )
}

export default CardContent;