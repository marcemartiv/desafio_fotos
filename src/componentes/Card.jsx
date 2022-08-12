import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (Props) => {
  return (
    <div className="cuadrado">
        <Card>
          <Card.Img src={Props.img}/>
          <Card.Body>
            <Card.Title>{Props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                {Props.tipo}
            </Card.Subtitle>            
           </Card.Body>  
            
        </Card>
    </div>
  )
};

export default Cards;