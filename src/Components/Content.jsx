// Content.js
import '../Styles/Content.css';
import React from 'react';
import Star from './Star';


function Content() {
  const [contact, setContact] = React.useState({
    fistName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  });													
  let iconStar = contact.isFavorite ? require("../Images/star.png"): require("../Images/yellowStar.png");

  function toggleFavorite(){
    setContact(prevStatus =>({
        ...prevStatus,
        isFavorite: !prevStatus.isFavorite
    }))
  
  }
  return (
    <main className='content'>
      <article className='card'>
        <img src={require(`../Images/card.png`)}
             className='card-image'
             alt='a man'/>
        <div className='card-info'>
			  

        <button
            className='btnStarIcon'
            onClick={toggleFavorite}>
        <Star
          isFilled={iconStar} />
        </button >


          <h2 className='card-name'>
            {contact.fistName} {contact.lastName}
          </h2>
          <p className='card-contact'>{contact.phone}</p>
          <p className='card-contact'> {contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default Content;
