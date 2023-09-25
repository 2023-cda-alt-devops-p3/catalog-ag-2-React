import React from 'react'
//Structure Diagrams
import ClassDiagram from './Diagrams&Models/structureDiagrams/ClassDiagram'
import ObjectDiagram from './Diagrams&Models/structureDiagrams/ObjectDiagram'
import ComponantDiagram from './Diagrams&Models/structureDiagrams/ComponantDiagram'
import CompositeStructureDiagram from './Diagrams&Models/structureDiagrams/CompositeStructureDiagram'
import DeploymentDiagram from './Diagrams&Models/structureDiagrams/DeploymentDiagram'
import Presentation from './Diagrams&Models/Presentation'

const Article = ({ selectedButton }) => {

  return (
    <main>

      <section className="section">
        {(() => {
          switch (selectedButton) {
            case 'class-diagram':
              return <ClassDiagram />;
            case 'object-diagram':
              return <ObjectDiagram />;
            case 'componant-diagram':
              return <ComponantDiagram />;
            case 'composite-structure-diagram':
              return <CompositeStructureDiagram />;
            case 'deployment-diagram':
              return <DeploymentDiagram />;
            case 'presentation':
              return <Presentation />;
            default:
              return null;
          }
        })()}
      </section>

    </main>

  );
}

export default Article