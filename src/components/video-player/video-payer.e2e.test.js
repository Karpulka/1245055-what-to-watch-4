import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-palyer.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const poster = `/poster.jpg`;

it(`Test pause video`, () => {
  window.HTMLMediaElement.prototype.play = () => {};
  const video = mount(
      <VideoPlayer
        src={src}
        poster={poster}
        isPlaying={true}
      />
  );

  const videoInstance = video.instance();
  expect(videoInstance.state.isPlaying).toBe(true);

  videoInstance.setState({isPlaying: false});
  expect(videoInstance.state.isPlaying).toBe(false);
});
