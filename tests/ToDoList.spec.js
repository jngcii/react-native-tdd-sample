/**
 * @format
 */

import React from "react";
import { FlatList } from "react-native";
import { shallow } from "enzyme";
import ToDoList from "../src/ToDoList";

describe("Rendering", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      items: [1, 2, 3].map(i => { 
        return { id: i, keyword: `item ${i}`, completed: false }
      })
    }
    wrapper = shallow(<ToDoList {...props} />);
  });

  it("is FlatList visible?", () => {
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });

  it("is props delivered to FlatList correctly?", () => {
    expect(wrapper.find(FlatList).prop('data')).toBe(props.items)
  })
});