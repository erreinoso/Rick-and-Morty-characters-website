import React from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  render() {
    return (
      <Link to="/">
        <div>
          <div>
            <div onClick={this.handleModalContentClick}>
              <Link to="/">
                <span> Volver </span>
              </Link>
              <section>
                <img
                  src={this.props.image}
                  alt={`Imagen de ${this.props.name}`}
                />
              </section>
              <section>
                <h2>{this.props.name}</h2>
                <ul>
                  <li>Status: {this.props.status}</li>
                  <li>Species: {this.props.species}</li>
                  <li>Origin: {this.props.origin}</li>
                  <li>Episodes: {this.props.episodes}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CharacterDetail;
