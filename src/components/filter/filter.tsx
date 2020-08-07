import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/film/film";
import {getGenre} from "../../reducer/film/selectors";
import {getFilters} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";

interface Props {
  filters: Array<string>;
  genre: string;
  handleGenreChange: (text: string) => void;
}

const Filter: React.FunctionComponent<Props> = (props: Props) => {
  const {filters, genre, handleGenreChange} = props;

  return <ul className="catalog__genres-list">
    {filters.map((filter, i) => {
      const itemClass = filter === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
      return <li key={`filter-${i}`} className={itemClass}>
        <Link to="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          handleGenreChange(evt.currentTarget.textContent);
        }}>{filter}</Link>
      </li>;
    })}
  </ul>;
};

const mapStateToProps = (state) => ({
  filters: getFilters(state),
  genre: getGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
