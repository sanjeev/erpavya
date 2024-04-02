import Breadcrumb from '../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, put } from '../../../helpers/api';
import { print_address } from '../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../common/Loader';
import CONFIG from '../const';
import Tabs from '../Tabs';
import { Link } from 'react-router-dom';

const ServiceArea = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    async function getDetail() {
      const d = await get(CONFIG.api+id);
      if(d.vendor && d.vendor.service_area)
      {
        setData(d.vendor.service_area);
      }
      setLoading(false);
    };

    getDetail();
    
  },[id]);

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.personal_info} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
              
            {data ? (
              <>
              <div className='flex gap-5.5 mb-4'>
                {data.pincode ? (
                  <div className='flex gap-5.5 mb-4'>
                    <div className="w-1/2">
                      <strong>Address: </strong> {print_address(data.pincode)}
                    </div>
                  </div>
                ):(
                  <div className='flex gap-5.5 mb-4'>
                    <div className="w-1/2">
                      <strong>Address: </strong> Address need to update
                    </div>
                  </div>
                )}
                <div className="w-1/2">
                  <strong>Cost: </strong> {data.cost}
                </div>
              </div>
              <div className='flex gap-5.5 mb-4'>
                <Link className="flex items-center gap-2 rounded bg-primary py-1 p-1 text-sm px-4.5 font-medium text-white hover:bg-opacity-80" to='/'>
                  Update
                </Link>
              </div>
              </>
            ):(<div>Need to add service area</div>)}
              
          </div>
          
        </div>
      </div>


    </>
  );
};

export default ServiceArea;