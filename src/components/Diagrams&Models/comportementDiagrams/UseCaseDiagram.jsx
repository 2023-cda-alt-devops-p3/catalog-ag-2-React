import React from 'react'
import Image from './../../../img/UML-cas-utilisation-1.png'
import Image2 from './../../../img/UML-cas-utilisation-2.png'
import Image3 from './../../../img/UML-cas-utilisation-3.png'
import Image4 from './../../../img/UML-cas-utilisation-4.png'

const UseCaseDiagram = () => {
    return (
        <article className="article" id="diagramme-de-cas-d-utilisation-UML">
            <p class="subtitle">Diagramme de cas d'utilisation UML</p>
            <p>En langage de modélisation unifié (UML), un diagramme de cas d'utilisation peut servir à résumer
                les informations des utilisateurs de votre système (également appelés acteurs) et leurs
                interactions avec ce dernier. La création de ce type de diagramme UML requiert un ensemble de
                symboles et de connecteurs spécifiques. Lorsqu'ils sont bien conçus, les diagrammes de cas
                d'utilisation peuvent aider votre équipe à collaborer et représenter :</p>
            <ol>
                <li>les scénarios dans lesquels votre système ou application interagit avec des personnes, des
                    organisations ou des systèmes externes ;</li>
                <li>les objectifs que votre système ou application permet aux entités (appelées acteurs)
                    d'atteindre ;</li>
                <li>la portée de votre système.</li>
            </ol>
            <p>Un diagramme de cas d'utilisation n'a pas vocation à entrer dans les détails. Par exemple, ne
                vous attendez pas à ce qu'il illustre l'ordre dans lequel les étapes sont exécutées. Au
                contraire, un diagramme de cas d'utilisation bien conçu donne une vue d'ensemble des
                relations entre les cas d'utilisation, les acteurs et les systèmes. Les experts recommandent
                que les diagrammes de cas d'utilisation soient utilisés pour compléter une description
                textuelle plus approfondie.</p>
            <p>Le langage UML est une boîte à outils de modélisation que vous pouvez utiliser pour
                construire vos diagrammes. Les cas d'utilisation sont représentés par une forme ovale avec
                un nom. Les bonshommes représentent les acteurs du processus, et la participation de
                l'acteur au système est modélisée par une ligne entre l'acteur et le cas d'utilisation. Pour
                illustrer les limites du système, dessinez un cadre autour du cas d'utilisation lui-même.
            </p>
            <p>Les diagrammes de cas d'utilisation UML sont parfaits pour :</p>
            <ol>
                <li>représenter les objectifs des interactions entre le système et les utilisateurs ;</li>
                <li>définir et organiser les exigences fonctionnelles dans un système ;</li>
                <li>préciser le contexte et les exigences d'un système ;</li>
                <li>modéliser le flux de base des événements dans un cas d'utilisation.</li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de cas d'utilisation UML" />
            </div>
            <p>Pour répondre à la question « Qu'est-ce qu'un diagramme de cas d'utilisation ? », vous devez
                d'abord comprendre les éléments qui le composent. Ceux-ci incluent généralement :</p>
            <ol>
                <li>Les acteurs : utilisateurs qui interagissent avec un système. Un acteur peut être une
                    personne, une organisation ou un système externe qui interagit avec votre application ou
                    votre système. Il s'agit nécessairement d'objets externes qui produisent ou consomment
                    des
                    données.</li>
                <li>Le système : séquence spécifique d'actions et d'interactions entre les acteurs et le
                    système. Un système peut également être appelé scénario.</li>
                <li>Les objectifs : résultat final de la plupart des cas d'utilisation. Un diagramme réussi
                    doit
                    décrire les activités et les variantes utilisées pour atteindre l'objectif.</li>
            </ol>
            <div className="img-article">
                <img src={Image2}
                    alt="autre exemple de diagramme de cas d'utilisation UML" />
            </div>
            <p>La notation d'un diagramme de cas d'utilisation est assez simple et n'implique pas autant de
                types de symboles que les autres diagrammes UML.</p>
            <ol>
                <li>Cas d'utilisation : formes ovales horizontales qui représentent les différentes
                    applications
                    possibles pour un utilisateur.</li>
                <li>Acteurs : bonshommes représentant les personnes qui se servent réellement des cas
                    d'utilisation.</li>
                <li>Associations : lignes reliant les acteurs aux cas d'utilisation. Dans les diagrammes
                    complexes, il est important de pouvoir identifier les acteurs associés à chaque cas
                    d'utilisation</li>
                <li>Frontières de systèmes : cadres indiquant le champ d'application des cas d'utilisation
                    présents dans un système. Tous les cas d'utilisation situés en dehors du cadre n'entrent
                    pas
                    dans le champ d'application de ce système. Par exemple, tueur psychopathe (Psycho Killer
                    en
                    anglais) est en dehors du champ d'application des professions dans l'exemple de la
                    tronçonneuse ci-dessous.</li>
                <li>Paquets : une forme UML qui vous permet de regrouper différents éléments. Tout comme
                    pour
                    les diagrammes de composants, ces groupes sont représentés sous forme de dossiers de
                    fichiers.</li>
            </ol>
            <div className="img-article">
                <img src={Image3}
                    alt="autre exemple de diagramme de cas d'utilisation UML" />
            </div>
            <div className="img-article">
                <img src={Image4}
                    alt="autre exemple de diagramme de cas d'utilisation UML" />
            </div>
        </article>
    )
}

export default UseCaseDiagram