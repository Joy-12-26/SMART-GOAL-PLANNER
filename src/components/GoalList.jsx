import GoalItem from './GoalItem';

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.length === 0 ? <p>No goals added yet.</p> : null}
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
