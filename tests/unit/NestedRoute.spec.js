import { shallowMount } from "@vue/test-utils";
import NestedRoute from "@/components/NestedRoute.vue";
import mockModule from "@/bust-cache.js";

jest.mock("@/bust-cache.js", () => ({ bustCache: jest.fn() }));

const username = "alice";
const mocks = {
  $route: {
    params: { username }
  }
};

describe("NestedRoute", () => {
  it("renders a username from query string", () => {
    const wrapper = shallowMount(NestedRoute, { mocks });

    expect(wrapper.find(".username").text()).toBe(username);
  });

  it("calls bustCache and next when leaving the route", async () => {
    const wrapper = shallowMount(NestedRoute, { mocks });
    const next = jest.fn();
    NestedRoute.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next);
    await wrapper.vm.$nextTick();

    expect(mockModule.bustCache).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
