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


    function toggleFavorite(){
        console.log("Toggle Favorite");
    }



    return(
        <main className='content'>
            <article className='card'>
                <img src={require(`../Images/card.png`)} 
                className='card-image'
                alt='a man'/>
                <div className='card-info'>
                <img src={require(`../Images/star.png`)} 
                alt='a star'
                className='card-favorite'
                onClick={toggleFavorite} />
                <h2 className='card-name'>
                    John Doe
                </h2>
                <p className='card-contact'> +1 (719) 555-1212</p>
                <p className='card-contact'>itsmyrealname@example.com</p>
                </div>
            </article>
        </main>
            )
}

export default Content;
