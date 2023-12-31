import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-Classes.png'
import Image2 from './../../../img/UML-Classes-2.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ClassDiagram = () => {

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
        <article className="article" id="diagramme-de-classes-UML">
            <h2 className="subtitle">Diagramme de classes UML</h2>
            <p>Les diagrammes de classes sont l'un des types de diagrammes UML les plus utiles, car ils
                décrivent clairement la structure d'un système particulier en <b>modélisant ses classes, ses
                    attributs, ses opérations et les relations entre ses objets</b>.</p>
            <p>Le langage de modélisation unifié (UML) peut vous aider à modéliser des systèmes de plusieurs
                façons. Le diagramme de classes est l'un des types les plus populaires en langage UML. Très
                utilisé par les ingénieurs logiciel pour documenter l'architecture des logiciels, les diagrammes
                de classes sont un type de diagramme de structure, car ils décrivent ce qui doit être présent
                dans le système modélisé.</p>
            <p>Le langage UML a été créé sous forme de modèle standardisé pour décrire une approche de la
                programmation orientée objet. Comme les classes sont les composantes des objets, les diagrammes
                de classes sont les composantes de l'UML. Les divers éléments d'un diagramme de classes peuvent
                représenter les classes qui seront effectivement programmées, les principaux objets ou les
                interactions entre classes et objets. </p>
            <p>La forme de la classe à proprement parler se compose d'un rectangle à trois lignes. La ligne
                supérieure contient le nom de la classe, celle du milieu affiche les attributs de la classe et
                la ligne inférieure exprime les méthodes ou les opérations que la classe est susceptible
                d'utiliser. Les classes et sous-classes sont regroupées pour illustrer la relation statique
                entre chaque objet.</p>
            <p>Toutes les classes ont des niveaux d'accès différents, en fonction du modificateur d'accès
                (indicateur de visibilité). Voici les niveaux d'accès existants et les symboles qui leur sont
                associés :</p>
            <ol>
                <li>- Public (+)</li>
                <li>- Privé (-)</li>
                <li>- Protégé (#)</li>
                <li>- Paquetage (~)</li>
                <li>- Dérivé (/)</li>
                <li>- Statique (souligné)</li>
            </ol>
            <p>Il existe deux portées pour les membres : les classifieurs et les instances. Les classifieurs
                sont des membres statiques alors que les instances sont des instances spécifiques de la classe.
            </p>
            <p>Selon le contexte, les classes d'un diagramme de classes peuvent représenter les principaux
                objets,
                les interactions dans l'application ou les classes à programmer. Pour répondre à la question «
                Qu'est-ce qu'un diagramme de classes UML ? », il vous faut d'abord comprendre sa structure de
                base.</p>
            <ol>
                <li><i>- Classes</i> : modèle pour créer des objets et mettre en œuvre un comportement dans un système. En
                    langage UML, une classe représente un objet ou un ensemble d'objets possédant une structure et
                    un comportement communs. On les représente par un rectangle comprenant des lignes pour le nom de
                    la classe, ses attributs et ses opérations. Lorsque vous dessinez une classe dans un diagramme
                    de classes, seule la ligne supérieure est obligatoire, les autres sont facultatives et ne
                    servent qu'à fournir des détails supplémentaires.</li>
                <li>- <i>Nom</i> : première ligne d'une forme de classe.</li>
                <li>- <i>Attributs</i> : deuxième ligne d'une forme de classe. Chaque attribut de la classe apparaît sur
                    une ligne distincte.</li>
                <li>- <i>Méthodes</i> : troisième ligne d'une forme de classe. On les appelle aussi opérations ; elles
                    apparaissent sous forme de liste, chaque opération occupant une ligne différente.</li>
                <li>- <i>Signaux</i> : symboles qui représentent les communications à sens unique et asynchrones entre des
                    objets actifs.</li>
                <li>- <i>Types de données</i> : classifieurs qui définissent des valeurs de données. Les types de données
                    peuvent modéliser les types primitifs et les énumérations.</li>
                <li>- <i>Paquetages</i> : formes conçues pour organiser les classifieurs connexes d'un diagramme. On les
                    symbolise par une grande forme rectangulaire à onglets.</li>
                <li>- <i>Interfaces</i> : groupe de signatures d'opération et/ou de définitions d'attributs définissant un
                    ensemble cohérent de comportements. Les interfaces sont semblables à des classes, sauf qu'une
                    classe peut avoir une instance de son type et qu'une interface doit compter au moins une classe
                    pour la mettre en œuvre.</li>
                <li>- <i>Énumérations</i> : représentations de types de données définis par l'utilisateur. Une énumération
                    comprend des groupes d'identificateurs qui représentent des valeurs de l'énumération.</li>
                <li>- <i>Objets</i> : instances d'une ou plusieurs classes. On peut ajouter des objets à un diagramme de
                    classes pour représenter des instances concrètes ou prototypiques.</li>
                <li>- <i>Artefacts</i> : éléments du modèle qui représentent les entités concrètes d'un système logiciel,
                    tels que des documents, des bases de données, des fichiers exécutables, des composants
                    logiciels, etc.</li>
            </ol>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="diagramme de classes UML" onClick={() => openModal(Image)} />
            </div>
            <p>Exemple détaillé d'un diagramme de classes :</p>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de diagramme de classes UML" onClick={() => openModal(Image2)} />
            </div>
            <ol>
                <li>- Shape est une classe abstraite. Il est indiqué en italique.</li>
                <li>- La forme est une super-classe. Cercle, Rectangle et Polygone sont dérivés de Forme. En d'autres termes, un cercle est une forme. Il s'agit d'une relation généralisation/héritage.</li>
                <li>- Il existe une association entre DialogBox et DataController.</li>
                <li>- La forme fait partie de Window. Il s'agit d'une relation d'agrégation. La forme peut exister sans fenêtre.</li>
                <li>- Point fait partie de Circle. Il s'agit d'une relation de composition. Point ne peut pas exister sans cercle.</li>
                <li>- La fenêtre dépend de l'événement. Cependant, Event ne dépend pas de Window.</li>
                <li>- Les attributs du cercle sont le rayon et le centre. Il s'agit d'une classe d'entités.</li>
                <li>- Les noms de méthode de Circle sont area(), circum(), setCenter() et setRadius().</li>
                <li>- Le paramètre radius dans Circle est un paramètre in de type float.</li>
                <li>- La méthode area() de la classe Circle renvoie une valeur de type double.</li>
                <li>- Les attributs et les noms de méthodes de Rectangle sont masqués. Certaines autres classes du diagramme ont également leurs attributs et leurs noms de méthode masqués.</li>
            </ol>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default ClassDiagram