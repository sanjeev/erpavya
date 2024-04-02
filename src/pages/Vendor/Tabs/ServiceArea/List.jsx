import Breadcrumb from '../../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get } from '../../../../helpers/api';
import { replaceStr } from '../../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../../common/Loader';
import CONFIG from '../../const';
import Tabs from '../../Tabs';
import SearchAddressInput from '../../../../components/form/SearchAddressInput';
import GridServiceAreas from './Grid';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  async function getDetail() {
    const getUrl = replaceStr(CONFIG.service_area.api.list, ":id", id);
    const d = await get(getUrl);
    //if(d?.vendor?.service_areas?.length > 0)
    if(d.length > 0)
    {
      setData(d);
    }
    setLoading(false);
  };
  
  useEffect(() => {

    getDetail();
    
  },[id]);

  if (loading) {
    return <Loader />;
  }

  const onSubmitHook = () => {
    getDetail();
  };

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.service_area.list} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            
            <div className='gap-1 mb-5'>
              <SearchAddressInput onSubmitHook={onSubmitHook} />
            </div>
            
            {data.length>0 && ( 
              <>
              <div className='mt-15 mb-5'>
                <hr className="border-gray" />
              </div>
              
              <div className="flex justify-between mb-3">
                <h3 className="font-medium text-black dark:text-white d-flex">
                Your existing service areas ({data.length??0})
                </h3>
              </div>
            
              <GridServiceAreas data={data} />
              </>
            )}

          </div>
        </div>
      </div>


    </>
  );
};

export default List;