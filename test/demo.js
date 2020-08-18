import {
  add
} from "../src/index.js";
import {
  minus
}from "../src/second.js";

describe("test add", () => {
  it("1 add 2", () => {
    expect(add(1, 2)).to.be.equals(3);
  });
  it("2 minus 1", () => {
    expect(minus(2, 1)).to.be.equals(1);
  });
});
