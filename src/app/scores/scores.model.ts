export interface Scores {
  score: string;
  awayTeam: string;
  awayTeamLogoUrl: string,
  homeTeam: string;
  homeTeamLogoUrl: string,
  awayTeamGoalTimes: string[];
  homeTeamGoalTimes: string[];
  goalScorers: {
    awayTeamScorers: string[
    ],
    homeTeamScorers: string[
    ]
  };
}

