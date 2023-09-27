import React from 'react'

const Nav = ({ onButtonClick }) => {

    function displayOn(elm) {
        if (elm.className === "displayOff") {
            elm.className = "displayOn";
        } else {
            elm.className = "displayOff";
        }
    }

    function displayStructure() {
        const elm = document.querySelector('#olStructure')
        displayOn(elm)
    }

    function displayComportement() {
        const elm = document.querySelector('#olComportement')
        displayOn(elm)
    }

    function displayMerise() {
        const elm = document.querySelector('#olMerise')
        displayOn(elm)
    }

    return (

        <nav className="nav">
            <div>
            <button onClick={() => onButtonClick('presentation')}>UML & MERISE</button>
            </div>
            <div>
            <button onClick={displayStructure}>Diagrammes UML de structure</button>
            <ol className="navList displayOff" id='olStructure'>
                <li><button onClick={() => onButtonClick('class-diagram')}>Diagrammes de classes</button></li>
                <li><button onClick={() => onButtonClick('object-diagram')}>Diagrammes d'Objets</button></li>
                <li><button onClick={() => onButtonClick('componant-diagram')}>Diagrammes de Composants</button></li>
                <li><button onClick={() => onButtonClick('composite-structure-diagram')}>Diagrammes de Structure Composites</button></li>
                <li><button onClick={() => onButtonClick('deployment-diagram')}>Diagrammes de Déploiement</button></li>
                <li><button onClick={() => onButtonClick('packaging-diagram')}>Diagrammes de Paquetage</button></li>
                <li><button onClick={() => onButtonClick('profil-diagram')}>Diagrammes de profil</button></li>
            </ol>
            </div>
            <div>
            <button onClick={displayComportement}>Diagrammes UML de comportement</button>
            <ol className="navList displayOff" id='olComportement'>
                <li><button onClick={() => onButtonClick('use-case-diagram')}>Diagrammes de Cas d'Utilisation</button></li>
                <li><button onClick={() => onButtonClick('activity-diagram')}>Diagrammes d'Activité</button></li>
                <li><button onClick={() => onButtonClick('transition-state-diagram')}>Diagrammes des Etats-Transitions</button></li>
                <li><button onClick={() => onButtonClick('communication-diagram')}>Diagrammes de Communication</button></li>
                <li><button onClick={() => onButtonClick('sequence-diagram')}>Diagrammes de Séquence</button></li>
                <li><button onClick={() => onButtonClick('time-diagram')}>Diagrammes de Temps</button></li>
                <li><button onClick={() => onButtonClick('interaction-diagram')}>Diagrammes d'Aperçu d'Interaction</button></li>
            </ol>
            </div>
            <div>
            <button onClick={displayMerise}>Diagrammes MERISE</button>
            <ol className="navList displayOff" id='olMerise'>
                <li><button onClick={() => onButtonClick('MCD')}>MCD modèle conceptuel des données</button></li>
                <li><button onClick={() => onButtonClick('MPD')}>MPD modèle physique des données</button></li>
                <li><button onClick={() => onButtonClick('MLD')}>MLD modèle logique des données</button></li>
                <li><button onClick={() => onButtonClick('MFD')}>MFD modèle de flux de données</button></li>
                <li><button onClick={() => onButtonClick('MCT')}>MCT modèle conceptuel des traitements</button>
                </li>
            </ol>
            </div>
        </nav>
    )
}

export default Nav