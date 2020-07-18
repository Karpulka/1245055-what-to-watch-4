import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Filter} from "./filter";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by link`, () => {
  const handleGenreChange = jest.fn();
  const getFilmByGenre = jest.fn();

  const filterComponent = shallow(
      <Filter
        genre={`All genres`}
        filters={[`All genres`, `Drama`, `Comedy`]}
        getFilmByGenre={getFilmByGenre}
        handleGenreChange={handleGenreChange}
      />
  );

  const link = filterComponent.find(`a.catalog__genres-link`).at(1);
  link.simulate(`click`, {preventDefault() {}, currentTarget: {textContent: `Drama`}});

  expect(handleGenreChange.mock.calls.length).toBe(1);
  expect(getFilmByGenre.mock.calls.length).toBe(1);
});
