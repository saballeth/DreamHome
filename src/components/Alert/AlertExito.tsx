import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

export default function IconAlerts({mensaje}:{mensaje:string}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}>{mensaje}</Alert>
    </Stack>
  );
}