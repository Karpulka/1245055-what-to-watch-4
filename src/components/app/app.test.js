import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoFilm = {
  title: `Promo Film`,
  genre: `Comedy`,
  year: 1998
};

const films = [
  {
    title: `Film Name 1`,
    src: `111`
  },
  {
    title: `Film Name 2`,
    src: `222`
  },
  {
    title: `Film Name 3`,
    src: `333`
  },
  {
    title: `Film Name 4`,
    src: `444`
  },
  {
    title: `Film Name 5`,
    src: `555`
  }
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
