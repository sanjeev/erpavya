import { date_format } from '../../../../helpers/common'
import { Tooltip as ReactTooltip } from "react-tooltip"
import RestoreButton from '../../../../components/common/RestoreButton'

const TableDeleted = ({ data, vendor_id, onRestore }) => {
  
    return (
      <div className="max-w-full overflow-x-auto">
        
        <ReactTooltip
          id="restore"
          content="Restore"
        />
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="py-4 px-4 font-medium text-black dark:text-white">
                Area or Locality
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
                Delivery Cost
              </th>
             
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Deleted At
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
                <p className="text-black dark:text-white">{value.locality}</p>
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
                <p className="text-black dark:text-white">{value.delivery_cost}</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{date_format(value.deletedAt)}</p>
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
  
  export default TableDeleted;  