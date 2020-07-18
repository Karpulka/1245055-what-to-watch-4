import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configeStore from "redux-mock-store";

const mockStore = configeStore([]);

const promoFilm = {
  title: `Promo Film Name`,
  genre: `Western`,
  year: 2020
};

it(`Render Main`, () => {
  const store = mockStore({
    filters: [`All genres`, `Drama`],
    genre: `All genres`
  });

  const tree = renderer
    .create(<Provider store={store}>
      <Main
        promoFilmGenre={promoFilm.genre}
        promoFilmTitle={promoFilm.title}
        promoFilmYear={promoFilm.year}
        onFilmClick={() => {}}/>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
