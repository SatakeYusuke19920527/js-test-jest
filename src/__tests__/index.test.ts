import { titleCase } from '../index'

test('test1', () => {
  expect(titleCase("i'm a little tea pot")).toBe("I'm A Little Tea Pot")
})