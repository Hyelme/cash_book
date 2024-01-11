export const UrlPaths = {
    main: {
      index: '/main/*',
      shelf: '/',
      init: '/init',
    },
    cashbook: {
      index: '/cashbook/:years/*',
      cover: '/cover',
      goal: '/goals',
      budgetCheck: '/budgetCheck',
      financeList: '/financeList',
      monthly: {
        index: '/monthly/:months/*',
        calender: '/calender',
        weekly: '/weekly/:weeks',
        closing: '/closing',
      },
    },
  };
  