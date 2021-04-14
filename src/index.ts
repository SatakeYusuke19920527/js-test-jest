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

