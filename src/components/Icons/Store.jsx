import React from 'react';

export default function Store() {
  return (
    <svg
      className="h-5 w-5 text-[#64748B]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <path stroke="none" d="M0 0h24v24H0z" />{' '}
      <rect x="3" y="4" width="18" height="4" rx="2" />{' '}
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />{' '}
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}
