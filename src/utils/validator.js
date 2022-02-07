// eslint-disable-next-line space-before-blocks
export function validator(data, config){
  function validate(validateMethod, data, config) {

  }
// так как data это форма которая содержит имена полей то делаем проход по всем полям
for (const fieldName in data) {
// надо получить конфигурацию для каждого просматриваемого поля из config
    // так как требований для каждого поля может быть много - то надо проходиться тоже по всем полям с помощью цикла for ... in
  for (const validateMethod in config[fieldName]) {
    validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
  }
}
}
