 import { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      targetAmount: Number(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAddGoal(newGoal);
    setFormData({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
