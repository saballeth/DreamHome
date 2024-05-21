import Swal from 'sweetalert2';

export default function AlertError({ message }:{message:any}) {
  return (
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'ok'
    })
  );
}