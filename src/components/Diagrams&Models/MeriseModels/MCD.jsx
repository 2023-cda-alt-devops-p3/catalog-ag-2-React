import React, { useState} from 'react'
import Image from './../../../img/MERISE_MCD-2.png'
import Image2 from './../../../img/MERISE_MCD-3.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from './../../Modal'

const MCD = () => {

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
        <article className="article" id="modele-conceptuel-des-donnees-MERISE">
            <p className="subtitle">Modèle Conceptuel des Données MERISE</p>
            <p>Le MCD permet de représenter le système d'information indépendamment de son aspect informatique.</p>
            <p>Une <b>entité</b> regroupe des informations de même nature, ces informations sont représentées par les
                attributs de l'entité.</p>
            <p>Une <b>association</b> (ou une relation) est un lien entre plusieurs entités.</p>
            <p>L'association représente la dynamique du système, elle exprime l'activité du système
                d'information, elle est caractérisée par les cardinalités.</p>
            <p>La <b>cardinalité</b> d'une patte reliant une association et une entité précise le nombre de fois
                minimal et maximal d'interventions d'une occurence de l'entité avec l'association. La
                cardinalité minimale doit être inférieure ou égale à la cardinalité maximale.</p>
            <p>Les seuls cardinalités admises sont donc :</p>
            <ol>
                <li>1-1: une occurrence de l'entité participe minimum et maximum 1 fois à l'association</li>
                <li>0-1: une occurrence de l'entité peut exister sans pour autant participer à la relation et ne
                    participe jamais plus d'une fois</li>
                <li>1-n: une occurrence de l'entité participe au moins une fois à l'association et peut
                    participer sans limitation</li>
                <li>0-n: une occurrence de l'entité peut exister sans pour autant participer à la relation et
                    peut participer sans limitation</li>
            </ol>
            <p><i>Exemple de MCD :</i></p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de MCD" onClick={() => openModal(Image)} />
            </div>
            <p><i>Autre Exemple de MCD :</i></p>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de MCD" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default MCD