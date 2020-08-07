import React from 'react';

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
        <form>
          <div>
            <input
              type="text"
              placeholder="Nombre del personaje..."
              id="filterName"
              value={this.props.filterText}
              onChange={this.handleFilterName}
              onKeyUp={this.handleModalContentClick}
            />
          </div>
          <div>
            <img
              src="../images/RickAndMorty33.jpg"
              className="header__img"
              alt="Imagen Rick y Morty"
            />
            <h1>Personajes de</h1>
          </div>
        </form>
      </header>
    );
  }
}

export default Filters;
