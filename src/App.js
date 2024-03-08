import React, {Component} from 'react';
import api from './api';

class App extends Component{

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('lauren');
    this.setState({ filmes: response.data});
  }
  render(){
    const {filmes} = this.state;
    return(
      <div>
        <h1>Listar</h1>
        <p>
          
          {filmes.map(filmes => (
            <li key={filmes.person.id}>
              <p>Nome: {filmes.person.name}</p>
              <p>Url: {filmes.person.url}</p>
            </li>
          ))}
        </p>
      </div>
    );
  };
};

export default App;
