document.getElementById('financialPlanForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from being submitted normally

  // Get the user's input
  var income = parseFloat(document.getElementById('income').value);
  // Add more variables here for each input field, following the pattern above

  // Verify the user's input
  if (isNaN(income)) {  // Replace 'income' with the id of each input field
    alert('Please enter a valid number for income.');  // Replace 'income' with the name of each input field
    return;
  }

  // Calculate the total expenses and remaining budget for each month
  var totalExpensesMonth1 = rent + food + travel + subscriptions + leisure + savings + debt1 + debt2; // Add more debts as necessary
  var remainingBudgetMonth1 = income - totalExpensesMonth1;

  // Repeat the above calculations for each subsequent month, adjusting as necessary for debts that are fully repaid

  // Display the result
  document.getElementById('result').innerText = 'Month 1 Remaining Budget: ' + remainingBudgetMonth1.toFixed(2);
  // Repeat the above line for each subsequent month
});
