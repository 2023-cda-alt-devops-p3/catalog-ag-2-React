import React from 'react'
import Image from './../../../img/MERISE_MLD-1.png'

const MLD = () => {
    return (
        <article className="article" id="modele-logique-des-donnees-MERISE">
            <p className="subtitle">Modèle Logique des Données MERISE</p>
            <p>Un modèle logique de données relationnel (MLD-R) est la représentation des données d'un système
                d'information réalisé en vue d'une mise en oeuvre au sein d'un système de gestion de base de
                données relationnel (SGBD-R). Les données sont représentées sous forme de tables et de relations
                entre tables.</p>
            <div className="img-article">
                <img src={Image} alt="exemple de MLD" />
            </div>
            <p>Les modèles logiques de données relationnels sont réalisés à partir du méta modèle de classes du
                langage de modélisation unifié, UML en abrégé. La lecture des cardinalités UML est l'inverse de
                la lecture Merise.</p>
        </article>
    )
}

export default MLD