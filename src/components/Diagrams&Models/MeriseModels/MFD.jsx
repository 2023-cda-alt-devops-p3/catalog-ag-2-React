import React, { useState} from 'react'
import Image from './../../../img/MERISE_MFD-1.png'
import Image2 from './../../../img/MERISE_MFD-2.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from './../../Modal'

const MFD = () => {

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
        <article className="article" id="modele-flux-des-donnees-MERISE">
            <h2 className="subtitle">Modèle de Flux des Données MERISE</h2>
            <p>Les flux d'informations sont un échange d'informations (message) entre des acteurs (externes ou
                internes au système étudié) et le domaine étudié. On appelle Diagramme des flux, une
                modélisation qui représente uniquement ces flux échangés, sans chronologie et sans description
                des activités associées (en entrée ou sortie) à ces flux.</p>
            <p>On appelle Diagramme des flux, une modélisation qui représente uniquement les flux échangés, sans
                chronologie ni description des activités associées (en entrée ou sortie) à ces flux.
                On retrouvera évidemment ces mêmes flux dans un MCT mais cette
                fois-ci associés aux opérations qui composent le domaine étudié. Un flux (ou message) entrant
                dans le système déclenchera une opération; un flux sortant sera produit par une opération.
                Le diagramme des flux ci-dessous est dit "de contexte" car il montre globalement les principaux
                flux entre le domaine étudié (la branche Auto) et les acteurs de son environnement.</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de modèle de flux de données" onClick={() => openModal(Image)} />
            </div>
            <p>Le diagramme des flux suivant expose les principaux processus du domaine et les flux associés à
                ces processus. Un tel diagramme est une transition entre un diagramme des flux de contexte et un
                "macro-MCT".</p>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="exemple de modèle de flux de données" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default MFD