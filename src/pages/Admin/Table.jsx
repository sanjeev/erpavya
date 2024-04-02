import React from 'react'
import Roles from './Roles'
import IconEdit from '../../components/Icons/Edit'
import IconUser from '../../components/Icons/User'
import DeleteButton from '../../components/common/DeleteButton'
import { Link } from 'react-router-dom'
import { roleHasVendor, date_format } from '../../helpers/common'
import CONFIG from './const'
import { Tooltip as ReactTooltip } from "react-tooltip"

const Table = ({ data, onDelete }) => {
  
    return (
      <div className="max-w-full overflow-x-auto">
        <ReactTooltip
          id="vendor-detail"
          content="Update Vendor Detail"
        />
        <ReactTooltip
          id="edit"
          content="Edit"
        />
        
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
                Created At
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
                  <p className="text-black dark:text-white">{date_format(value.createdAt)}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ value.status=='Active' ? 'bg-success text-success' : 'bg-danger text-danger'} `}>
                  {value.status}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  
                  {roleHasVendor(value) ? (
                      <Link data-tooltip-id="vendor-detail" className="hover:text-primary" to={CONFIG.action.vendor+value._id}>
                        <IconUser />
                      </Link>
                    ) : (
                    null
                  )}

                  <Link data-tooltip-id="edit" className="hover:text-primary" to={CONFIG.action.edit+value._id}>
                    <IconEdit />
                  </Link>

                  <DeleteButton item={value} onDelete={onDelete} />

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