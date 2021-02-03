import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmDetails from "./film-details";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Film, Details} from "../../types";

const mockStore = configureStore([]);

const films: Array<Film> = [
  {
    id: 0,
    title: `Фантастические твари и места их обитания`,
    src: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2018,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.9,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 99,
    isFavorite: false
  },
  {
    id: 1,
    title: `Богемская рапсодия`,
    src: `/img/bohemian-rhapsody.jpg`,
    background: `/img/bohemian-rhapsody.jpg`,
    preview: `/img/bohemian-rhapsody.jpg`,
    genre: `Biography, Drama`,
    year: 2018,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 10,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 115,
    isFavorite: false
  },
  {
    id: 2,
    title: `Авиатор`,
    src: `/img/aviator.jpg`,
    background: `/img/aviator.jpg`,
    preview: `/img/aviator.jpg`,
    genre: `Drama`,
    year: 2004,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 7.65,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 87,
    isFavorite: false
  },
  {
    id: 3,
    title: `Большой куш`,
    src: `/img/snatch.jpg`,
    background: `/img/snatch.jpg`,
    preview: `/img/snatch.jpg`,
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
    runtime: 136,
    isFavorite: false
  },
  {
    id: 4,
    title: `Война миров`,
    src: `/img/war-of-the-worlds.jpg`,
    background: `/img/war-of-the-worlds.jpg`,
    preview: `/img/war-of-the-worlds.jpg`,
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
    runtime: 122,
    isFavorite: false
  },
  {
    id: 5,
    title: `Revenant`,
    src: `/img/revenant.jpg`,
    background: `/img/revenant.jpg`,
    preview: `/img/revenant.jpg`,
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
    runtime: 145,
    isFavorite: false
  },
  {
    id: 6,
    title: `Остров проклятых`,
    src: `/img/shutter-island.jpg`,
    background: `/img/shutter-island.jpg`,
    preview: `/img/shutter-island.jpg`,
    genre: `Mystery, Thriller, Drama`,
    year: 2010,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    fullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.87,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 180,
    isFavorite: false
  },
  {
    id: 7,
    title: `Королевство полной луны`,
    src: `/img/moonrise-kingdom.jpg`,
    background: `/img/moonrise-kingdom.jpg`,
    preview: `/img/moonrise-kingdom.jpg`,
    genre: `Comedy, Drama, Romance`,
    year: 2012,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 6.7,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 167,
    isFavorite: false
  }
];

const details: Details = {
  genre: `Drama`,
  year: 2012,
  director: `He's Director`,
  actorList: [`Actor 1`, `Actor 2`],
  runtime: 132
};

it(`Render FilmDetails`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    },
    [NameSpace.DATA]: {
      allFilms: films
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <FilmDetails details={details} />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
