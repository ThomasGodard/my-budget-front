import { useEffect, useState } from 'react'
import { fetchEstimatedExpenses } from '../../services/estimated-espenses.service'
import { Card, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { DeleteForeverSharp, EditSharp, CheckSharp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const EstimatedExpensesList = () => {
  const [ transactions, setTransactions ] = useState([])

  const columnsHeader = [
    { label: 'Libelle', align: 'inherit'},
    { label: 'Date estimé de la transaction', align: 'inherit' },
    { label: 'Montant', align: 'inherit' },
    { label: 'Action', align: 'center' }
  ];
  
  useEffect(() => {
    const subscription = fetchEstimatedExpenses().subscribe(data => setTransactions(data))
    return () => subscription.unsubscribe()
  }, [])

  const handleValidateButtonClick = (event) => {
    event.stopPropagation()
    const { id } = event.currentTarget.dataset
    console.log(`click Validate`, event, id)
  }  
  
  const handleEditButtonClick = (event) => {
    event.stopPropagation()
    const { id } = event.currentTarget.dataset
    console.log(`click Edit`, event, id)
  }

  const handleDeleteButtonClick = (event) => {
    event.stopPropagation()
    const { id } = event.currentTarget.dataset
    console.log(`click Delete`, event, id)
  }


  const CellActionButtons = ({ id }) => {
    return (
      <Stack direction={'row'} spacing={2} justifyContent={'space-evenly'}>
        <IconButton
          color="success"
          data-id={id}
          onClick={handleValidateButtonClick}
        >
          <CheckSharp/>
        </IconButton>
        <IconButton
          color="primary"
          data-id={id}
          onClick={handleEditButtonClick}
        >
          <EditSharp/>
        </IconButton>
        <IconButton
          color="error"
          data-id={id}
          onClick={handleDeleteButtonClick}
        >
          <DeleteForeverSharp/>
        </IconButton>
      </Stack>
    );
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columnsHeader.map(({ label, align }) => 
                (<TableCell key={label} align={align}>{label}</TableCell>)
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(({ id, label, startDate, amount }) => (
              <TableRow key={id}>
                <TableCell sx={{ width: '40%' }}>{label}</TableCell>
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


