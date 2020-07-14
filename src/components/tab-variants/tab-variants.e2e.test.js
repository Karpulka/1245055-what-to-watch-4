import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabVariants from "./tab-variants.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const tabVariant = {
  title: `Main`,
  active: false
};

it(`Click by tab`, () => {
  const handleTabClick = jest.fn();
  const {title, active} = tabVariant;

  const tabVariants = shallow(<TabVariants
    title={title}
    active={active}
    onTabClick={handleTabClick}
  />);

  const link = tabVariants.find(`a`);
  link.simulate(`click`);

  expect(handleTabClick.mock.calls.length).toBe(1);
});
