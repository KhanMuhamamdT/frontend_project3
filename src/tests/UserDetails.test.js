import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import UserDetails from "../UserDetails";

configure({ adapter: new Adapter() });

let testArr = []


describe("UserDetails component", () => {
    it('should have a header that says "Counter"', () => {
        const component = shallow(<UserDetails users={testArr}/>);
        expect(component.contains(<h1>Name</h1>)).toBe(true)
      })
});
