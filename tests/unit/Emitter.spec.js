import Emitter from "@/components/Emitter.vue";
import { mount } from "@vue/test-utils";

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  });
});
