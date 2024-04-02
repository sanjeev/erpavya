import React from 'react';
import Swal from 'sweetalert2';
import IconRefresh from '../../components/Icons/Refresh'

function RestoreButton({ item, onRestore }) {
  const handleRestore = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to restore ${item.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, restore it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        onRestore(item._id);
      }
    });
  };

  return (
    <button className="hover:text-primary" onClick={handleRestore}>
      <IconRefresh />
    </button>
  );
}

export default RestoreButton;