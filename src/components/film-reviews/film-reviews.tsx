import * as React from "react";
import * as PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item.js";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";
import {getComments} from "../../reducer/data/selectors";

class FilmReviews extends React.PureComponent {
  constructor(props) {
    super(props);

    const {setComments, filmID} = props;
    setComments(filmID);
  }

  render() {
    const {comments} = this.props;

    if (comments && comments.length > 0) {
      const colDelimeterKey = comments ? Math.ceil(comments.length / 2) : 0;

      return <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.slice(0, colDelimeterKey).map((review, i) => <ReviewItem review={review} key={review.user + i}/>)}
        </div>
        <div className="movie-card__reviews-col">
          {comments.slice(colDelimeterKey).map((review, i) => <ReviewItem review={review} key={review.user + i}/>)}
        </div>
      </div>;
    }

    return null;
  }
}

FilmReviews.propTypes = {
  filmID: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })),
  setComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  setComments(filmID) {
    dispatch(Operation.loadComments(filmID));
  }
});

export {FilmReviews};
export default connect(mapStateToProps, mapDispatchToProps)(FilmReviews);
