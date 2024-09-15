import TextButton from "./components/buttons"
import ExpenseList from "./components/expenseList"

function App() {
  return (
    <>
      <TextButton text="Visualizar Despesas" />
      <TextButton text="Cadastrar Despesa" />
      <ExpenseList/>
    </>
  )
}

export default App
