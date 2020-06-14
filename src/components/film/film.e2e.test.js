import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Film from "./film";

const film = `Film Title`;

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by Film Title`, () => {
  const onFilmTitleClick = jest.fn();

  const filmElement = shallow(<Film
    film={film}
    onFilmTitleClick={onFilmTitleClick}
  />);

  const filmTitle = filmElement.find(`.small-movie-card__link`);

  filmTitle.simulate(`click`, {preventDefault() {}});

  expect(onFilmTitleClick.mock.calls.length).toBe(1);
});
