import React,{ useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-apercu-interaction-1.png'
import Image2 from './../../../img/UML-apercu-interaction-2.png'
import Image3 from './../../../img/UML-apercu-interaction-3.png'
import Image4 from './../../../img/UML-apercu-interaction-4.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const InteractionDiagram = () => {

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
        <article className="article" id="diagramme-d-aperçu-d-interaction-UML">
            <p className="subtitle">Diagramme d'aperçu d'interaction UML</p>
            <p>Un diagramme d'aperçu d'interaction est une forme d'un diagramme d'activité. Dans lequel les
                noeuds représentent des diagrammes d'interaction. Diagrammes d'interaction peuvent inclure la
                séquence, la communication, l'interaction et la liste de chronogrammes. La plupart de la
                notation pour des diagrammes de vue d'ensemble d'interaction est la même pour des diagrammes
                d'activité. Par exemple, initiale, finale, décision, fusionner, fourchette et rejoindre nouds
                sont tous les mêmes. Cependant, aperçu interaction diagrammes introduisent deux nouveaux
                éléments: occurrences d'interaction et des éléments d'interaction.</p>
            <p>Les occurrences d'interaction sont des références aux diagrammes d'interaction existants. Une
                occurrence d'interaction est indiquée par un cadre de référence; qui est, un cadre avec "ref"
                dans le coin supérieur gauche. Le nom du diagramme, référencé, est affiché au centre du champ.
            </p>
            <div className="img-article">
                <LazyLoadImage src={Image}
                    alt="exemple de diagramme d'aperçu d'interaction UML" onClick={() => openModal(Image)} />
            </div>
            <p>Éléments d'interaction sont semblables aux occurrences d'interaction. Donc, ils affichent une
                représentation de diagrammes d'interaction existants dans un cadre rectangulaire. Ils sont
                différents en ce qu'ils affichent le contenu de la ligne des références du diagramme.</p>
            <div className="img-article">
                <LazyLoadImage src={Image2}
                    alt="autre exemple de diagramme d'aperçu d'interaction UML" onClick={() => openModal(Image2)} />
            </div>
            <p>Tous les mêmes contrôles de diagrammes d'activité (fourche, joindre, fusionner, etc.) peut être
                utilisé sur des diagrammes de vue d'ensemble d'interaction pour mettre la logique de contrôle
                l'encerclement des diagrammes de niveau inférieurs. L'exemple suivant illustre un processus de
                vente de l'échantillon, avec des sous-processus abstraits dans les occurrences d'interaction.
            </p>
            <div className="img-article">
                <LazyLoadImage src={Image3}
                    alt="autre exemple de diagramme d'aperçu d'interaction UML" onClick={() => openModal(Image3)} />
            </div>
            <p>Voici un exemple plus complet</p>
            <div className="img-article">
                <LazyLoadImage src={Image4}
                    alt="autre exemple de diagramme d'aperçu d'interaction UML" onClick={() => openModal(Image4)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default InteractionDiagram