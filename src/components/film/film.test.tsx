import * as React from "react";
import * as renderer from "react-test-renderer";
import Film from "./film";
import {StaticRouter} from "react-router-dom";
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

it(`Render Film`, () => {
  const tree = renderer
    .create(<StaticRouter><Film
      film={film}
      onFilmClick={noop}
      onFilmHover={noop}
      onFilmBlur={noop}
      isStartPlaying={false}
    /></StaticRouter>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
