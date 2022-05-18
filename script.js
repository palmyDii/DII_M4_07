let employee = [];

employee[0] = {
    'name' : 'ก',
    'lastname' : 'นามสมมติ',
    'age' : 68,
    'salary' : 75900
}
employee[1] = {
    'name' : 'ข',
    'lastname' : 'นามสมมติ',
    'age' : 35,
    'salary' : 55400
}

employee[2] = {
    'name' : 'ค',
    'lastname' : 'นามสมมติ',
    'age' : 51,
    'salary' : 81000
}

employee[3] = {
    'name' : 'ง',
    'lastname' : 'นามสมมติ',
    'age' : 76,
    'salary' : 111000
}

employee[4] = {
    'name' : 'ง',
    'lastname' : 'นามสมมติ',
    'age' : 22,
    'salary' : 20500
}

let sumSalary=0, averageAge=0, averageTax=0;
for(let i of employee) {
    sumSalary += i.salary;
    averageAge += i.age / employee.length;
}

for(let i of employee) {
    let tax=0;
    let netIncome = i.salary *12;
    if(netIncome < 150000) {
        tax = 0;
    } else if(netIncome < 300000) {
        tax = (netIncome - 150000)*5/100;
    } else if(netIncome < 500000) {
        tax = (150000)*5/100 + (netIncome - 300000)*10/100;
    } else if(netIncome < 750000) {
        tax = (150000)*5/100 + (200000)*10/100 + (netIncome - 500000)*15/100;
    } else if(netIncome < 1000000) {
        tax = (150000)*5/100 + (200000)*10/100 + (250000)*15/100 + (netIncome - 750000)*20/100;
    } else if(netIncome < 2000000) {
        tax = (150000)*5/100 + (200000)*10/100 + (250000)*15/100 + (250000)*20/100 + (netIncome - 1000000)*25/100;
    } else if(netIncome < 5000000) {
        tax = (150000)*5/100 + (200000)*10/100 + (250000)*15/100 + (250000)*20/100 + (1000000)*25/100 + (netIncome - 2000000)*30/100;
    } else {
        tax = (150000)*5/100 + (200000)*10/100 + (250000)*15/100 + (250000)*20/100 + (1000000)*25/100 + (3000000)*30/100 + (netIncome - 5000000)*35/100;
    }
    averageTax += tax;
}

console.log(sumSalary +" " +averageAge +" " +averageTax)



