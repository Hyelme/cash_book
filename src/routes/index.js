export const UrlPaths = {
    main: {
      index: '/main/*',
      shelf: '/',
      init: '/init',
    },
    cashbook: {
      index: '/cashbook/:year/*',
      cover: '/cover',
      goal: '/goals',
      budgetCheck: '/budgetCheck',
      financeList: '/financeList',
      monthly: {
        index: '/monthly/:month/*',
        calendar: '/calendar',
        weekly: '/weekly/:week',
        closing: '/closing',
      },
    },
  };
  