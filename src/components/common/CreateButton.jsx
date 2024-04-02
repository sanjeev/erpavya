import React from 'react'
import IconPlus from '../../components/Icons/Plus'
import { Link } from 'react-router-dom';

export default function CreateButton(props) {
  return (
    <Link className="ml-auto flex items-center gap-2 rounded bg-primary py-1 p-1 text-sm px-3 font-medium text-white hover:bg-opacity-80" to={props.to}>
        <IconPlus />
        Create New
    </Link>
  )
}
