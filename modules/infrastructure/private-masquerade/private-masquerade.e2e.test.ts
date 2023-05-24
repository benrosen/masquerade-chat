import { config } from "../../../package.json";

describe(config.stack.private.name, () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});
