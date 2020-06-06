/**
 * @format
 */

import React from "react";
import { TextInput, Button } from "react-native";
import { shallow } from "enzyme";
import AddToDo from "../src/AddToDo";

describe("Rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddToDo />);
  });
  // 모든 it 이라는 구문이 돌아갈 때 마다 새로운 렌더링을 해서 깨끗한 상태에서 테스트를 하겠다.

  it("is TextInput visible?", () => {
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

  it("is Button visible?", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

describe("Interaction", () => {
  let wrapper;
  let props;
  const txt = "some to do";

  beforeEach(() => {
    props = {
      onAdd: jest.fn(),
    }

    wrapper = shallow(<AddToDo {...props} />);

    wrapper.find(TextInput).simulate("changeText", txt);
    wrapper.find(Button).prop("onPress")();
  });

  it("is the onAdd callback called with input text?", () => {
    expect(props.onAdd).toHaveBeenCalledTimes(1);
    expect(props.onAdd).toHaveBeenCalledWith(txt);
  })
})