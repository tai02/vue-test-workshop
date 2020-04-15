import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toBe("Vue and TDD");
  });
});
