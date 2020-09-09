import React from 'react';
import {
  Button,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from  'carbon-components-react';
import Edit20 from "@carbon/icons-react/lib/edit/20";
import Delete20 from "@carbon/icons-react/lib/delete/20";

function EventTable() {
  const headerData = [
    {
      header: 'Internal ID',
      key: 'id',
    },
    {
      header: 'Event code',
      key: 'code',
    },
    {
      header: 'Event type',
      key: 'type',
    },
    {
      header: 'Firefighters',
      key: 'team',
    },
    {
      header: 'State',
      key: 'state',
    },
    {
      header: 'Actions',
      key: 'actions',
    },
  ];
  
  const rowData = [
    {
      id: 1,
      code: 'REMS-08-02-2020',
      type: 'Controlled burn',
      team: 10,
      state: 'On course',
      actions: '',
    },
    {
      id: 2,
      code: 'REMS-09-02-2020',
      type: 'Controlled burn',
      team: 10,
      state: 'On course',
      actions: '',
    },
    {
      id: 3,
      code: 'REMS-10-02-2020',
      type: 'Controlled burn',
      team: 10,
      state: 'On course',
      actions: '',
    },
    {
      id: 4,
      code: 'REMS-11-02-2020',
      type: 'Controlled burn',
      team: 10,
      state: 'On course',
      actions: '',
    },
  ];
  return (
    <div className="bx--grid bx--grid--full-width dashboard-content sensors-page">
      <div className="bx--row sensors-page__r2">
        <div className="bx--col-lg-16">
          
          <DataTable isSortable
          rows={rowData}
          headers={headerData}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getToolbarProps,
            onInputChange,
            getTableContainerProps,
          }) => (
            <TableContainer title="Events">
              <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                <TableToolbarContent>
                  <TableToolbarSearch onChange={onInputChange} />
                  <TableToolbarMenu>
                    <TableToolbarAction
                      onClick={console.log('Action 1 Click')}
                      primaryFocus>
                      Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={console.log('Action 2 Click')}>
                      Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={console.log('Action 3 Click')}>
                      Action 3
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button onClick={console.log('Button click')}>Add Event</Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table size='normal' {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map(header => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>)}
          />

        </div>
      </div>
      </div>
  );
}

export default EventTable;
