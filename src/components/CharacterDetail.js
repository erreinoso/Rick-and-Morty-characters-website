import React from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  render() {
    // console.log(this.props.name);
    return (
      <div>
        <Link to="/">
          <div>
            <div onClick={this.handleModalContentClick}>
              <Link to="/">
                <span> Volver </span>
              </Link>
              <div>
                <img
                  src={this.props.image}
                  alt={`Imagen de ${this.props.name}`}
                />
              </div>
              <div>
                <h2>{this.props.name}</h2>
                <ul>
                  <li>Status: {this.props.status}</li>
                  <li>Species: {this.props.species}</li>
                  <li>Origin: {this.props.origin.name}</li>
                  <li>Episodes: {this.props.episodes}</li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
