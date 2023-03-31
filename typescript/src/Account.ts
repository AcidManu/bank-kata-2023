
export class Account {

    private constructor (console: Console) {

    }

    deposit (amount: number) {

    }

    withdraw (amount: number) {

    }

    printStatement () {

    }

    static newAccount (console: Console) {
        return new Account(console)
    }
}

interface Console {
    print (report: string)
}
