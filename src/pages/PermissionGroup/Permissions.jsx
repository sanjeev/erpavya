import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Modal from '../../components/Modal';
import { date_format } from '../../helpers/common';

const Permissions = ({ pg_name, permissions }) => {

  /*Modal stats start */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  /*Modal stats end */
  const title = `Permission Group: ${pg_name} - Permissions (${permissions.length})`;
  return (
    <div>
       <ReactTooltip
      id="view_permissions"
      content="View Permissions"
    />
    <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
      

    <div className="flex flex-wrap w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition dark:border-form-strokedark overflow-y-auto h-[300px]">
      
      {permissions.length === 0 ? (
        <span>No Permissions</span>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                EndPoint
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Method
              </th>

              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Migrated At
              </th>

            </tr>
          </thead>
          <tbody>
          {permissions.map((permission) => (
            <tr key={permission._id}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{permission.name}</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{permission.slug}</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{permission.method}</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{date_format(permission.createdAt)}</p>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>

    </Modal>

    {permissions.length === 0 ? (
        <span>No Permissions</span>
      ) : (
        <button onClick={openModal} data-tooltip-id="view_permissions">Total: {permissions.length}</button>
    )}
    </div> 
  );
};

export default Permissions;