import Breadcrumb from '../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, put } from '../../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../../components/common/BackButton'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../common/Loader';
import CONFIG from '../const';
import Tabs from '../Tabs';

const PersonalInfo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    async function getDetail() {
      const d = await get(CONFIG.api+id);
      
      setData(d);
      
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
            <div className='flex gap-5.5 mb-4'>
              <div className="w-1/2">
                <strong>Name: </strong> {data.name}
              </div>
              <div className="w-1/2">
                <strong>Email: </strong> {data.email}
              </div>
            </div>
            <div className='flex gap-5.5 mb-4'>
              <div className="w-1/2">
                <strong>Phone: </strong> {data.phone}
              </div>
            </div>
          </div>
          
        </div>
      </div>


    </>
  );
};

export default PersonalInfo;