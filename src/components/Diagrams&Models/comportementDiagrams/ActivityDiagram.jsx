import React, {useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-activite-1.png'
import Image2 from './../../../img/UML-activite-2.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ActivityDiagram = () => {

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
        <article className="article" id="diagramme-activite-UML">
            <p className="subtitle">Diagramme d'activité UML</p>
            <p>Le langage UML est extrêmement utile pour visualiser et documenter des systèmes logiciels, mais
                la terminologie est parfois un peu déroutante pour quelqu'un qui ne connaît pas bien ce langage.
                Fondamentalement, un diagramme d'activités est un <b>organigramme illustrant les activités
                exécutées par un système</b>.</p>
            <p>Les diagrammes d'activités présentent plusieurs avantages pour les utilisateurs. Songez à créer
                un diagramme d'activités pour :</p>
            <ol>
                <li>- Démontrer la logique d'un algorithme</li>
                <li>- Décrire les étapes effectuées dans un cas d'utilisation d'UML</li>
                <li>- Illustrer un processus métier ou un flux de travail entre les utilisateurs et le système
                </li>
                <li>- Simplifier et améliorer n'importe quel processus en clarifiant les cas d'utilisation
                    complexes</li>
                <li>- Modéliser des éléments de l'architecture de logiciels, tels que la méthode, la fonction et
                    l'utilisation</li>
            </ol>
            <p>Voici quelques-uns des <b>composants les plus courants d'un diagramme d'activités :</b></p>
            <ol>
                <li>- <i>Action</i> : étape dans l'activité où les utilisateurs ou le logiciel exécutent une tâche
                    donnée. Les actions sont symbolisées par des rectangles aux bords arrondis.
                </li>
                <li>- <i>Nœud de décision</i> : embranchement conditionnel dans le flux, qui est représenté par un
                    losange. Il comporte une seule entrée et au moins deux sorties.</li>
                <li>- <i>Flux de contrôle</i> : autre nom donné aux connecteurs qui illustrent le flux entre les étapes
                    du diagramme.</li>
                <li>- <i>Nœud de départ</i> : élément symbolisant le début de l'activité, que l'on représente par un
                    cercle noir.</li>
                <li>- <i>Nœud de fin</i> : élément symbolisant l'étape finale de l'activité, que l'on représente par un
                    cercle noir avec un contour.</li>
            </ol>
            <p>Voici des exemples :</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de diagramme d'activité UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de diagramme d'activité UML" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}


export default ActivityDiagram