

export function getDaysLeft(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

export function isOverdue(goal) {
  return getDaysLeft(goal.deadline) < 0 && goal.savedAmount < goal.targetAmount;
}

export function isWarning(goal) {
  const days = getDaysLeft(goal.deadline);
  return days <= 30 && days >= 0 && goal.savedAmount < goal.targetAmount;
}
