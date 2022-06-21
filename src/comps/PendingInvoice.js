import { MoreVert } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import InvoiceCard from './InvoiceCard';

const PendingInvoice = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Stack sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}} direction={'row'}>
        <Box>
          <Typography sx={{ mb: 1 }} variant="h5">
            Pending Invoice
          </Typography>
          <Typography sx={{ fontWeight: 400 }} variant="caption">
            Invoices that are currently pending
          </Typography>
        </Box>

        <Stack direction={'row'}>
          <IconButton sx={{border: '0.5px solid gray', borderRadius: '10%'}}>
            <MoreVert />
          </IconButton>
        </Stack>
      </Stack>

      <Box className='caraousal' sx={{display: 'flex', overflow: 'scroll', width: '100%', mt: 1}}>
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </Box>
    </Box>
  )
}

export default PendingInvoice