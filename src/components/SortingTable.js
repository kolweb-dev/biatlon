import React, {useMemo} from 'react';
import {useTable, useSortBy} from "react-table";
import BIATLON_DATA from './BIATLON_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from "./columns";
import './table.css';

export const SortingTable = () => {

  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => BIATLON_DATA, [])


  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
  },useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
      {
        headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {
                    column.render('Header')
                  }
                  <span>
                    {column.disableSortBy ? '':''}
                    {column.isSorted ? (column.isSortedDesc ? '↑': '↓'): column.disableSortBy ? '':'↕'}
                    {/*{"↕"}*/}


                    {console.log(column.disableSortBy)}
                  </span>
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
