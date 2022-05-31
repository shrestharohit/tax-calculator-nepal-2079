const taxCalculator = (x) => {
    let annualIncome = x * 12;
    return annualIncome < 500000
        ? annualIncome * 0.01
        : 500000 <= annualIncome < 700000
            ? 5000 + (annualIncome - 500000) * 0.1
            : 700000 <= annualIncome < 1000000
                ? 25000 + (annualIncome - 700000) * 0.2
                : 1000000 <= annualIncome < 2000000
                    ? 85000 + (annualIncome - 1000000) * 0.3
                    : 385000 + (annualIncome - 2000000) * 0.2;
};
const taxReport = (taxableAmount) => {
    let annualTax = taxCalculator(taxableAmount);
    console.log("Your tax details:")
    return {
        "Total Taxable Amount": taxableAmount * 12,
        "Annual Tax Amount": annualTax,
        "Monthly Tax Amount": annualTax / 12,
    };
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What is your gross monthly income? `, monthlyIncome => {
    readline.question(`Do you have SSF contribution? (yes/no) `, haveSsf => {
        if (haveSsf === 'yes') {
            readline.question(`What is your SSF contribution amount? `, ssfContribution => {
                let taxableAmount = monthlyIncome - ssfContribution
                console.table(taxReport(taxableAmount));
                readline.close();
            });
        }
        else if(haveSsf === 'no') {
            console.table(taxReport(monthlyIncome));
            readline.close();
        }

    })
})