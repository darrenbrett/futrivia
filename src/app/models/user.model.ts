export interface User {
  username: string;
  displayName: string;
  totalPoints: number;
  roles: [];
  featuresUnlocked: [];
  lastCompletedSet: number;
  lastCompletedTopic: string;
  bonusCompleted: boolean;
  points: number;
  level: string;
  roundsCompleted: number;
  roundsRemaining: number;
  level2RoundsCompleted: number;
  level3RoundsCompleted: number;
  lastScore: number;
  _id: string;
  topics: [];
}
