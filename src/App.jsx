 import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoalList from './components/GoalList'
import GoalForm from './components/GoalForm'
import DepositForm from './components/DepositForm'
import Overview from './components/Overview'

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/goals')
      .then(res => setGoals(res.data))
      .catch(err => console.error(err))
  }, [])

  const addGoal = (newGoal) => {
    axios.post('http://localhost:3000/goals', newGoal)
      .then(res => setGoals([...goals, res.data]))
  }

  const updateGoal = (id, updatedFields) => {
    axios.patch(`http://localhost:3000/goals/${id}`, updatedFields)
      .then(res => {
        setGoals(goals.map(goal => goal.id === id ? res.data : goal))
      })
  }

  const deleteGoal = (id) => {
    axios.delete(`http://localhost:3000/goals/${id}`)
      .then(() => setGoals(goals.filter(goal => goal.id !== id)))
  }

  return (
    <div className="app-container">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onUpdateGoal={updateGoal} />
      <GoalList goals={goals} onUpdateGoal={updateGoal} onDeleteGoal={deleteGoal} />
    </div>
  )
}

export default App
