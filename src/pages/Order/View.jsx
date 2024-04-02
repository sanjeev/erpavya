import Breadcrumb from '../../components/Breadcrumb';
import Table from './Table';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../helpers/api';
import { toast } from 'react-hot-toast';
//import CreateButton from '../../components/common/CreateButton'
//import DeletedButton from '../../components/common/DeletedButton'
import Loader from '../../common/Loader';
import CONFIG from './const';
import BackButton from '../../components/common/BackButton';

const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      const d = await get(CONFIG.api);
      setData(d);
      setLoading(false);
    };

    getData();
    
  }, []);

  const deleteRecord = async (recordId) => {
    const response = await remove(CONFIG.api + recordId); // Make a POST request
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    console.log(response);
    toast.success(response.message);
  };

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.list} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-4 dark:border-strokedark 
        grid grid-cols-4 gap-4">
          <span className="text-sm text-black dark:text-white">
          <span className='font-semibold'>Order Number:</span> ORD001
          </span>
          <span className="text-sm text-black dark:text-white">
          <span className='font-semibold'>Customer:</span> Md. Asif
          </span>
          <span className="text-sm text-black dark:text-white">
          <span className='font-semibold'>Delivery Address:</span> Greater Noida, Pincode - 320023
          </span>
          <span className='flex items-start'>
            <button className='ml-auto inline-flex'>
              <BackButton to={CONFIG.slug} />
            </button>
          </span>
          {/* <div className='flex justify-between gap-1'>
            <CreateButton to={CONFIG.action.create} />
            <DeletedButton to={CONFIG.action.deleted} />
          </div> */}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white p-4">
          Vendors Near By
          </h4>
          
          <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="p-4 font-medium text-black dark:text-white">
                Service Area
              </th>
              <th className="p-4 font-medium text-black dark:text-white">
                Delivery Preference
              </th>
              <th className="p-4 font-medium text-black dark:text-white">
                Cost
              </th>
              <th className="p-4 font-medium text-black dark:text-white text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] p-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  Service Area
                </p>
              </td>
              <td className="border-b border-[#eee] p-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  Delivery Preference
                </p>
              </td>
              <td className="border-b border-[#eee] p-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  Cost
                </p>
              </td>
              
              
              <td className="border-b border-[#eee] p-4 dark:border-strokedark">
                <div className="flex items-center justify-end space-x-3.5">
                  Actions
                  {/* <Link data-tooltip-id="view-detail" className="hover:text-primary" to={CONFIG.slug+value._id}>
                    <IconEye />
                  </Link> */}
                </div>
              </td>
            </tr>
            {/* <tr>
              <td colSpan={10}>
                <div className='text-center mt-5 mb-5'>Empty</div>
              </td>
            </tr>  */}
          </tbody>
        </table>
        <div className='p-4'>
          <a
          href="#"
          className='inline-block items-center rounded bg-primary text-sm px-6 font-medium text-white hover:bg-opacity-80 py-2'>Send</a>
        {/* <a
          href="#"
          className="inline-block rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Send
        </a> */}
        </div>
        </div>
      </div>

    </>
  );
};

export default View;