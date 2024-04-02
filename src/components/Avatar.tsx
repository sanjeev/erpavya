import React from 'react';

const Avatar = ({ name }) => {
  const words = name.split(' ').slice(0, 2);
  const initials = words.map(word => word[0]).join('');
  return (
    <span className="h-12 w-12 rounded-full">
        <div className="w-12 h-12 text-white flex items-center justify-center rounded-full avatar-bg">
            <span className="text-2xl font-semibold">{initials}</span>
        </div>
    </span>
  );
};

export default Avatar;