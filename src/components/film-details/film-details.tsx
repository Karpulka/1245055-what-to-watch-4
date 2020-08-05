import * as React from "react";
import {prepareFilmDuration} from "../../utils";
import {Details} from "../../types";

interface Props {
  details: Details
}

const FilmDetails: React.FunctionComponent<Props> = (props: Props) => {
  const {director, actorList, runtime, genre, year} = props.details;
  const release = prepareFilmDuration(runtime);

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">{actorList.map((actor, i) => <React.Fragment key={actor + i}>{actor}<br/></React.Fragment>)}</span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{release}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{year}</span>
      </p>
    </div>
  </div>;
};

export default FilmDetails;
