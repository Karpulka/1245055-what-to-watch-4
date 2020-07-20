import React from "react";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {showingFilms, filmsLength, handleShowMoreClick} = props;

  if (showingFilms < filmsLength) {
    return <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
    </div>;
  }

  return null;
};

ShowMore.propTypes = {
  showingFilms: PropTypes.number.isRequired,
  filmsLength: PropTypes.number.isRequired,
  handleShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmsLength: state.films.length,
  showingFilms: state.showingFilms
});

const mapDispatchToProps = (dispatch) => ({
  handleShowMoreClick: () => dispatch(ActionCreator.handleShowMoreClick())
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
