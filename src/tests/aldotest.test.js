import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import CreateUser from "../CreateUser";
import CreatePost from "../CreatePost";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import PostThumb from "../components/PostThumb";

configure({ adapter: new Adapter() });

describe("CreateUser component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<CreateUser />);
  });
  it('should have a header that says "Create your profile"', () => {
    expect(component.contains(<h1>Create your profile</h1>)).toBe(true);
  });
  it("should display blank in an element with the id name-input", () => {
    expect(component.find("#name-input").text()).toEqual("");
  });
});

describe("CreatePost component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<CreatePost />);
  });
  it('should have a header that says "Create a post"', () => {
    expect(component.contains(<h1>Create a post...</h1>)).toBe(true);
  });
  it("should display blank in an element with the id title-input", () => {
    expect(component.find("#title-input").text()).toEqual("");
  });
});

describe("Footer component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  });
  it('should have a footer that says "A.A.S.M."', () => {
    expect(component.contains(<strong>Team A.A.S.M.</strong>)).toBe(true);
  });
});

describe("Gallery component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Gallery post={"This post"} />);
  });
  //   it("should have a props called post", () => {
  //     expect(component.contains("This post")).toBe(true);
  //   });
});

describe("NavBar component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<NavBar />);
  });
  //   it("should have a link to user", () => {
  //     expect(component.contains(<a>Create a User</a>)).toBe(true);
  //   });
});
