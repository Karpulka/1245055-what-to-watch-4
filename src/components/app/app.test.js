import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoFilm = {
  title: `Promo Film`,
  genre: `Comedy`,
  year: 1998
};

const films = [
  {
    title: `Фантастические твари и места их обитания`,
    src: `/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2018,
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
    title: `Богемская рапсодия`,
    src: `/bohemian-rhapsody.jpg`,
    background: `/bohemian-rhapsody.jpg`,
    genre: `Biography, Drama`,
    year: 2018,
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
    title: `Авиатор`,
    src: `/aviator.jpg`,
    background: `/aviator.jpg`,
    genre: `Drama`,
    year: 2004,
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

const settings = {
  promoFilm,
  films
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App settings={settings}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
