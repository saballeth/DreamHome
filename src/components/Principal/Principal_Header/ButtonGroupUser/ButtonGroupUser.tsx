import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './ButtonGroupUser.css'

export default function ButtonGroupUser() {
  return (
    <ButtonGroup
      className='button__group'
      disableElevation
      variant="contained"
      orientation='vertical'
      aria-label="Disabled button group"
    >
      <Button className='button top'>Perfil</Button>
      <Button className='button bottom'>Cerrar sesion</Button>
    </ButtonGroup>
  );
}