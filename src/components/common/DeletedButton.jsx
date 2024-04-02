import React from 'react'
import IconDelete from '../../components/Icons/Delete'
import { Link } from 'react-router-dom';

export default function DeletedButton(props) {
  return (
    <Link className="flex items-center gap-2 rounded bg-danger py-1 p-1 text-sm px-3 font-medium text-white hover:bg-opacity-80" to={props.to}>
        <IconDelete />
        Deleted
    </Link>
  )
}
