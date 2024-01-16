const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* ClassName List */
const payPlanClassNameList = {
  tableCN: "table off-vline",
  thCN: "",
  trCN: "on-dot-line",
  tdCN: "",
};

const calendarClassNameList = {
  tableCN: "calendar on-dot-vline",
  thCN: "",
  trCN: "on-dot-line",
  tdCN: "",
};

const weeklyClosingClassNameList = {
  tableCN: "table width100 on-dot-vline",
  thCN: "",
  trCN: "",
  tdCN: "",
};

const oneColTableClassNameList = {
  tableCN: "table on-line",
  thCN: "",
  trCN: "",
  tdCN: "",
};

const fixedExpenditureClassNameList = {
  tableCN: "table fixed-expenditure-table",
  thCN: "",
  trCN: "",
  tdCN: "",
};

const memoClassNameList = {
  tableCN: "memo on-line",
  thCN: "",
  trCN: "",
  tdCN: "",
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
    ],
  },
];

const weeklyClosingData = [
  {
    firstWeek: <div>firstWeek</div>,
    secondWeek: <div>secondWeek</div>,
    thirdWeek: <div>thridWeek</div>,
    fourthWeek: <div>fourthWeek</div>,
    fifthWeek: <div>fifthWeek</div>,
  },
];

/* 1 * 2 테이블 */
const oneColTableColumn = [
  {
    Header: "컬럼 명",
    accessor: "columnName",
  },
];

export {
  months,
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
  weeklyClosingData,
  oneColTableColumn,
};
