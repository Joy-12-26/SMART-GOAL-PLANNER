import { getDaysLeft, isOverdue } from '../utils/helpers';

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;
  const overdue = goals.filter(g => isOverdue(g));

  return (
    <div>
      <h2>Overview</h2>
      <p><strong>Total Goals:</strong> {totalGoals}</p>
      <p><strong>Total Saved:</strong> ${totalSaved}</p>
      <p><strong>Completed Goals:</strong> {completed}</p>
      <p><strong>Overdue Goals:</strong> {overdue.length}</p>
    </div>
  );
}

export default Overview;
