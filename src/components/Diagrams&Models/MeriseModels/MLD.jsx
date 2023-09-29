import React, { useState} from 'react'
import Image from './../../../img/MERISE_MLD-1.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from './../../Modal'

const MLD = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setIsModalOpen(false);
    };

    return (
        <article className="article" id="modele-logique-des-donnees-MERISE">
            <p className="subtitle">Modèle Logique des Données MERISE</p>
            <p>Un modèle logique de données relationnel (MLD-R) est la représentation des données d'un système
                d'information réalisé en vue d'une mise en oeuvre au sein d'un système de gestion de base de
                données relationnel (SGBD-R). Les données sont représentées sous forme de tables et de relations
                entre tables.</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de MLD" onClick={() => openModal(Image)} />
            </div>
            <p>Les modèles logiques de données relationnels sont réalisés à partir du méta modèle de classes du
                langage de modélisation unifié, UML en abrégé. La lecture des cardinalités UML est l'inverse de
                la lecture Merise.</p>
                {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default MLD