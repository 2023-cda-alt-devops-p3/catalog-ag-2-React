import React from 'react'
import Image from './../../../img/MERISE_MFD-1.png'
import Image2 from './../../../img/MERISE_MFD-2.png'

const MFD = () => {
    return (
        <article className="article" id="modele-flux-des-donnees-MERISE">
            <p className="subtitle">Modèle de Flux des Données MERISE</p>
            <p>Les flux d'informations sont un échange d'informations (message) entre des acteurs (externes ou
                internes au système étudié) et le domaine étudié. On appelle Diagramme des flux, une
                modélisation qui représente uniquement ces flux échangés, sans chronologie et sans description
                des activités associées (en entrée ou sortie) à ces flux.</p>
            <p>On appelle Diagramme des flux, une modélisation qui représente uniquement les flux échangés, sans
                chronologie ni description des activités associées (en entrée ou sortie) à ces flux.
                On retrouvera évidemment ces mêmes flux dans un MCT (puis plus tard dans un MOT) mais cette
                fois-ci associés aux opérations qui composent le domaine étudié. Un flux (ou message) entrant
                dans le système déclenchera une opération; un flux sortant sera produit par une opération.
                Le diagramme des flux ci-dessous est dit "de contexte" car il montre globalement les principaux
                flux entre le domaine étudié (la branche Auto) et les acteurs de son environnement.</p>
            <div className="img-article">
                <img src={Image} alt="exemple de modèle de flux de données" />
            </div>
            <p>Le diagramme des flux suivant expose les principaux processus du domaine et les flux associés à
                ces processus. Un tel diagramme est une transition entre un diagramme des flux de contexte et un
                "macro-MCT".</p>
            <div className="img-article">
                <img src={Image2} alt="exemple de modèle de flux de données" />
            </div>
        </article>
    )
}

export default MFD