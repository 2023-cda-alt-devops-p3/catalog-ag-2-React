import React, { useState } from 'react'

const Nav = ({ onButtonClick }) => {

    const [openSection, setOpenSection] = useState(null);

    function displayOnOff(sectionId) {
        setOpenSection((prevOpenSection) => (prevOpenSection === sectionId ? null : sectionId));
    }

    return (

        <nav className="nav">
            <div>
                <a href='#textBeginning'><button onClick={() => onButtonClick('presentation')}>UML & MERISE</button></a>
            </div>
            <div>
                <button onClick={() => displayOnOff('olStructure')}>Diagrammes UML de structure</button>
                <ol className={`navList ${openSection === 'olStructure' ? 'displayOn' : 'displayOff'}`} id='olStructure'>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('class-diagram')}>Diagrammes de classes</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('object-diagram')}>Diagrammes d'Objets</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('componant-diagram')}>Diagrammes de Composants</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('composite-structure-diagram')}>Diagrammes de Structure Composites</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('deployment-diagram')}>Diagrammes de Déploiement</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('packaging-diagram')}>Diagrammes de Paquetage</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('profil-diagram')}>Diagrammes de profil</button></a></li>
                </ol>
            </div>
            <div>
                <button onClick={() => displayOnOff('olComportement')}>Diagrammes UML de comportement</button>
                <ol className={`navList ${openSection === 'olComportement' ? 'displayOn' : 'displayOff'}`} id='olComportement'>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('use-case-diagram')}>Diagrammes de Cas d'Utilisation</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('activity-diagram')}>Diagrammes d'Activité</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('transition-state-diagram')}>Diagrammes des Etats-Transitions</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('communication-diagram')}>Diagrammes de Communication</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('sequence-diagram')}>Diagrammes de Séquence</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('time-diagram')}>Diagrammes de Temps</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('interaction-diagram')}>Diagrammes d'Aperçu d'Interaction</button></a></li>
                </ol>
            </div>
            <div>
                <button onClick={() => displayOnOff('olMerise')}>Diagrammes MERISE</button>
                <ol className={`navList ${openSection === 'olMerise' ? 'displayOn' : 'displayOff'}`} id='olMerise'>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('MCD')}>MCD modèle conceptuel des données</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('MPD')}>MPD modèle physique des données</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('MLD')}>MLD modèle logique des données</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('MFD')}>MFD modèle de flux de données</button></a></li>
                    <li><a href='#textBeginning'><button onClick={() => onButtonClick('MCT')}>MCT modèle conceptuel des traitements</button></a></li>
                </ol>
            </div>
        </nav>
    )
}

export default Nav