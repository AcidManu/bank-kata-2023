import { Account } from "../../src/Account";

describe('Kata bank', () => {

    it('should print statement', () => {
        // Given
        const console = {
            print: jest.fn()
        }

        // When
        const account = Account.newAccount(console)
        account.deposit(1000)
        account.deposit(2000)
        account.withdraw(500)
        account.printStatement()

        // Then
        expect(console.print).toBeCalledWith(
`DATE | AMOUNT | BALANCE
24/01/2012 | 500.00 | 2500.00
23/01/2012 | 2000.00 | 3000.00
20/01/2012 | 1000.00 | 1000.00`)
    });
});
