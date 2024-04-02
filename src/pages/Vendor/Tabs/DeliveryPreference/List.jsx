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


const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  async function getDetail() {
    const getUrl = replaceStr(CONFIG.service_area.api.list, ":id", id);
    const d = await get(getUrl);
    //console.log(d);
    //if(d?.vendor?.store_addresses?.length > 0)
    if(d.length > 0)
    {
      setData(d);
    }
    setLoading(false);
  };

  useEffect(() => {

    getDetail();
    
  },[id]);

  const refreshTableDataHook = () => {
    getDetail();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.dp.list} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
           
            <Table data={data} admin_id={id} refreshTableDataHook={refreshTableDataHook} />
          </div>
        </div>
      </div>

    </>
  );
};

export default List;