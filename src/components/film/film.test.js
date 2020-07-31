import React from "react";
import renderer from "react-test-renderer";
import Film from "./film.jsx";

const film = {
  id: 6,
  title: `Остров проклятых`,
  src: `/shutter-island.jpg`,
  background: `/shutter-island.jpg`,
  promoImage: `/shutter-island.jpg`,
  preview: `/shutter-island.jpg`,
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

it(`Render Film`, () => {
  const tree = renderer
    .create(<Film
      film={film}
      onFilmClick={() => {}}
      onFilmHover={() => {}}
      onFilmBlur={() => {}}
      isStartPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
