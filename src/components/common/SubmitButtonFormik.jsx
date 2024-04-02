import React from 'react'

export default function SubmitButtonFormik({isSubmitting, labelText}) {
  return (
    <button disabled={isSubmitting} type="submit" className="flex items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80">
      {isSubmitting ?  <div className='w-4 h-4 border animate-spin border-white border-t-[transparent] rounded-full mr-2'></div>:''}
      {labelText}
    </button>
  )
}
