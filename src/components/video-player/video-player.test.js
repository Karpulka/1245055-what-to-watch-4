import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-palyer.jsx";

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(<VideoPlayer><video/></VideoPlayer>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
