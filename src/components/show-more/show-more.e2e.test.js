import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by Show More btn`, () => {
  const handleShowMoreClick = jest.fn();

  const showMoreComponent = shallow(
      <ShowMore filmsLength={8} handleShowMoreClick={handleShowMoreClick} showingFilms={5} />
  );

  const button = showMoreComponent.find(`button`);
  button.simulate(`click`);

  expect(handleShowMoreClick.mock.calls.length).toBe(1);
});
