import { mount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper0 = mount(Bilingual, {
      mocks: {
        $t: msg => msg
      }
    });
    const wrapper1 = mount(Bilingual);

    console.log(wrapper0.html());
    console.log(wrapper1.html());
  });
});
