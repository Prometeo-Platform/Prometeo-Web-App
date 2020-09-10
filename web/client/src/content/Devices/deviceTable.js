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

function DeviceTable() {
  const headerData = [
    {
      header: 'Device ID',
      key: 'id',
    },
    {
      header: 'Model',
      key: 'model',
    },
    {
      header: 'Version',
      key: 'version',
    },
    {
      header: 'Actions',
      key: 'actions',
    },
  ];
  
  const rowData = [
    {
      id: '0001',
      model: 'Model 1',
      version: '1.0',
      actions: '',
    },
    {
      id: '0002',
      model: 'Model 1',
      version: '1.1',
      actions: '',
    },
    {
      id: '0003',
      model: 'Model 2',
      version: '2.0',
      actions: '',
    },
    {
      id: '0004',
      model: 'Model 2',
      version: '2.1',
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
            <TableContainer title="Devices">
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

export default DeviceTable;
