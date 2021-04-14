export const titleCase = (str: string) => {
  let strLowerCase = str.toLowerCase()
  let strArray = strLowerCase.split(' ')
  let upperCase = ""
  let ans = ""
  strArray.forEach(element => {
    upperCase = element.charAt(0).toUpperCase() + element.slice(1);
    ans += upperCase + " "
  })
  ans = ans.trim()
  return ans
}