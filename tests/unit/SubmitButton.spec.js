import { shallowMount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton";

const msg = "submit";
const factory = propsData => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  });
};

describe("SubmitButton.vue", () => {
  describe("does not have admin privileges", () => {
    it("renders a message", () => {
      const wrapper = factory();

      expect(wrapper.find("span").text()).toBe("Not Authorized");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });

  describe("has admin privileges", () => {
    it("render a message", () => {
      const wrapper = factory({ isAdmin: true });

      expect(wrapper.find("span").text()).toBe("Admin Privileges");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });
});
