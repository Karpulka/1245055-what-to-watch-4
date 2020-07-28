import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmDetail from "./film-detail";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click Play button on Film Detail Page`, () => {
  const handlePlayButtonClick = jest.fn();
  const filmDetail = shallow(<FilmDetail
    id={0}
    title={`Test title`}
    src={`src`}
    background={`bg`}
    genre={`genre`}
    year={2013}
    description={`test test test`}
    rating={5.2}
    voiceCount={222}
    director={`Director`}
    actorList={[`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]}
    runtime={115}
    onFilmClick={() => {}}
    onPlayButtonClick={handlePlayButtonClick}/>);

  const playButton = filmDetail.find(`.btn--play.movie-card__button`);
  playButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
