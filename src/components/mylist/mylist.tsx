import * as React from "react";
import Footer from "../footer/footer";
import {PageType} from "../app/app";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import {connect} from "react-redux";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import FilmsList from "../films-list/films-list";
import withFilmsList from "../../hocs/with-films-list/with-films-list";
import {Film} from "../../types";

interface Props {
  films: Array<Film>;
  onFilmClick: () => void;
}

const FilmsListComponent = withFilmsList(FilmsList);

const MyList: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state)
});

export {MyList};
export default connect(mapStateToProps)(MyList);
