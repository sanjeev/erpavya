import React from 'react';
import IconEdit from '../../components/Icons/Edit';
import DeleteButton from '../../components/common/DeleteButton';
import { Link } from 'react-router-dom';
import { date_format } from '../../helpers/common';
import ImagePreview from '../../components/common/ImagePreview';
import CONFIG from './const';

const Table = ({ data, onDelete }) => {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              NAME
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
              SLUG
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
              TERMS
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
              PUBLISHED
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              CREATED AT
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
              ACTIONS
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
                <p className="text-black dark:text-white">{value.slug}</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <p className="text-black dark:text-white"></p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ value.status=='Active' ? 'bg-success text-success' : 'bg-danger text-danger'} `}>
                  {value.status}
                </p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{date_format(value.createdAt)}</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  <Link className="hover:text-primary" to={CONFIG.action.edit+value._id}>
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
