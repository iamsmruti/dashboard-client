import { Paper, Stack, Typography, Avatar } from '@mui/material'
import {useState} from 'react'

const InvoiceCard = () => {
  const [status, setStatus] = useState('processing')
  return (
    <Paper elevation={0} sx={{mr: 1, p: 2, border: '1px solid lightgray', minWidth: '250px'}}>
        <Typography variant='h6' sx={{fontWeight: 800}}>$1747.9</Typography>

        <Stack sx={{display: 'flex', justifyContent: 'space-between', mt: 2, alignItems: 'center'}} direction={'row'}>
            <Typography variant='body2' sx={{}}>Amount</Typography>
            {status === 'approved' ? (<Paper elevation={0} sx={{ml: 1, borderRadius: 'none', bgcolor: 'lightgreen', pt: 0.5, pb: 0.5, pl: 1, pr: 1, fontSize: 12}}>Approved</Paper>): (<Paper elevation={0} sx={{ml: 1, borderRadius: 'none', bgcolor: 'lightblue', pt: 0.5, pb: 0.5, pl: 1, pr: 1, fontSize: 12}}>Approved</Paper>)}
        </Stack>
        <Stack sx={{display: 'flex',mt: 1.5, alignItems: 'center'}} direction={'row'}>
            <Avatar sx={{ width: 60, height: 60, mr: 1}}/>
            <Stack direction={'column'}>
            <Typography sx={{mr: 'auto'}} variant='body1'  >Smruti Ranjan</Typography>
            <Stack direction={'row'}>
              <Typography variant='caption' sx={{fontWeight: 600, mr: 2}}>#5331</Typography>
              <Typography variant='caption' sx={{fontWeight: 400}}>Date: 25 May</Typography>
            </Stack>
            </Stack>
        </Stack>
    </Paper>
  )
}

export default InvoiceCard