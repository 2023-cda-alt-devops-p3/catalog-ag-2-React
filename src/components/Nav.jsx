import React from 'react'

const Nav = ({ onButtonClick }) => {

    return (

        <nav className="nav">
            <p className="navTitle">Diagrammes UML de structure</p>
            <ol className="navList">
                <li><button onClick={() => onButtonClick('class-diagram')}>Diagrammes de classes</button></li>
                <li><button onClick={() => onButtonClick('object')}>Diagrammes d'Objets</button></li>
                <li><button>Diagrammes de Composants</button></li>
                <li><button>Diagrammes de Structure Composites</button></li>
                <li><button>Diagrammes de Déploiement</button></li>
                <li><button>Diagrammes de Paquetage</button></li>
                <li><button>Diagrammes de profil</button></li>
            </ol>

            <p className="navTitle">Diagrammes UML de comportement</p>
            <ol className="navList">
                <li><button>Diagrammes de Cas d'Utilisation</button></li>
                <li><button>Diagrammes d'Activité</button></li>
                <li><button>Diagrammes des Etats-Transitions</button></li>
                <li><button>Diagrammes de Communication</button></li>
                <li><button>Diagrammes de Séquence</button></li>
                <li><button>Diagrammes de Temps</button></li>
                <li><button>Diagrammes d'Aperçu d'Interaction</button></li>
            </ol>

            <p className="navTitle">Diagrammes MERISE</p>
            <ol className="navList">
                <li><button>MCD modèle conceptuel des données</button></li>
                <li><button>MPD modèle physique des données</button></li>
                <li><button>MLD modèle logique des données</button></li>
                <li><button>MFD modèle de flux de données</button></li>
                <li><button>MCT modèle conceptuel des traitements</button>
                </li>
            </ol>
        </nav>
    )
}

export default Nav