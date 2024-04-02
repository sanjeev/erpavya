import Breadcrumb from '../../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../../../helpers/api';
import { replaceStr } from '../../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../../common/Loader';
import CONFIG from '../../const';
import Tabs from '../../Tabs';
import Table from './Table';
import CreateButton from '../../../../components/common/CreateButton';
import DeletedButton from '../../../../components/common/DeletedButton';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  const createUrl = replaceStr(CONFIG.store_address.page.create, ":id", id);
  const deletedUrl = replaceStr(CONFIG.store_address.page.deleted, ":id", id);

  useEffect(() => {

    async function getDetail() {
      const getUrl = replaceStr(CONFIG.store_address.api.list, ":id", id);
      const d = await get(getUrl);
      //if(d?.vendor?.store_addresses?.length > 0)
      if(d.length > 0)
      {
        setData(d);
      }
      setLoading(false);
    };

    getDetail();
    
  },[id]);

  if (loading) {
    return <Loader />;
  }

  const deleteRecord = async (recordId) => {
    const removeUrl = replaceStr(CONFIG.store_address.api.delete, ':id', recordId);
    const response = await remove(removeUrl);
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    
    toast.success(response.message);
  };

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.store_address.list} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            <div className="flex justify-between">
              <h3 className="font-medium text-black dark:text-white d-flex">
              List ({data.length??0})
              </h3>
              <div className='flex justify-between gap-1'>
                <CreateButton to={createUrl} />
                <DeletedButton to={deletedUrl} />
              </div>
            </div>
            <Table data={data} vendor_id={id} onDelete={deleteRecord} />
          </div>
        </div>
      </div>


    </>
  );
};

export default List;