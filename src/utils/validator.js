// eslint-disable-next-line space-before-blocks
export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(data)
        break
      }
      case 'isCapitalSimbol': {
        const capitalRegExp = /[A-Z]/g
        statusValidate = !capitalRegExp.test(data)
      }
      break
    case 'isContainDigit': {
      const digitRegExp = /\d+/g
      statusValidate = !digitRegExp.test(data)
    }
    break
    case 'min':
      statusValidate = data.length < config.value
      break
    default:
      break
    }
    if (statusValidate) return config.message
  }
  // так как data это форма которая содержит имена полей то делаем проход по всем полям
  for (const fieldName in data) {
    // надо получить конфигурацию для каждого просматриваемого поля из config
    // так как требований для каждого поля может быть много - то надо проходиться тоже по всем полям с помощью цикла for ... in
    for (const validateMethod in config[fieldName]) {
      // поученные данные передаются в функцию - определенную ранее
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])

      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
