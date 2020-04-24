import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = mount(Parent);

    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it("does render a span", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showSpan: true };
      }
    });

    expect(wrapper.find("span").isVisible()).toBe(true);
  });
});
