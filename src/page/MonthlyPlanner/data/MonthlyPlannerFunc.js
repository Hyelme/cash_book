const getSaveData = (key) => JSON.parse(localStorage.getItem(key));

const initPayPlanCell = (key, data) => {
  if(data !== null && data[key] !== undefined) return data[key];
  return 0;
};

const initOneTableColumn = (header, accessor) => {
  return [{ Header: header, accessor: accessor }];
};
  
const initOneTableData = (accessor, data) => {
  const newData = {};
  newData[accessor] = data;

  return [newData];
};

const initFixedExpenditure = (year, month) => {
  const saveData = localStorage.getItem(year + ":" + month + ":fixExp");

  if (saveData === null || saveData === undefined) {
    return [
      {
        column: [
          {
            Header: "고정 지출",
            accessor: "fixExpenditure",
          },
        ],
        data: [
          {
            fixExpenditure: (
              <div>저장된 고정 지출 데이터가 존재하지 않습니다.</div>
            ),
          },
        ],
      },
    ];
  }

  return saveData;
};

const setLocalStorage = (key, data, type) => {
  const originData = getSaveData(key);

  if (originData !== null) {
    originData[type] = data;
    localStorage.setItem(key, JSON.stringify(originData));
  } else {
    const newData = {};
    newData[type] = data;
    localStorage.setItem(key, JSON.stringify(newData));
  }
};


export {
  getSaveData,
  initPayPlanCell,
  initOneTableColumn,
  initOneTableData,
  initFixedExpenditure,
  setLocalStorage
}