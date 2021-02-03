import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Film from "./film";
import {Film as FilmType} from "../../types";
import {noop} from "../../utils";

const film: FilmType = {
  id: 6,
  title: `Остров проклятых`,
  src: `/shutter-island.jpg`,
  background: `/shutter-island.jpg`,
  preview: `/shutter-island.jpg`,
  genre: `Mystery, Thriller`,
  year: 2010,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
  rating: 8.87,
  isFavorite: true,
  voiceCount: 240,
  director: `Wes Andreson`,
  runtime: 115,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
};

configure({
  adapter: new Adapter()
});

describe(`User events by Film Element`, () => {
  it(`Click by Film Poster`, () => {
    const handleFilmClick = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={handleFilmClick}
      onFilmHover={noop}
      onFilmBlur={noop}
      isStartPlaying={false}
    />);

    const filmTitle = filmElement.find(`.small-movie-card__image`);
    filmTitle.simulate(`click`, {preventDefault: noop});

    expect(handleFilmClick.mock.calls.length).toBe(1);
    expect(handleFilmClick.mock.calls[0][0]).toBe(film.id);
  });

  it(`Hover by Film`, () => {
    const handleFilmHover = jest.fn((...args) => [...args]);

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={noop}
      onFilmHover={handleFilmHover}
      onFilmBlur={noop}
      isStartPlaying={false}
    />);

    filmElement.simulate(`mouseenter`);

    expect(handleFilmHover.mock.calls.length).toBe(1);
    expect(handleFilmHover.mock.calls[0][0]).toMatchObject(film);
  });

  it(`OnBlur by Film`, () => {
    const handleFilmBLur = jest.fn();

    const filmElement = shallow(<Film
      film={film}
      onFilmClick={noop}
      onFilmHover={noop}
      onFilmBlur={handleFilmBLur}
      isStartPlaying={false}
    />);

    filmElement.simulate(`mouseleave`);

    expect(handleFilmBLur.mock.calls.length).toBe(1);
  });
});
