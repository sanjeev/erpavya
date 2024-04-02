import EditButton from '../../../../components/common/EditButton'
import { date_format, replaceStr } from '../../../../helpers/common'
import { Tooltip as ReactTooltip } from "react-tooltip"
import DeleteButton from '../../../../components/common/DeleteButton';
import CONFIG from '../../const';

const Table = ({ data, vendor_id, onDelete }) => {
  const editUrl = replaceStr(CONFIG.store_address.page.edit, ":vendor_id", vendor_id);
  
    return (
      <div className="max-w-full overflow-x-auto">
        
        <ReactTooltip
          id="view"
          content="View & Update"
        />
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Address (Area or Locality)
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                City
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                State
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Pincode
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Landmark
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
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
                <p className="text-black dark:text-white">{value.address}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.city}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.state}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.pincode}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{value.landmark}</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{date_format(value.createdAt)}</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                
                  <EditButton to={replaceStr(editUrl, ":id", value._id)} />

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