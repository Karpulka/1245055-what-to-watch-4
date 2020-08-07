import * as React from "react";
import Film from "../film/film";
import {connect} from "react-redux";
import {getShowingFilms} from "../../reducer/film/selectors";
import {Film as FilmType} from "../../types";

interface Props {
  films: Array<FilmType>;
  onFilmClick: () => void;
  onFilmHover: () => void;
  onFilmBlur: () => void;
  activeFilmID?: number;
  showingFilms: number;
}

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
  const {films, onFilmClick, onFilmHover, onFilmBlur, activeFilmID, showingFilms} = props;

  return <div className="catalog__movies-list">
    {films.slice(0, showingFilms).map((film, id) => <Film
      key={film.title + id}
      film={film}
      onFilmHover={onFilmHover}
      onFilmClick={onFilmClick}
      onFilmBlur={onFilmBlur}
      isStartPlaying={activeFilmID === film.id}
    />)}
  </div>;
};

const mapPropsToState = (state) => ({
  showingFilms: getShowingFilms(state)
});

export {FilmsList};
export default connect(mapPropsToState)(FilmsList);
