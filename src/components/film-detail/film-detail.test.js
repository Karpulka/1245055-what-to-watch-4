import React from "react";
import renderer from "react-test-renderer";
import FilmDetail from "./film-detail.jsx";

const film = {
  title: `Большой куш`,
  src: `/snatch.jpg`,
  background: `/snatch.jpg`,
  genre: `Comedy, Crime`,
  year: 2000,
  overview: {
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: `9.1`,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
  }
};

it(`Render FilmDetail`, () => {
  const tree = renderer
    .create(<FilmDetail {...film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
