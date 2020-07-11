import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Film from "./film";

const film = {
  id: 6,
  title: `Остров проклятых`,
  src: `/shutter-island.jpg`,
  background: `/shutter-island.jpg`,
  genre: `Mystery, Thriller`,
  year: 2010,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  overview: {
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.87,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
  }
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`USer events by Film Element`, () => {
  it(`Click by Film Title`, () => {
    const onFilmTitleClick = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={onFilmTitleClick}
      onFilmHover={() => {}}
      onFilmBlur={() => {}}
      isPlaying={false}
    />);

    const filmTitle = filmElement.find(`.small-movie-card__link`);
    filmTitle.simulate(`click`, {preventDefault() {}});

    expect(onFilmTitleClick.mock.calls.length).toBe(1);
  });

  it(`Hover by Film`, () => {
    const handleFilmHover = jest.fn((...args) => [...args]);

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={() => {}}
      onFilmHover={handleFilmHover}
      onFilmBlur={() => {}}
      isPlaying={false}
    />);

    filmElement.simulate(`mouseenter`);

    expect(handleFilmHover.mock.calls.length).toBe(1);
    expect(handleFilmHover.mock.calls[0][0]).toMatchObject(film);
  });

  it(`CLick By Film Title or Poster`, () => {
    const handleFilmClick = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={handleFilmClick}
      onFilmHover={() => {}}
      onFilmBlur={() => {}}
      isPlaying={false}
    />);

    const poster = filmElement.find(`.small-movie-card__image`);
    const title = filmElement.find(`.small-movie-card__link`);

    poster.simulate(`click`, {preventDefault() {}});
    title.simulate(`click`, {preventDefault() {}});

    expect(handleFilmClick.mock.calls.length).toBe(2);
  });
});
