import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoFilm = {
  title: `Promo Film Name`,
  genre: `Western`,
  year: 2020
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      promoFilmGenre={promoFilm.genre}
      promoFilmTitle={promoFilm.title}
      promoFilmYear={promoFilm.year}
      onFilmClick={() => {}}
      onFilmHover={() => {}}
      onFilmBlur={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
