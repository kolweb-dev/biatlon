import React, {useMemo} from 'react';
import {useTable} from "react-table";
import BIATLON_DATA from './BIATLON_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import './table.css';

export const BasicTable = () => {

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
    rows,
    prepareRow
  } = tableInstance;


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
        rows.map(row => {
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
      <tfoot>
      {
        footerGroups.map(footerGroup => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {
              footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>
                  {
                    column.render('Footer')
                  }
                </td>
              ))
            }
          </tr>
        ))
      }
      </tfoot>
    </table>
  )
}
