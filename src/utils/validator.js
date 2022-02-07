// eslint-disable-next-line space-before-blocks
export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message
        break

      default:
        break
    }
  }
  // так как data это форма которая содержит имена полей то делаем проход по всем полям
  for (const fieldName in data) {
    // надо получить конфигурацию для каждого просматриваемого поля из config
    // так как требований для каждого поля может быть много - то надо проходиться тоже по всем полям с помощью цикла for ... in
    for (const validateMethod in config[fieldName]) {
      // поученные данные передаются в функцию - определенную ранее
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
      if (error) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
