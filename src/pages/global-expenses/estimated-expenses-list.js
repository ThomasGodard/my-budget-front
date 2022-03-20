import { useEffect, useState } from 'react'
import { fetchEstimatedExpenses } from '../../services/estimated-espenses.service'
import { Card, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { DeleteForeverSharp, EditSharp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const EDIT = 'edit'
const DELETE = 'delete'

const EstimatedExpensesList = () => {
  const [ transactions, setTransactions ] = useState([])

  useEffect(() => {
    const subscription = fetchEstimatedExpenses().subscribe(data => setTransactions(data))
    return () => subscription.unsubscribe()
  }, [])

  const handleActionButtonClick = (event) => {
    event.stopPropagation()
    const { id, action } = event.currentTarget.dataset
    console.log(`click ${action}`, event, id)
  }


  const CellActionButtons = ({ id }) => {
    return (
      <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>
        <IconButton
          color="primary"
          data-id={id}
          data-action={EDIT}
          onClick={handleActionButtonClick}
        >
          <EditSharp/>
        </IconButton>
        <IconButton
          color="error"
          data-id={id}
          data-action={DELETE}
          onClick={handleActionButtonClick}
        >
          <DeleteForeverSharp/>
        </IconButton>
      </Stack>
    );
  }

  const columnsHeader = [
    { key: 1, label: 'Libelle', align: 'inherit'},
    { key: 2, label: 'Date estimé de la transaction', align: 'inherit' },
    { key: 3, label: 'Montant', align: 'inherit' },
    { key: 4, label: 'Action', align: 'right' }
  ];
  
  

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columnsHeader.map(({ key, label, align }) => 
                (<TableCell key={key} align={align}>{label}</TableCell>)
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(({ id, label, startDate, amount }) => (
              <TableRow key={id}>
                <TableCell>{label}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell align={"right"}>
                  <CellActionButtons id={id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default EstimatedExpensesList


