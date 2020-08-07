import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({
  adapter: new Adapter()
});

interface MockFilm {
  id: number;
}

interface MockComponentTypes {
  films: Array<MockFilm>;
  onItemClick: (film: MockFilm) => void;
}

const mockFilms: Array<MockFilm> = [
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
];

const MockComponent = (props: MockComponentTypes) => {
  const {films, onItemClick} = props;
  return <div>
    {films.map((film) => <button onClick={() => onItemClick(film)} key={film.id} />)}
  </div>;
};

it(`Test item click and set activeItem`, () => {
  const ActiveItemWrapper = withActiveItem(MockComponent);

  const wrapper = mount(<ActiveItemWrapper films={mockFilms} />);

  expect(wrapper.state().activeItem).toEqual(null);
  wrapper.find(`button`).at(0).simulate(`click`);

  expect(wrapper.state().activeItem).toEqual(mockFilms[0]);
});
