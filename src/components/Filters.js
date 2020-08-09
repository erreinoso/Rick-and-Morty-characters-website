import React from 'react';
import LogoTitle from '../images/RickandMorty.png';
import LogoSearch from '../images/RickAndMorty33.jpg';
import '../stylesheets/Filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterName = this.handleFilterName.bind(this);
  }
  handleFilterName(ev) {
    this.props.changeFilterText(ev.currentTarget.value);
  }
  handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  render() {
    return (
      <header className="header">
        <section className="header__box">
          <div className="header__img">
            <img
              src={LogoSearch}
              className="header__img"
              alt="Imagen Rick y Morty hablando"
            />
          </div>
          <div className="header__input">
            <form onSubmit={this.handleModalContentClick}>
              <input
                type="text"
                placeholder="Nombre del personaje..."
                id="filterName"
                value={this.props.filterText}
                onChange={this.handleFilterName}
              />
            </form>
          </div>
          <div className="header__box--title">
            <div className="header__logo">
              <img
                src={LogoTitle}
                className="header__logo"
                alt="Imagen Rick y Morty"
              />
            </div>
            <div className="header__title">
              <h1>Busca tus personajes de Rick y Morty</h1>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Filters;
