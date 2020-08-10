import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

class CharacterList extends React.Component {
  renderList() {
    return this.props.characters.map((character, index) => {
      return (
        <CharacterCard
          key={index}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      );
    });
  }
  render() {
    return (
      <main>
        <ul className="list">
          {this.props.characters.length === 0 ? (
            <p className="list__error">
              No hay ningun personaje que coincida con {this.props.filterText}
            </p>
          ) : (
            this.renderList()
          )}
        </ul>
      </main>
    );
  }
}

export default CharacterList;
