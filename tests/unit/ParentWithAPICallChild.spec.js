import { shallowMount, mount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild.vue";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";

describe("ParentWithAPICallChild.vue", () => {
  it("renders with mount and does not initialize API call", () => {
    const wrapper0 = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    });
    const wrapper1 = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: "<div class='stub'></div>"
      }
    });

    // console.log(wrapper0.html());
    // console.log(wrapper1.html());
    expect(wrapper0.find(ComponentWithAsyncCall).exists()).toBe(true);
    expect(wrapper1.find(ComponentWithAsyncCall).exists()).toBe(true);
  });

  it("renders with shallowMount and does not initialize API call", () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    // console.log(wrapper.html());
    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
