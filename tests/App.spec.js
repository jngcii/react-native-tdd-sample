/**
 * @format
 */

import "react-native";
import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("App", () => {
  const wrapper = shallow(<App />);

  it("is Text visible?", () => {
    expect(wrapper.find("Text").contains("To Do List")).toBe(true);
  });

  it("is AddToDo visible?", () => {
    const addToDo = wrapper.find("AddToDo");
    expect(addToDo.length).toEqual(1);
  });

  it("is ToDoList visible?", () => {
    const toDoList = wrapper.find("ToDoList");
    expect(toDoList.length).toEqual(1);
  })
});