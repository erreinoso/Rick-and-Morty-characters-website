import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterList.scss';

class CharacterCard extends React.Component {
  render() {
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={`/character/${this.props.id}`}
      >
        <li className={`serieCard serieCard-${this.props.id}`}>
          <div className={`serieCard__img serieCard__img-${this.props.id}`}>
            <img src={this.props.image} alt={`Imagen de ${this.props.name}`} />
          </div>
          <div className="serieCard__text">
            <h2 className="name">{this.props.name}</h2>
            <h3 className="species">
              {this.props.species}{' '}
              {this.props.species === 'Alien' ? '👽' : '🧑'}
            </h3>
          </div>
        </li>
      </Link>
    );
  }
}
CharacterCard.propTypes = {
  species: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
