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

function FirefighterTable() {
  const headerData = [
    {
      header: 'Firefighter ID',
      key: 'id',
    },
    {
      header: 'First name',
      key: 'code',
    },
    {
      header: 'Last name',
      key: 'type',
    },
    {
      header: 'Email',
      key: 'team',
    },
    {
      header: 'Actions',
      key: 'actions',
    },
  ];
  
  const rowData = [
    {
      id: 'GRAF001',
      code: 'Joan',
      type: 'Herrera',
      team: 'graf001@graf.cat',
      actions: '',
    },
    {
      id: 'GRAF002',
      code: 'Marco',
      type: 'Rodriguez',
      team: 'graf002@graf.cat',
      actions: '',
    },
    {
      id: 'GRAF003',
      code: 'Marisol',
      type: 'Santillan',
      team: 'graf003@graf.cat',
      actions: '',
    },
    {
      id: 'GRAF004',
      code: 'Upkarno',
      type: 'Lidderez',
      team: 'graf004@graf.cat',
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
            <TableContainer title="Firefighters">
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
                  <Button onClick={console.log('Button click')}>Add Firefighter</Button>
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

export default FirefighterTable;
