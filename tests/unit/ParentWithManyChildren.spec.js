import { mount } from "@vue/test-utils";
import ParentWithManyChildren from "@/components/ParentWithManyChildren";
import Child from "@/components/Child";

it("renders many children", () => {
  const wrapper = mount(ParentWithManyChildren);

  expect(wrapper.findAll(Child).length).toBe(3);
});
