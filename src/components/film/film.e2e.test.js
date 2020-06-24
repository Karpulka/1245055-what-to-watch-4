import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Film from "./film";

const film = {
  title: `Film Title`,
  src: `111`
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`USer events by Film Element`, () => {
  it(`Click by Film Title`, () => {
    const onFilmTitleClick = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={onFilmTitleClick}
      onFilmHover={() => {}}
    />);

    const filmTitle = filmElement.find(`.small-movie-card__link`);
    filmTitle.simulate(`click`, {preventDefault() {}});

    expect(onFilmTitleClick.mock.calls.length).toBe(1);
  });

  it(`Hover by Film`, () => {
    const handleFilmHover = jest.fn((...args) => [...args]);

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={() => {}}
      onFilmHover={handleFilmHover}
    />);

    filmElement.simulate(`mouseenter`);

    expect(handleFilmHover.mock.calls.length).toBe(1);
    expect(handleFilmHover.mock.calls[0][0]).toMatchObject(film);
  });

  it(`CLick By Film Title or Poster`, () => {
    const handleFilmClick = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={handleFilmClick}
      onFilmHover={() => {}}
    />);

    const poster = filmElement.find(`.small-movie-card__image`);
    const title = filmElement.find(`.small-movie-card__link`);

    poster.simulate(`click`, {preventDefault() {}});
    title.simulate(`click`, {preventDefault() {}});

    expect(handleFilmClick.mock.calls.length).toBe(2);
  });
});
