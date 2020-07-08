import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-palyer.jsx";

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={`1234`}
      poster={`pwd/poster.png`}
      isPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
