import * as React from "react";
import {ActionCreator} from "../../reducer/film/film";
import {connect} from "react-redux";
import {getFilms, getShowingFilms} from "../../reducer/film/selectors";

interface Props {
  showingFilms: number,
  filmsLength: number,
  handleShowMoreClick: () => void
}

const ShowMore: React.FunctionComponent<Props> = (props: Props) => {
  const {showingFilms, filmsLength, handleShowMoreClick} = props;

  if (showingFilms < filmsLength) {
    return <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
    </div>;
  }

  return null;
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
