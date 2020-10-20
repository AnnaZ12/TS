const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// то же самое с импользованием generics
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TS']

// Tuple - когда используется несколько типов данных
const concat: [string, number] = ['ann', 1234567]

// Any - можно переопределить тип данных
let variable: any = 42
variable = 'new str'

// void = пустой тип, функция ничего не вернет
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName(name: 'Хайзенберг')

// Never 
function throwArrow(message: string): never {
    throw Error(message)
}

function infinite(): never {
    // while(true) {

    // }
}

// Type - создаем свой тип
type Login = string
const login: Login = 'admin'

// указать несколько типов
type ID = string | number

type SomeType = string | null | undefined