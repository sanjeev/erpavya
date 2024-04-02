import React from 'react'
import IconEdit from '../../components/Icons/Edit'
import { Link } from 'react-router-dom'

export default function EditButton(props) {
  return (
    <Link className="hover:text-primary" to={props.to}>
        <IconEdit />
    </Link>
  )
}
