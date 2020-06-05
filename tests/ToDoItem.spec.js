/**
 * @format
 */

import React from "react";
import { Text, Button } from "react-native";
import { shallow } from "enzyme";
import ToDoItem, { styles } from "../src/ToDoItem";

describe("Rendering", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {}
    }
    wrapper = shallow(<ToDoItem {...props} />);
  })

  it("is Text visible?", () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  })

  it("are two Buttons visible?", () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  })

  describe("Uncompleted", () => {
    it("Does it have default style?", () => {
      expect(wrapper.prop("style")).toBe(styles.default);
    })
  })

  describe("Uncompleted", () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<ToDoItem {...props} />);
    })

    it("Does it have completed style?", () => {
      expect(wrapper.prop("style")).toBe(styles.completed);
    })
  })
})


describe("Interaction", () => {
  let wrapper;
  let props;

  describe("Complete feature", () => {
    beforeEach(() => {
      props = {
        item: { id: 1, keyword: 'item 1', completed: false },
        onComplete: jest.fn(),
        onDelete: jest.fn(),
      }
      
      wrapper = shallow(<ToDoItem {...props} />);
      
      wrapper.find(Button).at(0).prop("onPress")();
    });
    
    it("is the onComplete callback called with input index?", () => {
      expect(props.onComplete).toHaveBeenCalledTimes(1);
      expect(props.onComplete).toHaveBeenCalledWith(props.item.id);
    })
  })

  describe("Delete feature", () => {
    beforeEach(() => {
      props = {
        item: { id: 1, keyword: 'item 1', completed: false },
        onComplete: jest.fn(),
        onDelete: jest.fn(),
      }
      
      wrapper = shallow(<ToDoItem {...props} />);
      
      wrapper.find(Button).at(1).prop("onPress")();
    });
    
    it("is the onDelete callback called with input index?", () => {
      expect(props.onDelete).toHaveBeenCalledTimes(1);
      expect(props.onDelete).toHaveBeenCalledWith(props.item.id);
    })
  })
})