import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const films = [
  {
    id: 0,
    title: `Фантастические твари и места их обитания`,
    src: `/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2018,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
      rating: `8.9`,
      voiceCount: 240,
      director: `Wes Andreson`,
      actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
    }
  },
  {
    id: 1,
    title: `Богемская рапсодия`,
    src: `/bohemian-rhapsody.jpg`,
    background: `/bohemian-rhapsody.jpg`,
    genre: `Biography, Drama`,
    year: 2018,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
      rating: `10`,
      voiceCount: 240,
      director: `Wes Andreson`,
      actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
    }
  },
  {
    id: 2,
    title: `Авиатор`,
    src: `/aviator.jpg`,
    background: `/aviator.jpg`,
    genre: `Drama`,
    year: 2004,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                    <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
      rating: `7.65`,
      voiceCount: 240,
      director: `Wes Andreson`,
      actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
    }
  }
];

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      films={films}
      onFilmClick={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
