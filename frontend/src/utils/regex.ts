export default class Regex {
  static email =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  static user = {
    login: /^[a-zA-Z0-9]+$/,
    name: /^(?!.*\s{2})[a-zA-Zа-яА-ЯёЁ0-9_]+(?:\s[a-zA-Zа-яА-ЯёЁ0-9_]+)*$/,
  }
  static verifyCode = /^[a-zA-Z0-9]{6}$/
}
