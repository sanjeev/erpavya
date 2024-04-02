import React from 'react'
import { Link } from 'react-router-dom';

export default function BackButton(props) {
  return (
    <Link className="flex items-center gap-2 rounded bg-primary py-1 p-1 text-sm px-4.5 font-medium text-white hover:bg-opacity-80" to={props.to}>
      Back
    </Link>
  )
}
