import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter()
});

const mockFilms = [
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

const MockComponent = (props) => {
  const {films, onItemClick} = props;
  return <div>
    {films.map((film) => <button onClick={() => onItemClick(film)} key={film.id} />)}
  </div>;
};

MockComponent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  onItemClick: PropTypes.func.isRequired
};

it(`Test item click and set activeItem`, () => {
  const ActiveItemWrapper = withActiveItem(MockComponent);

  const wrapper = mount(<ActiveItemWrapper films={mockFilms} />);

  expect(wrapper.state().activeItem).toEqual(null);
  wrapper.find(`button`).at(0).simulate(`click`);

  expect(wrapper.state().activeItem).toEqual(mockFilms[0]);
});
