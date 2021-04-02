export const COLUMNS = [
  {
    Header: "Id",
    Footer: 'id',
    accessor: 'id',
    disableFilters:true
  },
  {
    Header: "First Name",
    Footer: 'id',
    accessor: 'first_name'
  },
  {
    Header: "Last Name",
    Footer: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: "Points",
    Footer: 'Points',
    accessor: 'result'

  },
  {
    Header: "Country",
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: "Rate of fire",
    Footer: 'Rate of fire',
    accessor: 'rate_of_fire'
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: " ",
    Footer: ' ',
    disableSortBy: true,
    columns: [
      {
        Header: "Id",
        Footer: 'id',
        accessor: 'id',
        disableSortBy: true
      }
    ]
  },
  {
    Header:'Name',
    Footer: 'Name',
    disableSortBy: true,
    columns: [
      {
        Header: "First Name",
        Footer: 'id',
        accessor: 'first_name',

      },
      {
        Header: "Last Name",
        Footer: 'Last Name',
        accessor: 'last_name',
        sortable:false
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    disableSortBy: true,
    columns: [
      {
        Header: "Points",
        Footer: 'Points',
        accessor: 'result'

      },
      {
        Header: "Country",
        Footer: 'Country',
        accessor: 'country',
        disableSortBy: true,
      },
      {
        Header: "Rate of fire",
        Footer: 'Rate of fire',
        accessor: 'rate_of_fire'
      }
    ]
  }
]
