import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-project-7ac4f-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json',
    expenseData,
  );
}
