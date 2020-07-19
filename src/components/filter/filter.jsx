import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";

const Filter = (props) => {
  const {filters, genre, handleGenreChange, getFilmByGenre} = props;

  return <ul className="catalog__genres-list">
    {filters.map((filter, i) => {
      const itemClass = filter === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
      return <li key={`filter-${i}`} className={itemClass}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          handleGenreChange(evt.currentTarget.textContent);
          getFilmByGenre(evt.currentTarget.textContent);
        }}>{filter}</a>
      </li>;
    })}
  </ul>;
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
  getFilmByGenre: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },

  getFilmByGenre: (genre) => {
    dispatch(ActionCreator.getFilmByGenre(genre));
  }
});

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
