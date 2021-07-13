import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  state = {
    clicou:"ainda não clicou"
  }
  componentDidMout(){
    console.log('[App] - Apareceu na Tela')
  }
  handerClick(){
    this.setState({
      clicou: "clicou"
    })
  }

  render(){
    console.log("[App] - renderizou")
    return (
      <div>
        olá, {this.props.name}, você {this.state.clicou}.
        <button onClick={this.handerClick.bind(this)}></button>
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App name={"Eduardo Paiva"}/>
  </React.StrictMode>,
  document.getElementById('root')
);
