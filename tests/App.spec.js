/**
 * @format
 */

import "react-native";
import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import App from "../src/App";

describe("Jest", () => {
  it("is it working?", () => {
    const a = 1;
    expect(a + 1).toBe(2);
  })
})

describe("Enzyme", () => {
  it("is it working?", () => {
    const txt = "hello";
    const wrapper = shallow(<Text>{ txt }</Text>);
    expect(wrapper.text()).toBe(txt)
  })
})