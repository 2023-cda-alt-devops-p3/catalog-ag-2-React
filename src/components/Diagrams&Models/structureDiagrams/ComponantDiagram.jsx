import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-Composants-1.png'
import Image2 from './../../../img/UML-Composants-2.png'
import Image3 from './../../../img/UML-Composants-3.png'
import Image4 from './../../../img/UML-Composants-4.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ComponantDiagram = () => {

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
        <article className="article" id="diagramme-de-composants-UML">
            <p className="subtitle">Diagramme de composants UML</p>
            <p>Un diagramme de composants a pour objectif d'<b>illustrer la relation entre les différents
                composants</b> d'un système. Dans le cadre de l'UML 2.0, le terme « composant » fait référence à un
                module de classes qui représentent des systèmes ou des sous-systèmes indépendants ayant la
                capacité de s'interfacer avec le reste du système.</p>
            <p>Il existe une approche de développement entièrement articulée autour des composants: la
                programmation orientée composant (POC). Dans cette approche, les diagrammes de composants
                permettent au responsable de la planification d'identifier les différents composants afin que
                l'ensemble du système fonctionne selon le cahier des charges.</p>
            <p>Plus communément, dans une approche de programmation orientée objet, le diagramme de composants
                permet à un développeur senior de regrouper des classes autour d'un objectif commun afin que les
                parties prenantes et lui-même puissent disposer d'une vue d'ensemble sur un projet de
                développement logiciel.</p>
            <p>Bien que les diagrammes des composants puissent paraître complexes à première vue, ils sont d'une
                valeur inestimable pour la conception de votre système. Ils peuvent en effet aider votre équipe
                à :</p>
            <ol>
                <li>- imaginer la structure physique du système ;</li>
                <li>- faire ressortir les composants du système et à leurs relations ;</li>
                <li>- mettre en évidence le comportement de chaque service vis-à-vis de l'interface.</li>
            </ol>
            <p>Un diagramme de composants UML vous permet d'obtenir une vue d'ensemble de votre système
                logiciel. Comprendre le comportement précis du service fourni par chaque élément de votre
                logiciel vous aidera à devenir un meilleur développeur. Les diagrammes de composants peuvent
                représenter tout type de systèmes logiciels, quel que soit le langage ou style de programmation
                utilisé.</p>
            <p>L'UML est un ensemble de conventions pour les diagrammes orientés objets avec un grand nombre
                d'applications possibles. Dans les diagrammes de composants, le langage de modélisation unifié
                (UML) prévoit que les composants et les packages (ou paquetages, en français) soient reliés les
                uns aux autres par des lignes représentant les connecteurs d'assemblage et les connecteurs de
                délégation.</p>
            <p>Les diagrammes de composants s'étendent de la vue d'ensemble sommaire aux modèles plus détaillés
                et complexes. Quels que soient vos besoins, vous devrez vous familiariser avec les symboles UML
                appropriés. Voici les différents types de formes qu'il vous faut connaître lorsque vous
                consultez ou souhaitez réaliser des diagrammes de composants :</p>
            <ol>
                <li>- Symbole de composant : Entité tenue d'exécuter une fonction stéréotypée. Un composant
                    fournit et consomme un comportement par le biais d'interfaces, ainsi que par le biais
                    d'autres composants. Considérez les composants comme un type de classe. En UML 1.0, un
                    composant est modélisé sous forme de bloc rectangulaire avec deux rectangles plus petits qui
                    dépassent sur le côté. En UML 2.0, un composant est modélisé sous forme de bloc
                    rectangulaire avec une petite image de l'ancienne forme UML 1.0.</li>
                <li>- Symbole de nœud : Représente des objets matériels ou logiciels situés à un niveau supérieur
                    aux composants.</li>
                <li>- Symbole d'interface : Indique les entrées ou les données qu'un composant reçoit ou fournit.
                    Les interfaces peuvent être représentées par des notes textuelles ou des symboles, tels que
                    des formes de sucette, de douille ouverte et d'articulation.</li>
                <li>- Symbole de port : Spécifie un point d'interaction distinct entre un composant et son
                    environnement. Les ports sont symbolisés par un petit carré.</li>
                <li>- Symbole de paquetage : Regroupe plusieurs éléments du système et est représenté par des
                    dossiers de fichiers. Tout comme les dossiers de fichiers regroupent
                    plusieurs feuilles, les packages peuvent englober plusieurs éléments.</li>
                <li>- Remarque : Permet aux développeurs d'ajouter une méta-analyse sur le diagramme de
                    composants.</li>
                <li>- Symbole de dépendance : Indique les relations de dépendance entre les différentes parties de
                    votre système. Les dépendances sont représentées par des lignes pointillées reliant un
                    composant (ou élément) à un autre.</li>
            </ol>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de diagramme de composants UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de diagramme de composants UML" onClick={() => openModal(Image2)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image3} alt="autre exemple de diagramme de composants UML" onClick={() => openModal(Image3)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image4} alt="autre exemple de diagramme de composants UML" onClick={() => openModal(Image4)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default ComponantDiagram