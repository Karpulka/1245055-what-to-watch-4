import {reducer, ActionCreator, ActionTypes} from "./reducer";

const DEFAULT_FILMS_COUNT = 8;
const films = [
  {
    id: 0,
    title: `Фантастические твари и места их обитания`,
    src: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2018,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.9,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 99
  },
  {
    id: 1,
    title: `Богемская рапсодия`,
    src: `/img/bohemian-rhapsody.jpg`,
    background: `/img/bohemian-rhapsody.jpg`,
    genre: `Biography, Drama`,
    year: 2018,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 10,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 115
  },
  {
    id: 2,
    title: `Авиатор`,
    src: `/img/aviator.jpg`,
    background: `/img/aviator.jpg`,
    genre: `Drama`,
    year: 2004,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 7.65,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 87
  },
  {
    id: 3,
    title: `Большой куш`,
    src: `/img/snatch.jpg`,
    background: `/img/snatch.jpg`,
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
    src: `/img/war-of-the-worlds.jpg`,
    background: `/img/war-of-the-worlds.jpg`,
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
    src: `/img/revenant.jpg`,
    background: `/img/revenant.jpg`,
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
  },
  {
    id: 6,
    title: `Остров проклятых`,
    src: `/img/shutter-island.jpg`,
    background: `/img/shutter-island.jpg`,
    genre: `Mystery, Thriller, Drama`,
    year: 2010,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.87,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 180
  },
  {
    id: 7,
    title: `Королевство полной луны`,
    src: `/img/moonrise-kingdom.jpg`,
    background: `/img/moonrise-kingdom.jpg`,
    genre: `Comedy, Drama, Romance`,
    year: 2012,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 6.7,
    voiceCount: 240,
    director: `Wes Andreson`,
    actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runtime: 167
  }
];
const promoFilm = films[0];
const filters = [`All genres`, `Fantasy`, `Biography`, `Drama`, `Comedy`, `Crime`, `Adventure`, `War Drama`, `Action`, `Mystery`];

describe(`Reduser state tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: `All genres`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: DEFAULT_FILMS_COUNT
    });
  });

  it(`Filter films by genre`, () => {
    expect(reducer({
      genre: `All genres`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: 15
    }, {
      type: ActionTypes.GET_FILM_BY_GENRE,
      payload: `Fantasy`
    })).toEqual({
      genre: `All genres`,
      films: [{
        id: 0,
        title: `Фантастические твари и места их обитания`,
        src: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        background: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        genre: `Fantasy`,
        year: 2018,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
        rating: 8.9,
        voiceCount: 240,
        director: `Wes Andreson`,
        actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        runtime: 99
      }],
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: DEFAULT_FILMS_COUNT
    });
  });

  it(`Change genre`, () => {
    expect(reducer({
      genre: `All genres`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: 15
    }, {
      type: ActionTypes.CHANGE_GENRE,
      payload: `Fantasy`
    })).toEqual({
      genre: `Fantasy`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: DEFAULT_FILMS_COUNT
    });
  });

  it(`Show more`, () => {
    expect(reducer({
      genre: `All genres`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: 5
    }, {
      type: ActionTypes.SHOW_MORE,
      payload: DEFAULT_FILMS_COUNT
    })).toEqual({
      genre: `All genres`,
      films,
      allFilms: films,
      filters,
      promoFilm,
      showingFilms: 8
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreator change genre`, () => {
    expect(ActionCreator.changeGenre(`Fantasy`)).toEqual({
      type: ActionTypes.CHANGE_GENRE,
      payload: `Fantasy`
    });
  });

  it(`ActionCreator get films by genre`, () => {
    expect(ActionCreator.getFilmByGenre(`Fantasy`)).toEqual({
      type: ActionTypes.GET_FILM_BY_GENRE,
      payload: `Fantasy`
    });
  });

  it(`ActionCreator Show more`, () => {
    expect(ActionCreator.handleShowMoreClick()).toEqual({
      type: ActionTypes.SHOW_MORE,
      payload: DEFAULT_FILMS_COUNT
    });
  });
});
