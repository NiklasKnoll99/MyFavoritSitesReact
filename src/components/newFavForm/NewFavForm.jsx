import React from 'react';
import '../newFavForm/NewFavFormStyle.css'
import '../style/Style.css';

const NewFavForm = () => {
    return (
        <div className="accordion">
            <div className="accordion__head">Neuen Favoriten hinzufügen</div>
            <div className="accordion__body">
                <div className="accordion__content">
                    <input className="input newFavInput" placeholder="Name"/><br/>
                    <input className="input newFavInput" placeholder="Facebookseite"/><br/>
                    <input className="input newFavInput" placeholder="Adresse"/><br/>
                    <input className="input newFavInput" placeholder="E-Mail"/><br/>
                    <textarea className="input newFavInput" placeholder="Kommentar" autogrow="true"></textarea><br/><br/>

                    <div className="center"><button className="button">Hinzufügen</button></div>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default NewFavForm;