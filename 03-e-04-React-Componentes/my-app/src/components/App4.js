//Renderização Condicional

import React from "react";

class App4 extends React.Component {
    constructor(props){
        super(props);
        this.state ={nome: undefined, txtNome: ''};

    }

    changetxtName = (event) => {
        this.setState({txtNome: event.target.value})
    }

    persistName = () => {
        this.setState({nome: this.state.txtNome});
    }

    render(){

        const renderForm = () => {
          return (
              <div>
                 Nome: <input type="text" value={this.state.nome} onChange={this.changetxtName}></input>
                <button onClick={this.persistName}>Salvar</button>
              </div>
          );
        };
    

        const renderTxt = () => {
            return (
            <div>
               
              <p>
                  Olá {this.state.nome}
              </p>
            </div>
        );
      }
    

      return !this.state.nome ? renderForm() : renderTxt();
      
    
  }
}

export default App4;