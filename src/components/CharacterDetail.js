import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Characterdetail.scss';
import PropTypes from 'prop-types';

class CharacterDetail extends React.Component {
  handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  render() {
    // console.log(this.props.name);
    return (
      <div className="container">
        <Link to="/">
          <div className="detailCard" onClick={this.handleModalContentClick}>
            <Link to="/">
              <span className="detailCard__back"> Volver </span>
            </Link>
            <div className="detailCard__img">
              <img
                src={this.props.image}
                alt={`Imagen de ${this.props.name}`}
              />
            </div>
            <div className="detailCard__text">
              <h2>{this.props.name}</h2>
              <ul className="detailsList">
                <li>
                  Status: <span className="listData">{this.props.status}</span>
                </li>
                <li>
                  Species:{' '}
                  <span className="listData">{this.props.species}</span>
                </li>
                <li>
                  Origin:{' '}
                  <span className="listData">{this.props.origin.name}</span>
                </li>
                <li>
                  Episodes:{' '}
                  <span className="listData">{this.props.episodes}</span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
  handleModalContentClick: PropTypes.func,
};
export default CharacterDetail;
