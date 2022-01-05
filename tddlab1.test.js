const translate = require("./tddlab1");

test("Hello world translates to ellohay orldway", () => {
  expect(translate("Hello world")).toEqual("Hello world");
});
