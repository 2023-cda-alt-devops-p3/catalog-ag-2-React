import React from 'react'
import Image from './../../../img/MERISE_MPD-1.png'

const MPD = () => {
    return (
        <article className="article" id="modele-physique-des-donnees-MERISE">
            <p className="subtitle">Modèle Physique des Données MERISE</p>
            <p>Il s'agit de la représentation modélisée qui précède l'implémentation dans le SGBDR.</p>
            <div className="img-article">
                <img src={Image} alt="exemple de MPD" />
            </div>
        </article>
    )
}

export default MPD