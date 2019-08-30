export const countExpensesTotalAmount = (expenses) => {
    return expenses.reduce((sum, expesne) => {
        return sum + expesne.amount;
    }, 0)
};