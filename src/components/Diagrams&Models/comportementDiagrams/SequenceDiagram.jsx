import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-sequence-1.png'
import Image2 from './../../../img/UML-sequence-2.png'

const SequenceDiagram = () => {

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
        <article class="article" id="diagramme-de-sequence-UML">
            <p class="subtitle">Diagramme de sequence UML</p>
            <p>Les diagrammes de séquence sont une solution populaire de modélisation dynamique en langage UML,
                car ils se concentrent plus précisément sur les lignes de vie, les processus et les objets qui
                vivent simultanément, et les messages qu'ils échangent entre eux pour exercer une fonction avant
                la fin de la ligne de vie.</p>
            <p>Les diagrammes de séquence peuvent constituer des références utiles pour les entreprises et
                d'autres organisations. Essayez de dessiner un diagramme de séquence pour :</p>
            <ol>
                <li>Représenter les détails d'un cas d'utilisation UML</li>
                <li>Modéliser le déroulement logique d'une procédure, fonction ou opération complexe</li>
                <li>Voir comment les objets et les composants interagissent entre eux pour effectuer un
                    processus.</li>
                <li>Schématiser et comprendre le fonctionnement détaillé d'un scénario existant ou à venir</li>
            </ol>
            <p>Les scénarios suivants sont idéaux pour utiliser un diagramme de séquence :</p>
            <ol>
                <li>Scénario d'utilisation : un scénario d'utilisation est un diagramme décrivant comment votre
                    système pourrait potentiellement être utilisé. C'est un bon moyen de s'assurer que vous avez
                    pris en compte la logique de tous les scénarios d'utilisation du système.</li>
                <li>Logique de méthode : de la même façon que vous pouvez utiliser un diagramme de séquence UML
                    pour analyser la logique d'un cas d'utilisation, vous pouvez aussi vous en servir pour
                    analyser la logique d'une fonction, d'une procédure ou d'un processus complexe.</li>
                <li>Logique de service : si vous considérez un service comme étant une méthode générale utilisée
                    par différents clients, un diagramme de séquence est le moyen idéal de le schématiser.
                </li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de séquence UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme de séquence UML" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>

    )
}

export default SequenceDiagram