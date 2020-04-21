import Emitter from "@/components/Emitter.vue";
import { mount } from "@vue/test-utils";

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();
    wrapper.vm.emitEvent();

    console.log(wrapper.emitted());
    console.log(wrapper.emitted().myEvent);
    console.log(wrapper.emitted().myEvent[0]);
    console.log(wrapper.emitted().myEvent[0][0]);
  });
});
