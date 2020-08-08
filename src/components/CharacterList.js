import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  renderList() {
    console.log(this.props);
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
            <p>
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
