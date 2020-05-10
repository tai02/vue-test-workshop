import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
// import NestedRoute from "@/components/NestedRoute.vue";
import routes from "@/routes.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

jest.mock("@/components/NestedRoute.vue", () => ({
  name: "NestedRoute",
  render: h => h("div")
}));

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes, mode: "abstract" });
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push("/nested-route");
    await wrapper.vm.$nextTick();

    expect(wrapper.find({ name: "NestedRoute" }).exists()).toBe(true);
  });

  it("should have a different route that /nested-route", async () => {
    const router = new VueRouter({ routes, mode: "abstract" });
    const wrapper = mount(App, {
      localVue,
      router
    });
    // This test will fail because we are still on the /nested-route
    expect(wrapper.find({ name: "NestedRoute" }).exists()).toBe(false);
    // console.log(router.currentRoute);
  });
});
