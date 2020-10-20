interface Person {
    name: string,
    age: number
}

// создаем отдельный тип, который будет состоять из ключей интерфейса
type PersonKeys = keyof Person // на выходе значения 'name' | 'age
let key: PersonKeys='name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Exclude keyof - исключаем _id и createdAt
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>
// Pick - используем только name и email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name'
u1 = '_id' // получаем ошибку