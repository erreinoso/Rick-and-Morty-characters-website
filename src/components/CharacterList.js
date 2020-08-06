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
      <section>
        <ul>{this.renderList()}</ul>
      </section>
    );
  }
}

export default CharacterList;
