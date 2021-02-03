import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";
import {Film} from "../../types";
import {noop} from "../../utils";

configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

const promoFilm: Film = {
  id: 5,
  title: `Revenant`,
  src: `/revenant.jpg`,
  background: `/revenant.jpg`,
  preview: `/revenant.jpg`,
  genre: `Action, Adventure`,
  year: 2015,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
  rating: 3.1,
  voiceCount: 240,
  director: `Wes Andreson`,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  isFavorite: false,
  runtime: 145
};

const films: Array<Film> = [
  {
    id: 3,
    title: `Большой куш`,
    src: `/snatch.jpg`,
    preview: `/snatch.jpg`,
    background: `/snatch.jpg`,
    genre: `Comedy, Crime`,
    year: 2000,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 9.1,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    isFavorite: false,
    runtime: 136
  },
  {
    id: 4,
    title: `Война миров`,
    src: `/war-of-the-worlds.jpg`,
    background: `/war-of-the-worlds.jpg`,
    preview: `/war-of-the-worlds.jpg`,
    genre: `Adventure, War Drama`,
    year: 2005,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 2.8,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    isFavorite: false,
    runtime: 122
  },
  {
    id: 5,
    title: `Revenant`,
    src: `/revenant.jpg`,
    background: `/revenant.jpg`,
    preview: `/revenant.jpg`,
    genre: `Action, Adventure`,
    year: 2015,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 3.1,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    isFavorite: false,
    runtime: 145
  }
];

it(`Test click by Add favorite button`, () => {
  const handleClickAddToFavorite = jest.fn();

  const store = mockStore({
    [NameSpace.FILM]: {
      filters: [`All genres`, `Drama`],
      genre: `All genres`,
      showingFilms: 5
    },
    [NameSpace.DATA]: {
      allFilms: films
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const main = mount(<Provider store={store}>
    <StaticRouter>
      <Main
        films={films}
        promoFilm={promoFilm}
        onFilmClick={noop}
        onChangeFavorite={handleClickAddToFavorite} />
    </StaticRouter>
  </Provider>);

  const button = main.find(`button.btn--list`);
  button.simulate(`click`, {preventDefault: noop});

  expect(handleClickAddToFavorite.mock.calls.length).toBe(1);
  expect(handleClickAddToFavorite.mock.calls[0][0]).toBe(5);
  expect(handleClickAddToFavorite.mock.calls[0][1]).toBe(1);
});
