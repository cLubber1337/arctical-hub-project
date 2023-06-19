import { classNames } from "./classNames"


describe("classNames", () => {

  test("should return correct classNames", () => {
    expect(classNames("test", {}, ["test"])).toBe("test test")
  })
  test("should work with one argument", () => {
    expect(classNames("test")).toBe("test")
  })
  test("should work mods: true", () => {
    expect(classNames("test", { hovered: true, active: true }, ["test"]))
      .toBe("test test hovered active")
  })
  test("should work mods: false", () => {
    expect(classNames("test", { hovered: false, active: true }, ["test"]))
      .toBe("test test active")
  })
  test("should work mods: undefined", () => {
    expect(classNames("test", { hovered: undefined, active: undefined }, ["test"]))
      .toBe("test test")
  })
})


