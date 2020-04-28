import actions from "@/store/actions";

let url = "";
let body = {};

jest.mock("axios", () => ({
  post: (_url, _body) => {
    return new Promise(resolve => {
      url = _url;
      body = _body;
      resolve(true);
    });
  }
}));

describe("authenticate", () => {
  it("authenticated a user", async () => {
    const commit = jest.fn();
    const username = "alice";
    const password = "password";

    await actions.authenticate({ commit }, { username, password });

    expect(url).toBe("/api/authenticate");
    expect(body).toEqual({ username, password });
    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", true);
  });
});
