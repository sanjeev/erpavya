import Breadcrumb from '../../components/Breadcrumb';
import Table from './Table';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import CreateButton from '../../components/common/CreateButton'
import DeletedButton from '../../components/common/DeletedButton'
import CONFIG from './const';

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      const d = await get(CONFIG.api+'list');
      setData(d);
      setLoading(false);
    };

    getData();
  }, []);

  const deleteRecord = async (recordId) => {
    const response = await remove(CONFIG.api+'delete/' + recordId); // Make a POST request
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    
    toast.success(response.message);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.list} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
        <h3 className="font-medium text-black dark:text-white">
          
          List ({data.length})
          </h3>

          {/* 
          <div className='flex justify-between gap-1'>
            <CreateButton to={CONFIG.action.create} />
            <DeletedButton to={CONFIG.action.deleted} />
          </div> 
          */}

        </div>
        <div>
          <Table data={data} onDelete={deleteRecord} />
        </div>
      </div>

    </>
  );
};

export default List;