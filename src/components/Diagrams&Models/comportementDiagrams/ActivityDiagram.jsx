import React from 'react'
import Image from './../../../img/UML-activite-1.png'
import Image2 from './../../../img/UML-activite-2.png'

const ActivityDiagram = () => {
    return (
        <article className="article" id="diagramme-activite-UML">
            <p className="subtitle">Diagramme d'activité UML</p>
            <p>Le langage UML est extrêmement utile pour visualiser et documenter des systèmes logiciels, mais
                la terminologie est parfois un peu déroutante pour quelqu'un qui ne connaît pas bien ce langage.
                Fondamentalement, un diagramme d’activités est un organigramme illustrant les activités
                exécutées par un système.</p>
            <p>Les diagrammes d'activités présentent plusieurs avantages pour les utilisateurs. Songez à créer
                un diagramme d’activités pour :</p>
            <ol>
                <li>Démontrer la logique d'un algorithme</li>
                <li>Décrire les étapes effectuées dans un cas d'utilisation d'UML</li>
                <li>Illustrer un processus métier ou un flux de travail entre les utilisateurs et le système
                </li>
                <li>Simplifier et améliorer n'importe quel processus en clarifiant les cas d'utilisation
                    complexes</li>
                <li>Modéliser des éléments de l'architecture de logiciels, tels que la méthode, la fonction et
                    l'utilisation</li>
            </ol>
            <p>Avant de commencer à créer un diagramme d'activités, vous devez d'abord comprendre de quoi il est
                constitué. Voici quelques-uns des composants les plus courants d'un diagramme d'activités :</p>
            <ol>
                <li>Action : étape dans l'activité où les utilisateurs ou le logiciel exécutent une tâche
                    donnée. Dans Lucidchart, les actions sont symbolisées par des rectangles aux bords arrondis.
                </li>
                <li>Nœud de décision : embranchement conditionnel dans le flux, qui est représenté par un
                    losange. Il comporte une seule entrée et au moins deux sorties.</li>
                <li>Flux de contrôle : autre nom donné aux connecteurs qui illustrent le flux entre les étapes
                    du diagramme.</li>
                <li>Nœud de départ : élément symbolisant le début de l'activité, que l'on représente par un
                    cercle noir.</li>
                <li>Nœud de fin : élément symbolisant l'étape finale de l'activité, que l'on représente par un
                    cercle noir avec un contour.</li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme d'activité UML" />
            </div>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme d'activité UML" />
            </div>
        </article>
    )
}

export default ActivityDiagram