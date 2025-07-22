 import { useState } from 'react';

function DepositForm({ goals, onUpdateGoal }) {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const updatedAmount = goal.savedAmount + Number(amount);
    onUpdateGoal(goalId, { savedAmount: updatedAmount });
    setGoalId('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
