import Breadcrumb from '../../components/Breadcrumb';
import Table from './TableDeleted';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import Loader from '../../common/Loader';
import CONFIG from './const';

const ListDeleted = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      const d = await get(CONFIG.api_action.deleted);
      setData(d);
      setLoading(false);
    };
    getData();
    
  }, []);

  const restoreRecord = async (recordId) => {
    const response = await remove(CONFIG.api_action.restore + recordId); // Make a POST request
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    
    toast.success(response.message);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.deleted} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          
          <h3 className="font-medium text-black dark:text-white">
          Deleted Record ({data.length})
          </h3>
          <div className='flex justify-between gap-1'>
            <BackButton to={CONFIG.slug} />
          </div>
        </div>
        <div>
          <Table data={data} onRestore={restoreRecord} />
        </div>
      </div>

    </>
  );
};

export default ListDeleted;