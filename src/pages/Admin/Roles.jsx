import React from 'react';
 const Roles = ({ roles }) => {
  return (
    <div>
    {roles.length === 0 ? (
        <span>No Roles</span>
      ) : (
      roles.map((role, index) => (
      <span key={index} className="inline-flex rounded-full bg-opacity-10 py-1 px-3 mb-1 mr-1 text-sm font-medium bg-success text-success">{role.name}</span>
      ))
    )}
    </div> 
  );
};

export default Roles;