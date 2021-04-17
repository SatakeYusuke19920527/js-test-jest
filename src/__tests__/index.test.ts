import { titleCase,largestOfFour,repeatStringNumTimes } from '../index'

test('test1', () => {
  expect(titleCase("i'm a little tea pot")).toBe("I'm A Little Tea Pot")
})

test('test2', () => {
  expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toStrictEqual([ 27, 5, 39, 1001 ])
})

test('test3', () => {
  expect(repeatStringNumTimes("abc", 3)).toBe('abcabcabc')
})

test('test4', () => {
  expect(repeatStringNumTimes("('A')", 10)).toBe("('A')('A')('A')('A')('A')('A')('A')('A')('A')('A')")
})