import React from 'react';
import Roles from './Roles';
import RestoreButton from '../../components/common/RestoreButton'
import { date_format } from '../../helpers/common';

const Table = ({ data, onRestore }) => {
    
    return (
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Phone
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Roles
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Deleted At
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {data.length ? data.map((value) => (
            <tr key={value._id}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <p className="text-black dark:text-white">{value.name}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.email}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{value.phone}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <Roles roles={value.roles} />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{date_format(value.deletedAt)}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ value.status=='Active' ? 'bg-success text-success' : 'bg-danger text-danger'} `}>
                  {value.status}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  
                <RestoreButton item={value} onRestore={onRestore} />

                </div>
              </td>
            </tr>
          )) : <tr><td colSpan={10}><div className='text-center mt-5 mb-5'>Empty</div></td></tr> }
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;  