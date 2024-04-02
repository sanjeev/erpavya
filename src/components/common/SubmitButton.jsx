import React from 'react'

export default function SubmitButton({labelText}) {
  return (
    <button type="submit" className=" items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80">
      {labelText}
    </button>
  )
}
