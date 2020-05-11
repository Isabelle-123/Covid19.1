import React from 'react'
import { makeStyles, Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
    backgroundColor: 'lavenderblush',
  },
  tableHead: {
    fontWeight: '800',
    textAlign: 'center',
  },
})

const TableCoronaData = ({ coronaData }) => {
  const classes = useStyles()

  return (
    <>
      <header>
        <h1 align='center'>Covid19 information</h1>
        <h4 align='center' maxwidth='30px'>
          Follow Covid19 in the states of US. Data comes The Covid Tracking Project (https://covidtracking.com).
        </h4>
      </header>

      <TableContainer align='center'>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>US state</TableCell>
              <TableCell className={classes.tableHead}>Currently hospitalized</TableCell>
              <TableCell className={classes.tableHead}>Total deaths previous 3 days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coronaData.map((item) => (
              <TableRow key={item.state}>
                <TableCell align='center'>{item.state}</TableCell>
                <TableCell align='center'>{item.hospitalizedCurrently || 0} </TableCell>
                <TableCell align='center'>Coming feature</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableCoronaData
