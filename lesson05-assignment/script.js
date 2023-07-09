let balance = 2000;

function performAction() {
  const action = prompt("Which action would you like to perform? (Enter Q to quit, W to withdraw, D to deposit, B to view balance)");

  switch (action.toUpperCase()) {
    case "Q":
      alert("Thank you for using the bank application!");
      break;
    case "W":
      withdrawMoney();
      break;
    case "D":
      depositMoney();
      break;
    case "B":
      viewBalance();
      break;
    default:
      alert("Invalid action. Please try again.");
      performAction();
      break;
  }
}

function withdrawMoney() {
  const amount = parseFloat(prompt("Enter the amount to withdraw:"));
  
  if (amount > balance) {
    alert("Insufficient funds. Your current balance is $" + balance.toFixed(2));
  } else if (amount < 0) {
    alert("Invalid amount. Please enter a positive number.");
  } else if (amount > balance - 300) {
    const confirmation = confirm("This withdrawal will leave you with less than $300 in your account. Are you sure you want to proceed?");
    
    if (confirmation) {
      balance -= amount;
      updateBalance();
    } else {
      alert("Withdrawal canceled.");
    }
  } else {
    balance -= amount;
    updateBalance();
  }
  
  performAction();
}

function depositMoney() {
  const amount = parseFloat(prompt("Enter the amount to deposit:"));
  
  if (amount > 50000) {
    alert("Deposit amount exceeds the limit. The maximum deposit allowed is $50,000.");
  } else if (amount < 0) {
    alert("Invalid amount. Please enter a positive number.");
  } else {
    balance += amount;
    updateBalance();
  }
  
  performAction();
}

function viewBalance() {
  alert("Your current balance is $" + balance.toFixed(2));
  performAction();
}

function updateBalance() {
}

performAction();
