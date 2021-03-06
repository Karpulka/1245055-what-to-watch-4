import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmDetail from "./film-detail";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";
import {Film, Overview, ActiveItem} from "../../types";
import {noop} from "../../utils";

const mockStore = configureStore([]);

const film: Film = {
  id: 0,
  title: `Большой куш`,
  src: `/snatch.jpg`,
  background: `/snatch.jpg`,
  preview: `/snatch.jpg`,
  genre: `Comedy, Crime`,
  year: 2000,
  description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
  rating: 9.1,
  voiceCount: 240,
  director: `Wes Andreson`,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runtime: 99,
  isFavorite: false,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const overview: Overview = {
  rating: 9.1,
  voiceCount: 240,
  director: `Wes Andreson`,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`
};

const likeFilms: Array<Film> = [
  {
    id: 2,
    title: `Авиатор`,
    src: `/aviator.jpg`,
    background: `/aviator.jpg`,
    preview: `/aviator.jpg`,
    genre: `Drama`,
    year: 2004,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 7.65,
    isFavorite: false,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 87
  },
  {
    id: 3,
    title: `Большой куш`,
    src: `/snatch.jpg`,
    background: `/snatch.jpg`,
    preview: `/snatch.jpg`,
    genre: `Comedy, Crime`,
    year: 2000,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 9.1,
    isFavorite: false,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
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
    isFavorite: true,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 122
  }
];

it(`Render FilmDetail is Auth`, () => {
  const activeItem: ActiveItem = {
    title: `Overview`,
    value: overview
  };

  const store = mockStore({
    [NameSpace.FILM]: {
      showingFilms: 5,
      films: likeFilms,
      activeItem
    },
    [NameSpace.DATA]: {
      allFilms: likeFilms
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <FilmDetail film={film} likeFilms={likeFilms} onFilmClick={noop} onPlayButtonClick={noop} onChangeFavorite={noop}/>
      </StaticRouter>
    </Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render FilmDetail No Auth`, () => {
  const activeItem: ActiveItem = {
    title: `Overview`,
    value: overview
  };

  const store = mockStore({
    [NameSpace.FILM]: {
      showingFilms: 5,
      films: likeFilms,
      activeItem
    },
    [NameSpace.DATA]: {
      allFilms: likeFilms
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <FilmDetail film={film} onChangeFavorite={noop} onFilmClick={noop} onPlayButtonClick={noop} />
      </StaticRouter>
    </Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
