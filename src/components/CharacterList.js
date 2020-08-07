import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

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
      <section>
        <ul>
          {this.props.characters.length === 0 ? (
            <p>Personaje no encontrado</p>
          ) : (
            this.renderList()
          )}
          {/* {this.renderList()}
          <p>Personaje no encontrado</p> */}
        </ul>
      </section>
    );
  }
}

export default CharacterList;
