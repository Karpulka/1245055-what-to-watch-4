import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Filter} from "./filter";
import {StaticRouter} from "react-router-dom";
import {noop} from "../../utils";

configure({
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
  link.simulate(`click`, {preventDefault: noop, currentTarget: {textContent: `Drama`}});

  expect(handleGenreChange.mock.calls.length).toBe(1);
});
