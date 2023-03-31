export class Account {
  private constructor(console: Console) {}

  deposit(amount: number) {}

  withdraw(amount: number) {}

  printStatement() {}

  static newAccount(console: Console) {
    return new Account(console);
  }
}

interface Console {
  print(report: string);
}

interface Operations {
    date: string,
    amount: number
}

export class ReportStatement {
  private constructor() {}

  report(operations: Operations[]) {

    const resultString = operations[1]

    return `DATE | AMOUNT | BALANCE`;
  }

  static newReportStatement() {
    return new ReportStatement();
  }
}
