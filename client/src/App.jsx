import { useEffect, useState } from "react"
import ExpenseList from "./components/expenseList"
import {TextButton} from "./components/buttons"
import Header from "./components/header"

function App() {
  return (
    <>
      <Header/>
      <ExpenseList/>
    </>
  )
}

export default App
