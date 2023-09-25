import React from 'react'
import Image from './../../../img/UML-Classes.png'

const ClassDiagram = () => {
    return (
        <article className="article" id="diagramme-de-classes-UML">
            <p className="subtitle">Diagramme de classes UML</p>
            <p>Les diagrammes de classes sont l'un des types de diagrammes UML les plus utiles, car ils
                décrivent clairement la structure d'un système particulier en modélisant ses classes, ses
                attributs, ses opérations et les relations entre ses objets.</p>
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
                <li>Public (+)</li>
                <li>Privé (-)</li>
                <li>Protégé (#)</li>
                <li>Paquetage (~)</li>
                <li>Dérivé (/)</li>
                <li>Statique (souligné)</li>
            </ol>
            <p>Il existe deux portées pour les membres : les classifieurs et les instances. Les classifieurs
                sont des membres statiques alors que les instances sont des instances spécifiques de la classe.
            </p>
            <p>Selon le contexte, les classes d'un diagramme de classes peuvent représenter les principaux
                objets,
                les interactions dans l'application ou les classes à programmer. Pour répondre à la question «
                Qu'est-ce qu'un diagramme de classes UML ? », il vous faut d'abord comprendre sa structure de
                base.</p>

            <li>Classes : modèle pour créer des objets et mettre en œuvre un comportement dans un système. En
                langage UML, une classe représente un objet ou un ensemble d'objets possédant une structure et
                un comportement communs. On les représente par un rectangle comprenant des lignes pour le nom de
                la classe, ses attributs et ses opérations. Lorsque vous dessinez une classe dans un diagramme
                de classes, seule la ligne supérieure est obligatoire, les autres sont facultatives et ne
                servent qu'à fournir des détails supplémentaires.</li>
            <ol>
                <li>Nom : première ligne d'une forme de classe.</li>
                <li>Attributs : deuxième ligne d'une forme de classe. Chaque attribut de la classe apparaît sur
                    une ligne distincte.</li>
                <li>Méthodes : troisième ligne d'une forme de classe. On les appelle aussi opérations ; elles
                    apparaissent sous forme de liste, chaque opération occupant une ligne différente.</li>
            </ol>
            <li>Signaux : symboles qui représentent les communications à sens unique et asynchrones entre des
                objets actifs.</li>
            <li>Types de données : classifieurs qui définissent des valeurs de données. Les types de données
                peuvent modéliser les types primitifs et les énumérations.</li>
            <li>Paquetages : formes conçues pour organiser les classifieurs connexes d'un diagramme. On les
                symbolise par une grande forme rectangulaire à onglets.</li>
            <li>Interfaces : groupe de signatures d'opération et/ou de définitions d'attributs définissant un
                ensemble cohérent de comportements. Les interfaces sont semblables à des classes, sauf qu'une
                classe peut avoir une instance de son type et qu'une interface doit compter au moins une classe
                pour la mettre en œuvre.</li>
            <li>Énumérations : représentations de types de données définis par l'utilisateur. Une énumération
                comprend des groupes d'identificateurs qui représentent des valeurs de l'énumération.</li>
            <li>Objets : instances d'une ou plusieurs classes. On peut ajouter des objets à un diagramme de
                classes pour représenter des instances concrètes ou prototypiques.</li>
            <li>Artefacts : éléments du modèle qui représentent les entités concrètes d'un système logiciel,
                tels que des documents, des bases de données, des fichiers exécutables, des composants
                logiciels, etc.</li>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de classes UML" />
            </div>
        </article>
    )
}

export default ClassDiagram