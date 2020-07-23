import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabVariants from "./tab-variants.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const tab = {
  title: `Overview`,
  value: {
    description: `This is Description. TCHK.`,
    rating: 8.5,
    voiceCount: 214,
    director: `And he's Director`,
    actorList: [`Actor`, `Actor`, `Actor`]
  }
};

it(`Click by tab`, () => {
  const handleTabClick = jest.fn();

  const tabVariants = shallow(<TabVariants
    tab={tab}
    active={`Details`}
    onTabClick={handleTabClick}
  />);

  const link = tabVariants.find(`a`);
  link.simulate(`click`);

  expect(handleTabClick.mock.calls.length).toBe(1);
});
