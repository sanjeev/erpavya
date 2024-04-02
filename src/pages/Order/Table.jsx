import React from 'react'
import IconEye from '../../components/Icons/Eye'
import DeleteButton from '../../components/common/DeleteButton'
import { Link } from 'react-router-dom'
import { roleHasVendor, date_format } from '../../helpers/common'
import CONFIG from './const'
import { Tooltip as ReactTooltip } from "react-tooltip"

const Table = ({ data, onDelete }) => {
  
    return (
      <div className="max-w-full overflow-x-auto">
        <ReactTooltip
          id="view-detail"
          content="View Detail"
        />
        
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Customer
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Order Number
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Sub Total
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Total
              </th>
              
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Created At
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Payment Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {data.length ? data.map((value) => {
            return (
            <tr key={value._id}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{`${value.user.first_name} ${value.user.last_name}`}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.order_number}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.subtotal}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{value.total}</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{date_format(value.order_date)}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ value.status=='Pending' ? 'bg-danger text-danger' : 'bg-success text-success'} `}>
                  {value.status}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ value.status=='Pending' ? 'bg-danger text-danger' : 'bg-success text-success'} `}>
                  {value.payment_status}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">

                  <Link data-tooltip-id="view-detail" className="hover:text-primary" to={CONFIG.slug+value._id}>
                    <IconEye />
                  </Link>

                </div>
              </td>
            </tr>
          )}) : <tr><td colSpan={10}><div className='text-center mt-5 mb-5'>Empty</div></td></tr> }
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;  