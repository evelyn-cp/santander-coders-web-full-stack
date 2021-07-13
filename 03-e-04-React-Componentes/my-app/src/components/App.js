//Componente Simples

import React from "react";

class App extends React.Component {
  render(){
    return (
      <div>
        <p>
          Meu primeiro parágrafo
        </p>
        <p>
          Meu segundo parágrafo
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    ); 
  }
}

export default App;
