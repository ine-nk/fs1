import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
  // для вычисления нужны  элементы, номер страницы,  размер страницы

  // для начала надо вычислить стартовый индекс элемента
  const startIndex = (pageNumber - 1) * pageSize

  // делаем объект лодаш _(items)
  // отрезаем от начала массива до стартового индекса .slice(startIndex)
  // берем нужное кол-во элементов равное размеру страницы .take(pageSize)
  // возвращаем значение .value()

  return _(items).slice(startIndex).take(pageSize).value()
}
