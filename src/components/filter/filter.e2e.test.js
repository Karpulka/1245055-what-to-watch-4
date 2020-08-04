import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Filter} from "./filter";
import {StaticRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by link`, () => {
  const handleGenreChange = jest.fn();

  const filterComponent = mount(
      <StaticRouter>
        <Filter
          genre={`All genres`}
          filters={[`All genres`, `Drama`, `Comedy`]}
          handleGenreChange={handleGenreChange}
        />
      </StaticRouter>
  );

  const link = filterComponent.find(`.catalog__genres-link`).at(1);
  link.simulate(`click`, {preventDefault() {}, currentTarget: {textContent: `Drama`}});

  expect(handleGenreChange.mock.calls.length).toBe(1);
});
