import React from 'react'
import { API_PUBLIC_BASE_URL } from '../../helpers/api_config.js';

export default function ImagePreview({...props}) {
  return (
    <div><img className='object-cover' src={`${API_PUBLIC_BASE_URL+props.image}`} {...props} /></div>
  )
}
