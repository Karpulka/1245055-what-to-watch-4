import * as React from "react";
import * as renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player";

interface MockComponentType {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentType) => {
  return <div>{props.children}</div>;
};

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const poster = `/poster.jpg`;

it(`Render withAudioPlayer`, () => {
  const VideoPlayerWrapper = withVideoPlayer(MockComponent);

  const tree = renderer
    .create(<VideoPlayerWrapper
      src={src}
      poster={poster}
      isStartPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
