import React from 'react';

const InputStyle = {
    width: '100%',
    height: '34px'
};

const Center = {
    textAlign: 'center'
};

const NewFavForm = (args) => {
    return (
        <div className="accordion">
            <div className="accordion__head">Neuen Favoriten hinzufügen</div>
            <div className="accordion__body">
                <div className="accordion__content">
                    <input className="input" placeholder="Name" style={InputStyle}/><br/>
                    <input className="input" placeholder="Facebookseite" style={InputStyle}/><br/>
                    <input className="input" placeholder="Adresse" style={InputStyle}/><br/>
                    <input className="input" placeholder="E-Mail" style={InputStyle}/><br/>
                    <textarea className="input" placeholder="Kommentar" autogrow="true" style={InputStyle}></textarea><br/><br/>

                    <div style={Center}><button className="button">Hinzufügen</button></div>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default NewFavForm;