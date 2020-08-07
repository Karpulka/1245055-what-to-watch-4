import * as React from "react";
import {Overview, RatingDescriptionType} from "../../types";

const RatingDescription: Array<RatingDescriptionType> = [
  {
    min: 0,
    max: 3,
    title: `Bad`
  },
  {
    min: 3,
    max: 5,
    title: `Normal`
  },
  {
    min: 5,
    max: 8,
    title: `Good`
  },
  {
    min: 8,
    max: 10,
    title: `Very good`
  },
  {
    min: 10,
    title: `Awesome`
  }
];

const getRatingDescription = (rating) => {
  return RatingDescription.find((item) => rating >= item.min && (!item.max || rating < item.max)).title;
};

interface Props {
  overview: Overview
}

const FilmOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {rating, voiceCount, description, director, actorList} = props.overview;
  const roundRating = Math.floor(rating * 10) / 10;
  const actors = actorList.join(`, `);

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{roundRating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingDescription(roundRating)}</span>
        <span className="movie-rating__count">{voiceCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {description}
      {director ? <p className="movie-card__director"><strong>Director: {director}</strong></p> : ``}
      {actorList ? <p className="movie-card__starring"><strong>Starring: {actors} and other</strong></p> : ``}
    </div>
  </React.Fragment>;
};

export default FilmOverview;
