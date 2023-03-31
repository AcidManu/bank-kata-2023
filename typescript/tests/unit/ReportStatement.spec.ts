import { ReportStatement } from "../../src/Account";

describe(ReportStatement, () => {
  it("reports a blank statement", () => {
    const reportStatement = ReportStatement.newReportStatement();

    expect(reportStatement.report([])).toBe(`DATE | AMOUNT | BALANCE`);
  });

  it("reports an operation of a bank statement", () => {
    const reportStatement = ReportStatement.newReportStatement();

    const operations = [{
        date: '20/01/2012',
        amount: 1000
    }]

    expect(reportStatement.report(operations)).toBe(
      `DATE | AMOUNT | BALANCE
20/01/2012 | 1000.00 | 1000.00`
    );
  });
});
