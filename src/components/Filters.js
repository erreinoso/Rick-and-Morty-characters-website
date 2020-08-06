import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterName = this.handleFilterName.bind(this);
  }
  handleFilterName(ev) {
    this.props.changeFilterText(ev.currentTarget.value);
  }

  render() {
    return (
      <section>
        <form className="border--medium m-0 mb-1 mt-1 col2">
          <div>
            <input
              type="text"
              placeholder="Nombre del personaje..."
              // className="form__input-text"
              id="filterName"
              // value={props.filterName}
              onChange={this.handleFilterName}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default Filters;
