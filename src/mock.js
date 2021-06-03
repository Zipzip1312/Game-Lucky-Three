export const status = {
  app: {
    rulesAccepted: true,
    form: {
      sex: '',
      birthday: '',
      messenger: '',
      // sex: 1,
      // birthday: '1985-12-13',
      // messenger: 'telegram',
      disabled: false
    },
    formFilled: false,
    inviteLink: '',
    invitesLeft: 2
  },
  game: {
    picksAvailable: 3,
    timesToShuffle: 3,
    totalScore: 0,
    currentScore: [],
    selectedCards: [],
    gameResults: []
  }
}

export const _status = {
  app: {
    rulesAccepted: true,
    form: {},
    formFilled: true,
    invitesLeft: 0
  },
  game: {
    totalScore: 10,
    scores: [1000, 500, 250, 0, 100, 10, 50, 50, 25, 25, 100, 10, 0, 0, 250, 0],
    currentScore: [
      {
        index: 5,
        score: 0
      },
      {
        index: 3,
        score: 10
      },
      {
        index: 15,
        score: 0
      }
    ],
    selectedCards: [3, 5, 15],
    gameResults: [
      {
        score: 1000,
        won: false
      },
      {
        score: 500,
        won: false
      },
      {
        score: 250,
        won: false
      },
      {
        score: 0,
        won: true
      },
      {
        score: 100,
        won: false
      },
      {
        score: 10,
        won: true
      },
      {
        score: 50,
        won: false
      },
      {
        score: 50,
        won: false
      },
      {
        score: 25,
        won: false
      },
      {
        score: 25,
        won: false
      },
      {
        score: 100,
        won: false
      },
      {
        score: 10,
        won: false
      },
      {
        score: 0,
        won: false
      },
      {
        score: 0,
        won: false
      },
      {
        score: 250,
        won: false
      },
      {
        score: 0,
        won: true
      }
    ]
  }
}
