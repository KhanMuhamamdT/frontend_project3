import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PostDetails from "../PostDetails";

configure({ adapter: new Adapter() });

let testArr = []

describe("PostDetails component", () => {
  it("should render a loading page", () => {
    const component = shallow(<PostDetails posts={testArr}/>);
    expect(component.contains(<div>Loading . . .</div>)).toBe(true);
  });
});

