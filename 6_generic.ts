const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStrinds: Array<string> = ['hello', 'ann']

// функция работает с типом Т
// принимаем массив типа Т
// возвращаем массив типа Т
// дженерик тип, который будет автоматически подстраивается под те значения, которые передаем
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrinds)
