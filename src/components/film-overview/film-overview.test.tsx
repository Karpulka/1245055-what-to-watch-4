import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmOverview from "./film-overview";
import {Overview} from "../../types";

const overview: Overview = {
  description: `This is Description. TCHK.`,
  rating: 8.5,
  voiceCount: 214,
  director: `And he's Director`,
  actorList: [`Actor`, `Actor`, `Actor`]
};

it(`Render FilmOverview`, () => {
  const tree = renderer
    .create(<FilmOverview overview={overview} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
