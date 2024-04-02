import React from 'react';

export default function Cart() {
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
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="9" cy="19" r="2" />{' '}
      <circle cx="17" cy="19" r="2" />{' '}
      <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
    </svg>
  );
}
