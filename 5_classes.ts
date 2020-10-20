class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
      return `[${name}]: TypeScript version is ${this.version}`  
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// более короткая запись
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {

    }
}

// ==========
// модицикаторы protected, public, private

class Animal {
    // protected - поля доступны в этом классе и в наследниках
    protected voice: string = ''
    // public доступны везде
    public color: string = 'black'

    // private доступны только в том классе, в котором были определены
    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVioce(voice: string): void {
        this.voice = voice
    }
}

// у инстанса класса не можем получить доступ до voice потому что это свойство protected
const cat = new Cat()
cat.setVioce('test')
console.log(cat.color)

// ============
// абстрактные классы. от них можно наследоваться, но они ни во что не компилируются

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info'
    }
}