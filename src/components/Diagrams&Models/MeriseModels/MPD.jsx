import React from 'react'
import Image from './../../../img/MERISE_MPD-1.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const MPD = () => {
    return (
        <article className="article" id="modele-physique-des-donnees-MERISE">
            <p className="subtitle">Modèle Physique des Données MERISE</p>
            <p>Il s'agit de la représentation modélisée qui précède l'implémentation dans le SGBDR.</p>
            <p>On retrouve les clés primaires et etrangères, la mise en auto-incrément, la mise en valeure non nulle et les types de valeures des attributs (DATETIME, DATE, VARCHAR, INT...).</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de MPD" />
            </div>
        </article>
    )
}

export default MPD