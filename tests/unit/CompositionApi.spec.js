import { mount } from "@vue/test-utils";

import CompositionApi from "@/components/CompositionApi.vue";

describe("CompositionApi", () => {
  it("renders a message", () => {
    const wrapper = mount(CompositionApi, {
      propsData: {
        message: "Testing the composition API"
      }
    });

    expect(wrapper.find(".message").text()).toBe("TESTING THE COMPOSITION API");
  });
});
