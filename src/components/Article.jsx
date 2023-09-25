import React from 'react'
import DiagrammeClass from './Diagrams&Models/DiagrammeClass'
import DiagrammeObject from './Diagrams&Models/DiagrammeObject'
import Presentation from './Diagrams&Models/Presentation'

const Article = ({ selectedButton }) => {

  return (
    <main>

      <section className="section">
        {(() => {
          switch (selectedButton) {
            case 'class-diagram':
              return <DiagrammeClass />;
            case 'object':
              return <DiagrammeObject />;
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