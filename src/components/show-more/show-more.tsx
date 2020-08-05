import * as React from "react";
import {ActionCreator} from "../../reducer/film/film";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {getFilms, getShowingFilms} from "../../reducer/film/selectors";

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
  filmsLength: getFilms(state).length,
  showingFilms: getShowingFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleShowMoreClick: () => dispatch(ActionCreator.handleShowMoreClick())
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
