import React, {useMemo} from 'react';
import {useTable,usePagination} from "react-table";
import BIATLON_DATA from './BIATLON_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import './table.css';

export const PaginationTable = () => {

  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => BIATLON_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    page,
    nextPage,
    perviousPage ,
    prepareRow
  } = useTable({
    columns,
    data,
  },
    usePagination
    );


  return (
    <table {...getTableProps()}>
      <thead>
      {
        headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {
                    column.render('Header')
                  }
                </th>
              ))
            }
          </tr>
        ))
      }
      </thead>
      <tbody {...getTableBodyProps()}>
      {
        page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
                row.cells.map( cell => {
                  return <td {...cell.getCellProps()}>
                    {
                      cell.render('Cell')
                    }
                  </td>
                })
              }

            </tr>
          )
        })
      }
      </tbody>
      <div>
        <button onClick={()=> perviousPage()}>Pervious</button>
        <button onClick={()=> nextPage()}>Next</button>
      </div>
    </table>
  )
}
