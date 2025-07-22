import { getDaysLeft, isOverdue, isWarning } from '../utils/helpers';

function GoalItem({ goal, onUpdateGoal, onDeleteGoal }) {
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
  const remaining = goal.targetAmount - goal.savedAmount;
  const daysLeft = getDaysLeft(goal.deadline);

  let status = '';
  if (progress >= 100) {
    status = '✅ Completed';
  } else if (isOverdue(goal)) {
    status = '❌ Overdue';
  } else if (isWarning(goal)) {
    status = '⚠️ Due Soon';
  }

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p><strong>Category:</strong> {goal.category}</p>
      <p><strong>Target:</strong> ${goal.targetAmount}</p>
      <p><strong>Saved:</strong> ${goal.savedAmount}</p>
      <p><strong>Remaining:</strong> ${remaining}</p>
      <p><strong>Deadline:</strong> {goal.deadline} ({daysLeft} days left)</p>
      <p><strong>Status:</strong> {status}</p>
      <div style={{ background: '#ccc', width: '100%', height: '10px' }}>
        <div style={{ background: '#28a745', height: '100%', width: `${progress}%` }} />
      </div>
      <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalItem;
