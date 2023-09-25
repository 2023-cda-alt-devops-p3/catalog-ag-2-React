import React from 'react'

const Nav = ({ onButtonClick }) => {

    return (

        <nav className="nav">
            <p className="navTitle">Diagrammes UML de structure</p>
            <ol className="navList">
                <li><button onClick={() => onButtonClick('class-diagram')}>Diagrammes de classes</button></li>
                <li><button onClick={() => onButtonClick('object-diagram')}>Diagrammes d'Objets</button></li>
                <li><button onClick={() => onButtonClick('componant-diagram')}>Diagrammes de Composants</button></li>
                <li><button onClick={() => onButtonClick('composite-structure-diagram')}>Diagrammes de Structure Composites</button></li>
                <li><button onClick={() => onButtonClick('deployment-diagram')}>Diagrammes de Déploiement</button></li>
                <li><button onClick={() => onButtonClick('packaging-diagram')}>Diagrammes de Paquetage</button></li>
                <li><button onClick={() => onButtonClick('profil-diagram')}>Diagrammes de profil</button></li>
            </ol>

            <p className="navTitle">Diagrammes UML de comportement</p>
            <ol className="navList">
                <li><button onClick={() => onButtonClick('user-case-diagram')}>Diagrammes de Cas d'Utilisation</button></li>
                <li><button onClick={() => onButtonClick('activity-diagram')}>Diagrammes d'Activité</button></li>
                <li><button onClick={() => onButtonClick('transition-state-diagram')}>Diagrammes des Etats-Transitions</button></li>
                <li><button onClick={() => onButtonClick('communication-diagram')}>Diagrammes de Communication</button></li>
                <li><button onClick={() => onButtonClick('sequence-diagram')}>Diagrammes de Séquence</button></li>
                <li><button onClick={() => onButtonClick('time-diagram')}>Diagrammes de Temps</button></li>
                <li><button onClick={() => onButtonClick('interaction-diagram')}>Diagrammes d'Aperçu d'Interaction</button></li>
            </ol>

            <p className="navTitle">Diagrammes MERISE</p>
            <ol className="navList">
                <li><button onClick={() => onButtonClick('MCDt')}>MCD modèle conceptuel des données</button></li>
                <li><button onClick={() => onButtonClick('MPD')}>MPD modèle physique des données</button></li>
                <li><button onClick={() => onButtonClick('MLD')}>MLD modèle logique des données</button></li>
                <li><button onClick={() => onButtonClick('MFD')}>MFD modèle de flux de données</button></li>
                <li><button onClick={() => onButtonClick('MCT')}>MCT modèle conceptuel des traitements</button>
                </li>
            </ol>
        </nav>
    )
}

export default Nav