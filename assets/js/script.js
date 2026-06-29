let transactions = [
  {
    id: 1,
    date: "2025-01-13",
    amount: -448,
    status: "success",
    type: "expense",
  },
  {
    id: 2,
    date: "2025-02-13",
    amount: -738,
    status: "success",
    type: "expense",
  },
  {
    id: 3,
    date: "2025-03-4",
    amount: -48,
    status: "success",
    type: "expense",
  },
];

let monthlyIncome = 2800;
let monthlyExpenses = 1029;

const today = new Date().toISOString().split("T")[0];
document.getElementById("incomeDate").value = today;
document.getElementById("expenseDate").value = today;

function openIncomeModal() {
  document.getElementById("incomeModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function openExpenseModal() {
  document.getElementById("expenseModal").style.display = "block";
  document.body.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";

    if (modalId === 'incomeModal') {
        document.getElementById('incomeForm').reset();
        document.getElementById('incomeDate').value = today;
    } else  {
        document.getElementById('expenseForm').reset();
        document.getElementById('expenseDate').value = today;
    }
}