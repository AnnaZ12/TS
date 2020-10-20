// вспомогательные конструкции, которые позволяют работать с типами
function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(fractionDigits: 2)
    }
    return x.trim()
}

class MyResponce {
    header = 'responce header'
    result = 'response result'

}

class MyError {
    header = 'error header'
    message = 'error result'
    
}

function handle(res: MyResponce | MyError) {
    if(res instanceof MyResponce) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// =======

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ...
}
setAlertType(type: 'success')
setAlertType(type: 'warning')