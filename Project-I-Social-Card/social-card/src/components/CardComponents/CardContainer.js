import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <a href="https://reactjs.org" title="Get started with React">
      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  )
}

export default CardContainer;