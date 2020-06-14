import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoFilm = {
  title: `Promo Film`,
  genre: `Comedy`,
  year: 1998
};

const films = [
  `Film Name 1`,
  `Film Name 2`,
  `Film Name 3`,
  `Film Name 4`,
  `Film Name 5`
];

const settings = {
  promoFilm,
  films
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App settings={settings}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
