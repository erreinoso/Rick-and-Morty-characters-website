import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  render() {
    return (
      <Link to={`/character/${this.props.id}`}>
        <li className="serieCard">
          <img src={this.props.image} alt={`Imagen de ${this.props.name}`} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.species}</h3>
        </li>
      </Link>
    );
  }
}

export default CharacterCard;
