#Simple Expense Tracker

This is a React-based expense tracker application that allows users to:

- Add expenses with details like amount, category, and date.
- View all added expenses in a list format.
- Search/filter expenses by category and date range.
- Clear search filter using dedicated button
- Display a bar chart visualization of spending by category upon request.

---

## Problem Breakdown

### Features:
1. **Add Expenses:**
   - Fields : Amount, Category, Date.
   - Real-time addition to the list of expenses.
2. **View Expenses**
   - Display all expenses added by the user.
   - Inform users when no expenses are available.
3. **Search/Filter Expenses**
   - Filter by category.
   - Filter by date range (start and end date).
   - Reset filters using a "Clear Search" button.
   - Inform users when no matching expenses are found.
4. **View Results**
   - Bar chart visualization of spending grouped by category.
   - Toggle the chart visibility using a "Show Results" button.

---

## UI Design
The interface uses **Tailwind CSS** for consistent and responsive styling:

- **Sections:**
 - Adding expenses.
 - Viewing all expenses.
 - Searching expenses.
 - Viewing results through a bar chart.
- **User Feedback:**
 - Alert saying that enter appropriate fields for empty and negatiive amount fields

---

##Core Functionalities

1. **State Management:**
 - React 'useState' is used to manage:
   - Expenses list
   - Form data for adding expenses.
   - Search filters (category and date range).
   - Chart visibility toggle.

2. **Dynamic Rendering:**
 - Expense lists are rendered dynamically based on current state.
 - Filters are applied dynamically to display only relevant expenses.


3. **Chart Logic:**
 - Uses the **Recharts** library to:
   - Group expenses by category.
   - Visualize spending totals as a bar chart.

4. **Clear Button:**
 - Resets the search form and displays all expenses

---

## Steps to Run and Test the project

### 1. Setup the Project

- Clone or download the repository.
- Navigate to the project folder:
  ```bash
  cd <project-folder>
  npm install
  npm run dev
  http://localhost:5173

## Optional Deployment
npm run build
