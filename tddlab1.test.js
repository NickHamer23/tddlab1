const translate = require("./tddlab1");

test("Apple translates to appleay", () => {
  expect(translate("Apple")).toEqual("appleay");
});

test("Orange translates to orangeay", () => {
  expect(translate("Orange")).toEqual("orangeay");
});

test("Eat translates to eatay", () => {
  expect(translate("Eat")).toEqual("eatay");
});

test("Interesting translates to interestingay", () => {
  expect(translate("Interesting")).toEqual("interestingay");
});

test("Uber translates to uberay", () => {
  expect(translate("Uber")).toEqual("uberay");
});

test("Table translates to abletay", () => {
  expect(translate("Table")).toEqual("abletay");
});

test("Mouse translates to ousemay", () => {
  expect(translate("Mouse")).toEqual("ousemay");
});

test("Chair translates to airchay", () => {
  expect(translate("Chair")).toEqual("airchay");
});

test("Trap translates to aptray", () => {
  expect(translate("Trap")).toEqual("aptray");
});

test("Scrap translates to rapscay", () => {
  expect(translate("Scrap")).toEqual("rapscay");
});

test("APPLE is converted to lowercase and translates to appleay", () => {
  expect(translate("APPLE")).toEqual("appleay");
});

test("I am now fluent in pig latin translates to iay amay ownay uentflay inay igpay atinlay", () => {
  expect(translate("I am now fluent in pig latin")).toEqual(
    "iay amay ownay uentflay inay igpay atinlay"
  );
});

test("Hello world translates to ellohay orldway", () => {
  expect(translate("Hello world")).toEqual("ellohay orldway");
});

test("Apples and Oranges translates to applesay anday orangesay", () => {
  expect(translate("Apples and Oranges")).toEqual("applesay anday orangesay");
});

test("Under the table translates to underay ethay abletay", () => {
  expect(translate("Under the table")).toEqual("underay ethay abletay");
});
