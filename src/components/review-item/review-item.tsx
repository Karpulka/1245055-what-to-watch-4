import * as React from "react";
import {prepareReviewDate} from "../../utils";

interface Props {
  review: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  };
}

const ReviewItem: React.FunctionComponent<Props> = (props: Props) => {
  const {user, rating, comment, date} = props.review;

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user}</cite>
        <time className="review__date" dateTime="2016-12-24">{prepareReviewDate(date)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>;
};

export default ReviewItem;
