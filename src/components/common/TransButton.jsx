import React from 'react'

export default function CancelButton({onClick, labelText}) {
  return (
    <button 
    onClick={onClick}
    type="button" 
    className="flex items-center gap-2 rounded border border-primary py-2 px-4.5 font-medium text-primary hover:bg-opacity-80">
      {labelText}
    </button>
  )
}
