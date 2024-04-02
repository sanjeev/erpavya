import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Modal from '../../components/Modal';

const PermissionGroups = ({ permissiongroups }) => {

  /*Modal stats start */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  /*Modal stats end */
  const title = `Permission Groups (${permissiongroups.length})`;
  return (
    <div>
       <ReactTooltip
      id="view_permissiongroups"
      content="View Permission Groups"
    />
    <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
      

    <div className="flex flex-wrap w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition dark:border-form-strokedark overflow-y-auto h-[300px]">
      
      {permissiongroups.length === 0 ? (
        <span>No Permission Groups</span>
      ) : (
        permissiongroups.map((permissiongroup, i) => (
          <div key={permissiongroup._id} className="w-1/3 mb-4">
            <label htmlFor={permissiongroup._id} className="mb-3 block text-black dark-text-white">
              <span className="text-black dark:text-white ml-3">{permissiongroup.name}</span>
            </label>
          </div>
        ))
      )}
    </div>

    </Modal>

    {permissiongroups.length === 0 ? (
        <span>No Permission Groups</span>
      ) : (
        <button onClick={openModal} data-tooltip-id="view_permissiongroups">Total: {permissiongroups.length}</button>
    )}
    </div> 
  );
};

export default PermissionGroups;