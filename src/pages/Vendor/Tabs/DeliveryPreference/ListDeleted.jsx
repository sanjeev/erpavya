import Breadcrumb from '../../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../../../helpers/api';
import { replaceStr } from '../../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../../common/Loader';
import CONFIG from '../../const';
import Tabs from '../../Tabs';
import Table from './TableDeleted';
import BackButton from '../../../../components/common/BackButton';

const ListDeleted = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  const backUrl = replaceStr(CONFIG.store_address.page.list, ":id", id);
  
  useEffect(() => {

    async function getDetail() {
      const getUrl = replaceStr(CONFIG.store_address.api.deleted, ":id", id);
      
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

  const restoreRecord = async (recordId) => {
    const restoreUrl = replaceStr(CONFIG.store_address.api.restore, ':id', recordId);
    const response = await remove(restoreUrl);
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);
    
    toast.success(response.message);
  };

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.store_address.deleted} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            <div className="flex justify-between">
              <h3 className="font-medium text-black dark:text-white d-flex">
              List Deleted ({data.length??0})
              </h3>
              <div className='flex justify-between gap-1 mb-2'>
                <BackButton to={backUrl} />
              </div>
            </div>
            <Table data={data} vendor_id={id} onRestore={restoreRecord} />
          </div>
        </div>
      </div>


    </>
  );
};

export default ListDeleted;