import React from 'react'
import Image from './../../../img/UML-temps-1.png'
import Image2 from './../../../img/UML-temps-2.png'
import Image3 from './../../../img/UML-temps-3.png'

const TimeDiagram = () => {
    return (
        <article className="article" id="diagramme-de-temps-UML">
            <p className="subtitle">Diagramme de Temps UML</p>
            <p>UML Diagrammes de Temps sont utilisés pour afficher le changement de state ou de la valeur d’un
                ou plusieurs éléments au fil du temps. Il peut également montrer l’interaction entre les
                événements prévus et le temps et les contraintes de durée, qui les dirigent.</p>
            <p>Un State de Ligne de Vie montre le changement du state d’un article au fil du temps. Les
                affichages d’Axe des abscisses le temps écoulé dans n’importe quelles unités est choisi, tandis
                que l’Axe des ordonnées est étiqueté d’une liste donnée du states.</p>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de temps UML" />
            </div>
            <p>Un Ligne de Vie de Valeur montre le changement de valeur d’un article au fil du temps. Les
                affichages d’Axe des abscisses le temps écoulé dans n’importe quelles unités sont choisis, le
                même quant à le State de Ligne de Vie. On montre la valeur entre la paire des lignes
                horizontales qui traversent à chaque changement de la valeur.</p>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme de temps UML" />
            </div>
            <p>State and value State et Lignes de Vie peuvent être empilés les uns sur les autres dans une
                combinaison quelconque. Ils doivent avoir le même axe-X. Les messages peuvent être transmis
                d’une Ligne de Vie à l’autre. Chaque transition du state ou de la valeur peut avoir un événement
                défini, une contrainte de temps qui indique quand un événement doit se produire, et une
                contrainte de durée qui indique combien de temps un state ou la valeur doit être en vigueur
                pour. Une fois celles-ci ont toutes été appliquées, un diagramme de temps peut ressembler le
                suivant.</p>
            <div className="img-article">
                <img src={Image3} alt="autre exemple de diagramme de temps UML" />
            </div>
        </article>

    )
}

export default TimeDiagram