import React from 'react';
import '../stylesheets/CharacterCard.scss';

class CharacterCard extends React.Component {
  render() {
    return (
      <li className="serieCard">
        <img src={this.props.image} alt={`Imagen de ${this.props.name}`} />
        <h2>{this.props.name}</h2>
        <h3>{this.props.species}</h3>
      </li>
    );
  }
}

export default CharacterCard;
