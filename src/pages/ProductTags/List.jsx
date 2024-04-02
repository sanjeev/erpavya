import Breadcrumb from '../../components/Breadcrumb';
import Table from './Table';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import CreateButton from '../../components/common/CreateButton';
import DeletedButton from '../../components/common/DeletedButton';
import Loader from '../../common/Loader';
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
    const response = await remove(CONFIG.api + 'delete/'+recordId); // Make a POST request
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    
    toast.success(response.message);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumb pageName="Product Tags" elements={CONFIG.breadcrumbs.list} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
          List ({data.length})
          </h4>
          <div className='flex justify-between gap-1'>
            <CreateButton to={CONFIG.action.create} />
            <DeletedButton to={CONFIG.action.deleted} />
          </div>
        </div>
        <div>
          <Table data={data} onDelete={deleteRecord} />
        </div>
      </div>

    </>
  );
};

export default List;