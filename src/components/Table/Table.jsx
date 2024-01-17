import { useTable } from "react-table";
import "./Table.css";

/**
 * {
  tableCN,
  isThColspan,
  isAllRowspan,
  colItem,
  rowItem,
  rowSize,
  colHeight,
  rowRatio,
}
 */
const useInstance = (instance) => {
  const { allColumns } = instance;

  let rowSpanHeaders = [];

  allColumns.forEach((column, i) => {
    const { id, enableRowSpan } = column;

    if (enableRowSpan !== undefined) {
      rowSpanHeaders = [
        ...rowSpanHeaders,
        { id, topCellValue: null, topCellIndex: 0 },
      ];
    }
  });

  Object.assign(instance, { rowSpanHeaders });
};

const Table = ({ classNameList, columns, data, colgroupList }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    rowSpanHeaders,
  } = useTable({ columns, data }, (hooks) => {
    // if (useInstance !== undefined) {
    hooks.useInstance.push(useInstance);
    // }
  });

  // console.log("Data : " + JSON.stringify(data, null, 2));

  return (
    <table className={classNameList.tableCN} {...getTableProps()}>
      {colgroupList !== undefined && (
        <colgroup>
          {colgroupList.map((col, index) => (
            <col key={index} width={`${col}%`} />
          ))}
        </colgroup>
      )}
      <thead>
        {rowSpanHeaders.length === 0 &&
          headerGroups.map((headerGroup) => (
            <tr
              // className={classNameList.trCN}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, index) => {
                return (
                  <th
                    className={classNameList.thCN[index]}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);

          for (let j = 0; j < row.allCells.length; j++) {
            let cell = row.allCells[j];
            let rowSpanHeader = rowSpanHeaders.find(
              (x) => x.id === cell.column.id
            );

            if (rowSpanHeader !== undefined) {
              if (
                rowSpanHeader.topCellValue === null ||
                rowSpanHeader.topCellValue !== cell.value
              ) {
                cell.isRowSpanned = false;
                rowSpanHeader.topCellValue = cell.value;
                rowSpanHeader.topCellIndex = i;
                cell.rowSpan = 1;
              } else {
                rows[rowSpanHeader.topCellIndex].allCells[j].rowSpan++;
                cell.isRowSpanned = true;
              }
            }
          }
          return null;
        })}
        {rows.map((row) => {
          return (
            <tr className={classNameList.trCN} {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                if (cell.isRowSpanned) return null;
                else
                  return (
                    <td
                      className={classNameList.tdCN[index]}
                      rowSpan={cell.rowSpan}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
