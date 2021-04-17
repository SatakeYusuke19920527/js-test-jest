export const titleCase = (str: string): string => {
  let strLowerCase: string = str.toLowerCase()
  let strArray: string[] = strLowerCase.split(' ')
  let upperCase: string = ""
  let ans: string = ""
  strArray.forEach((element: string) => {
    upperCase = element.charAt(0).toUpperCase() + element.slice(1);
    ans += upperCase + " "
  })
  ans = ans.trim()
  return ans
}

export function largestOfFour(arr: number[][]) {
  const newArray: number[] = []
  arr.map(arrElement => {
    newArray.push(Math.max(...arrElement))
  })
  return newArray;
}

export function repeatStringNumTimes(str: string, num: number) {
  let answer: string = ""
  for (let i: number = 0; i < num; i++){
    answer += str
  }
  console.log(answer, 'check')
  return answer
}