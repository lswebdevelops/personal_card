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

    // it could be: 
    // let starIcon = contact.isFavorite ? "yellowStar.png" : "star.png"
    // then down below, update the line :
    //from:  <img src={starIcon ? require(`../Images/star.png`): require(`../Images/yellowStar.
    //to: <img src={`../images/${starIcon`}
    // *** see down commentary:
    let starIcon = contact.isFavorite;
    function toggleFavorite(){
     setContact(previousState =>({
        // bring all the properties using the spread operator: "..." otherwise it would just bring the isFavorite value
        ...previousState,
        isFavorite: !previousState.isFavorite
     }))
    }


    return(
        <main className='content'>
            <article className='card'>
                <img src={require(`../Images/card.png`)} 
                className='card-image'
                alt='a man'/>
                <div className='card-info'>
                {/* *** here commentary */}
                <img src={starIcon ? require(`../Images/yellowStar.png`): require(`../Images/star.png`)} 

                alt='a star'
                className='card-favorite'
                onClick={toggleFavorite} />
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
