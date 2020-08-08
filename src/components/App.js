import React from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      characterData: [],
      isChecked: false,
      filterText: '',
    };
    this.changeFilterText = this.changeFilterText.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }
  componentDidMount() {
    // get data from api
    getDataFromApi().then((data) => {
      this.setState({
        //guardamos los datos de la API en el estado
        //para hacerlo con funcional sería con useState y los hoock
        loading: true,
        characterData: data,
      });
    });
  }

  changeFilterText(text) {
    this.setState({
      filterText: text,
    });

    console.log('filtertext', text);
  }

  renderCharacterDetail(props) {
    console.log(props);
    const routeCharacterId = parseInt(props.match.params.characterId);
    const characterClicked = this.state.characterData.find((character) => {
      return character.id === routeCharacterId;
    });
    console.log(characterClicked);
    if (characterClicked) {
      return (
        <CharacterDetail
          name={characterClicked.name}
          status={characterClicked.status}
          species={characterClicked.species}
          origin={characterClicked.origin}
          episodes={characterClicked.episode.length}
          image={characterClicked.image}
        />
      );
    } else {
      return <p>Personaje no encontrado</p>;
    }
  }

  render() {
    let filteredCharacter = this.state.characterData.filter((character) => {
      if (this.state.filterText !== '') {
        return character.name
          .toUpperCase()
          .includes(this.state.filterText.toUpperCase());
      } else {
        return true;
      }
    });

    return (
      <div>
        <Route exact path="/">
          <Filters
            filterText={this.state.filterText}
            changeFilterText={this.changeFilterText}
            data={this.state.characterData}
          />
          <CharacterList
            characters={filteredCharacter}
            filterText={this.state.filterText}
            sort={this.sortNames}
          />
        </Route>
        <Switch>
          <Route
            exact
            path="/character/:characterId"
            render={this.renderCharacterDetail}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
