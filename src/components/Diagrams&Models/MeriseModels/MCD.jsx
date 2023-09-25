import React from 'react'
import Image from './../../../img/MERISE_MCD-1.png'

const MCD = () => {
    return (
        <article className="article" id="modele-conceptuel-des-donnees-MERISE">
            <p className="subtitle">Modèle Conceptuel des Données MERISE</p>
            <p>Le MCD permet de représenter le système d'information indépendamment de son aspect informatique,
                il doit être compréhensible par tous: informaticiens, employés, secrétaires, personnel de
                direction, etc.</p>
            <p>Pour ce faire la méthode Merise utilise 2 représentations:</p>
            <ol>
                <li>l'entité: elle regroupe l'information statique et durable.
                    Par exemple, l'entité employe rassemble toutes les informations communes aux employés d'une
                    entreprise. Une entité est représentée par un nom commun écrit en majuscules et au
                    singulier. Exemples: EMPLOYE, DIPLOME, COMMUNE, FOURNISSEUR, etc.</li>
                <li>l'association: elle matérialise la dynamique du système et donc les relations entre les
                    entités. Par exemple, l'entité employe est en relation avec l'entité service de
                    l'entreprise. L'association (ou relation) est représentée par un verbe d'action ou d'éta à
                    l'infinitif. Exemples: HABITER, LOUER, JOUER, CARACTERISER, etc.</li>
            </ol>
            <p>Une entité regroupe des informations de même nature, ces informations sont représentées par les
                attributs de l'entité.</p>
            <p>Une association (ou une relation) est un lien entre plusieurs entités.</p>
            <p>L'association représente la dynamique du système, elle exprime l'activité du système
                d'information, elle est caractérisée par les cardinalités.</p>
            <p>La cardinalité d'une patte reliant une association et une entité précise le nombre de fois
                minimal et maximal d'interventions d'une occurence de l'entité avec l'association. La
                cardinalité minimale doit être inférieure ou égale à la cardinalité maximale.</p>
            <p>Les seuls cardinalités admises sont donc :</p>
            <ol>
                <li>1-1: une occurrence de l'entité participe minimum et maximum 1 fois à l'association</li>
                <li>0-1: une occurrence de l'entité peut exister sans pour autant participer à la relation et ne
                    participe jamais plus d'une fois</li>
                <li>1-n: une occurrence de l'entité participe au moins une fois à l'association et peut
                    participer sans limitation</li>
                <li>0-n: une occurrence de l'entité peut exister sans pour autant participer à la relation et
                    peut participer sans limitation</li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de MCD" />
            </div>
        </article>
    )
}

export default MCD