import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

const films = [
  {
    id: 3,
    title: `Большой куш`,
    src: `/snatch.jpg`,
    background: `/snatch.jpg`,
    preview: `/snatch.jpg`,
    promoImage: `/snatch.jpg`,
    genre: `Comedy, Crime`,
    year: 2000,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 9.1,
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
    promoImage: `/war-of-the-worlds.jpg`,
    genre: `Adventure, War Drama`,
    year: 2005,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 2.8,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 122
  },
  {
    id: 5,
    title: `Revenant`,
    src: `/revenant.jpg`,
    background: `/revenant.jpg`,
    preview: `/revenant.jpg`,
    promoImage: `/revenant.jpg`,
    genre: `Action, Adventure`,
    year: 2015,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 3.1,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 145
  }
];

it(`Render FilmsList`, () => {
  const store = mockStore({
    [NameSpace.FILM]: {
      showingFilms: 5
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <FilmsList
        films={films}
        onFilmClick={() => {}}
        onFilmHover={() => {}}
        onFilmBlur={() => {}}
        activeFilmID={1}
      /></Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
