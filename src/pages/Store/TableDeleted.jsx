import React from 'react';
import RestoreButton from '../../components/common/RestoreButton'
import { date_format } from '../../helpers/common';
import ImagePreview from '../../components/common/ImagePreview';
import { Link } from 'react-router-dom';
//import CONFIG from './const';
const Table = ({ data, onRestore }) => {

  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Meta Value
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Meta Key
            </th>

            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Meta Tag
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Created At
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
              {value.image ? (<ImagePreview image={value.image} width="50" />) : null}
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <p className="text-black dark:text-white">{value.meta_key}</p>
            </td>

            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <p className="text-black dark:text-white">{value.meta_tag}</p>
            </td>
             <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{date_format(value.createdAt)}</p>
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