import '../Styles/Content.css';
import React from 'react';

function Content(){
    const [contact, setContact] = React.useState({
        fistName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });

    let starIcon = contact.isFavorite ? 'yellowStar.png': 'star.png'
    function toggleFavorite(){
     setContact(prevState=>{
        return{
            ...prevState,
            isFavorite: !prevState.isFavorite
        }
     })
    }


    return(
        <main className='content'>
            <article className='card'>
                <img src={require(`../Images/card.png`)} 
                className='card-image'
                alt='a man'/>
                <div className='card-info'>
                {/* *** here commentary */}
                <img
                src={require(`../Images/${starIcon}`)}
                alt='a star'
                className='card-favorite'
                onClick={toggleFavorite}
                />
                <h2 className='card-name'>
                    {contact.fistName} {contact.lastName}
                </h2>
                <p className='card-contact'>{contact.phone}</p>
                <p className='card-contact'> {contact.email}</p>
                </div>
            </article>
        </main>
        )
}

export default Content;
