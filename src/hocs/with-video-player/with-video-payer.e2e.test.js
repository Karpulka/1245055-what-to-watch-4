import * as React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlayer from "./with-video-player";
import * as PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter()
});

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const poster = `/poster.jpg`;

const MockComponent = (props) => {
  const {onPlayButtonClick, children} = props;
  return <div>
    <button onClick={onPlayButtonClick} />
    {children}
  </div>;
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired,
  onPlayButtonClick: () => void
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`Test pause video`, () => {
  window.HTMLMediaElement.prototype.pause = () => {};

  const video = mount(
      <MockComponentWrapped
        src={src}
        poster={poster}
        isStartPlaying={true}
      />
  );

  const {videoRef} = video.instance();
  jest.spyOn(videoRef.current, `pause`);

  video.instance().componentDidMount();

  expect(video.state().isPlaying).toEqual(true);
  video.find(`button`).simulate(`click`);

  expect(videoRef.current.pause).toHaveBeenCalledTimes(1);
  expect(video.state().isPlaying).toEqual(false);
});

it(`Test play video`, () => {
  window.HTMLMediaElement.prototype.play = () => {};

  const video = mount(
      <MockComponentWrapped
        src={src}
        poster={poster}
        isStartPlaying={false}
      />
  );

  const {videoRef} = video.instance();
  jest.spyOn(videoRef.current, `play`);

  video.instance().componentDidMount();

  expect(video.state().isPlaying).toEqual(false);
  video.find(`button`).simulate(`click`);

  expect(videoRef.current.play).toHaveBeenCalledTimes(1);
  expect(video.state().isPlaying).toEqual(true);
});
