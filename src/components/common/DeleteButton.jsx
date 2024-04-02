import React from 'react';
import Swal from 'sweetalert2';
import IconDelete from '../../components/Icons/Delete'
import { Tooltip as ReactTooltip } from "react-tooltip";

function DeleteButton({ item, onDelete }) {
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${item.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the deletion
        onDelete(item._id); // Pass the item ID to the onDelete callback
      }
    });
  };

  return (
    <>
    <ReactTooltip
      id="delete"
      content="Delete"
    />
    <button data-tooltip-id="delete" className="hover:text-primary" onClick={handleDelete}>
      <IconDelete />
    </button>
    </>
  );
}

export default DeleteButton;