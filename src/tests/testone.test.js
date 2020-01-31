import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import HomePage from "./HomePage";

configure({ adapter: new Adapter() });

describe("HomePage component", () => {
  it("should render as expected", () => {
    const component = shallow(<HomePage test={"Just testing"} />);
    expect(component.contains("Just testing")).toBe(true);
  });
});
