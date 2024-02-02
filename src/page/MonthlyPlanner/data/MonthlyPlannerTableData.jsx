import WeeklyClosingCell from "../components/WeeklyClosingCell/WeeklyClosingCell";

/* ClassName List */
const payPlanClassNameList = {
  tableCN: "table vertical-solid-line vertical-bold horizontal-off-line",
  thCN: "",
  theadTrCN: "",
  tbodyTrCN: "bottom-dash-line bottom-middle",
  tdCN: ["right-solid-line right-bold", "right-dash-line right-middle", ""],
};

const calendarClassNameList = {
  tableCN:
    "calendar vertical-solid-line vertical-middle horizontal-dash-line horizontal-middle",
  thCN: [
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "",
  ],
  theadTrCN: "bottom-solid-line bottom-middle",
  tbodyTrCN: "bottom-dash-line bottom-middle",
  tdCN: [
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "right-dash-line right-middle",
    "",
  ],
};

const weeklyClosingClassNameList = {
  tableCN:
    "table vertical-solid-line top-thin bottom-middle horizontal-off-line",
  thCN: [
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
    "vertical-solid-line top-thin bottom-thin horizontal-dash-line horizontal-thin",
  ],
  theadTrCN: "",
  tbodyTrCN: "top-solid-line top-middle background-color-ffe4a9",
  tdCN: [
    "horizontal-dash-line horizontal-thin",
    "horizontal-dash-line horizontal-thin",
    "horizontal-dash-line horizontal-thin",
    "horizontal-dash-line horizontal-thin",
    "horizontal-dash-line horizontal-thin",
    "horizontal-dash-line horizontal-thin",
  ],
};

const oneColTableClassNameList = {
  tableCN: "table one-table one-table-middle",
  thCN: ["bottom-dash-line bottom-middle"],
  theadTrCN: "",
  tbodyTrCN: "",
  tdCN: "",
};

const fixedExpenditureClassNameList = {
  tableCN: "table vertical-solid-line vertical-bold",
  thCN: ["bottom-solid-line bottom-middle"],
  theadTrCN: "",
  tbodyTrCN: "",
  tdCN: "",
};

const memoClassNameList = {
  tableCN: "memo vertical-solid-line vertical-thin",
  thCN: ["bottom-solid-line bottom-thin"],
  theadTrCN: "",
  tbodyTrCN: "",
  tdCN: ["background-color-white8c"],
};

/* 월간 계획 Table 데이터 */
const payPlanColumn = [
  {
    Header: "대분류",
    accessor: "firstLabel",
    enableRowSpan: true,
  },
  {
    Header: "중분류",
    accessor: "secondLabel",
  },
  {
    Header: "아이템",
    accessor: "item",
  },
];

const payPlanData = [
  {
    firstLabel: "월급",
    secondLabel: "기본급",
    item: "",
  },
  {
    firstLabel: "월급",
    secondLabel: "보너스",
    item: "",
  },
];

/* 캘린더 Table 데이터 */
const calendarColumns = [
  {
    Header: "일요일",
    accessor: "sun",
  },
  {
    Header: "월요일",
    accessor: "mon",
  },
  {
    Header: "화요일",
    accessor: "tue",
  },
  {
    Header: "수요일",
    accessor: "wed",
  },
  {
    Header: "목요일",
    accessor: "thu",
  },
  {
    Header: "금요일",
    accessor: "fri",
  },
  {
    Header: "토요일",
    accessor: "sat",
  },
];

/* 주간 결산 Table 데이터 */
const weeklyClosingColumns = [
  {
    Header: "주간 결산",
    columns: [
      {
        Header: "1주 차",
        accessor: "firstWeek",
        cell: (item) => item,
      },
      {
        Header: "2주 차",
        accessor: "secondWeek",
        cell: (item) => item,
      },
      {
        Header: "3주 차",
        accessor: "thirdWeek",
        cell: (item) => item,
      },
      {
        Header: "4주 차",
        accessor: "fourthWeek",
        cell: (item) => item,
      },
      {
        Header: "5주 차",
        accessor: "fifthWeek",
        cell: (item) => item,
      },
      {
        Header: "6주 차",
        accessor: "sixthWeek",
        cell: (item) => item,
      },
    ],
  },
];

// const weeklyClosingData = [
//   {
//     firstWeek: <WeeklyClosingCell />,
//     secondWeek: <WeeklyClosingCell />,
//     thirdWeek: <WeeklyClosingCell />,
//     fourthWeek: <WeeklyClosingCell />,
//     fifthWeek: <WeeklyClosingCell />,
//     sixthWeek: <WeeklyClosingCell />,
//   },
// ];

/* 1 * 2 테이블 */
const oneColTableColumn = [
  {
    Header: "컬럼 명",
    accessor: "columnName",
  },
];

export {
  payPlanClassNameList,
  calendarClassNameList,
  weeklyClosingClassNameList,
  oneColTableClassNameList,
  fixedExpenditureClassNameList,
  memoClassNameList,
  payPlanColumn,
  payPlanData,
  calendarColumns,
  weeklyClosingColumns,
  //  weeklyClosingData,
  oneColTableColumn,
};
