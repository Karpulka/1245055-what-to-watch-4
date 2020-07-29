import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmDetail from "./film-detail";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 0,
  title: `Большой куш`,
  src: `/snatch.jpg`,
  background: `/snatch.jpg`,
  genre: `Comedy, Crime`,
  year: 2000,
  description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
  rating: 9.1,
  voiceCount: 240,
  director: `Wes Andreson`,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runtime: 99,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Click Play button on Film Detail Page`, () => {
  const handlePlayButtonClick = jest.fn();
  const filmDetail = shallow(<FilmDetail
    film={film}
    likeFilms={[film]}
    onFilmClick={() => {}}
    onPlayButtonClick={handlePlayButtonClick}/>);

  const playButton = filmDetail.find(`.btn--play.movie-card__button`);
  playButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
