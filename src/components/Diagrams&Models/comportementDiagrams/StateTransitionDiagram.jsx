import React from 'react'
import Image from './../../../img/UML-etats-transitions-1.png'
import Image2 from './../../../img/UML-etats-transitions-2.png'
import Image3 from './../../../img/UML-etats-transitions-3.png'

const StateTransitionDiagram = () => {
  return (
    <article className="article" id="diagramme-etats-transitions-UML">
                    <p className="subtitle">Diagramme d'états-transitions UML</p>
                    <p>Un diagramme d'états-transitions est un type de diagramme comportemental en langage de
                        modélisation unifié (UML) qui représente les transitions entre divers objets.</p>
                    <p>Un automate désigne tout appareil qui enregistre l'état d’un objet à un moment donné et peut
                        changer l'état ou provoquer d'autres actions selon les informations qu’il reçoit. Les états
                        correspondent aux différentes combinaisons d'informations qu'un objet peut contenir et non la
                        façon dont celui-ci se comporte. Pour comprendre les différents états d’un objet, vous pouvez
                        visualiser tous les états possibles et montrer comment un objet parvient à chaque état à l'aide
                        d'un diagramme d'état transition UML.</p>
                    <p>Un diagramme d'état transition commence généralement par un rond noir qui indique l'état initial
                        et se termine par un rond cerclé indiquant l'état final. Toutefois, bien qu'ils aient des points
                        de départ et des extrémités bien définis, les diagrammes d'états-transitions ne sont pas
                        forcément le meilleur outil pour représenter la progression d'une série d'événements. Ils sont
                        plutôt indiqués pour illustrer des types de comportements spécifiques, notamment les changements
                        d'état.</p>
                    <p>Les diagrammes d'états-transitions représentent principalement des états et des transitions
                        (comme sont noms l'indique). Les états sont représentés par des rectangles aux coins arrondis
                        qui portent le nom de "l'état concerné". Les transitions sont indiquées par des flèches qui vont
                        d'un état à un autre, en montrant l'évolution des états.</p>
                    <p>Comme la plupart des diagrammes UML, les diagrammes d'états-transitions ont plusieurs usages.
                        Leurs principales applications sont les suivantes :</p>
                    <ol>
                        <li>Représenter des objets liés à un événement dans un système réactif
                        </li>
                        <li>Illustrer des cas d'utilisation dans un contexte d'entreprise</li>
                        <li>Décrire comment un objet change d'état au cours de son existence</li>
                        <li>Montrer le comportement global d'un automate ou le comportement d'un ensemble connexe
                            d'automates.</li>
                    </ol>
                    <div className="img-article">
                        <img src={Image} alt="exemple de diagramme d'états-transitions UML" />
                    </div>
                    <div className="img-article">
                        <img src={Image2}
                            alt="autre exemple de diagramme d'états-transitions UML" />
                    </div>
                    <div className="img-article">
                        <img src={Image3}
                            alt="autre exemple de diagramme d'états-transitions UML" />
                    </div>
                </article>
  )
}

export default StateTransitionDiagram