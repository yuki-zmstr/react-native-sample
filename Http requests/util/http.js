import axios from 'axios';

const BACKEND_URL =
  'https://react-native-project-7ac4f-default-rtdb.asia-southeast1.firebasedatabase.app';

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].descripton,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
