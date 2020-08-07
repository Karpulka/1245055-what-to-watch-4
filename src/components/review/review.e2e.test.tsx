import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Review from "./review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {StaticRouter} from "react-router-dom";
import {Film} from "../../types";
import {noop} from "../../utils";

const mockStore = configureStore([]);

configure({
  adapter: new Adapter()
});

const film: Film = {
  id: 2,
  title: `Test film`,
  background: `/some/bg.jpg`,
  src: `/some/poster.jpg`,
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
  isFavorite: false,
  actorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runtime: 145
};

it(`Test change text`, () => {
  const handleChangeText = jest.fn();
  const {title, background, src, id} = film;

  const store = mockStore({
    [NameSpace.DATA]: {
      isDisableCommentForm: false,
      errorText: ``
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  store.dispatch = jest.fn();

  const review = mount(<Provider store={store}>
    <StaticRouter>
      <Review
        title={title}
        background={background}
        src={src}
        id={id}
        isDisableSubmit={false}
        onSubmitReview={noop}
        onChangeText={handleChangeText}
        isDisableForm={false}/>
    </StaticRouter>
  </Provider>
  );

  const textarea = review.find(`textarea`);
  textarea.simulate(`change`, {
    preventDefault: noop,
    currentTarget: {
      value: `12345`
    }
  });
  expect(handleChangeText.mock.calls.length).toBe(1);
});
