import React from "react";
import Footer from "../footer/footer.jsx";
import {PageType} from "../app/app.jsx";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";
import {connect} from "react-redux";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import withFilmsList from "../../hocs/with-films-list/with-films-list";

const FilmsListComponent = withFilmsList(FilmsList);

const MyList = (props) => {
  const {films, onFilmClick} = props;

  return <div className="user-page">
    <HeaderWrapper pageType={PageType.AUTH} pageTitle={`My list`}/>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsListComponent films={films} onFilmClick={onFilmClick} />
    </section>

    <Footer />
  </div>;
};

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state)
});

export {MyList};
export default connect(mapStateToProps)(MyList);
