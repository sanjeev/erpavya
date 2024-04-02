import Breadcrumb from '../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, put } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../common/Loader';
import CONFIG from './const';
import Tabs from './Tabs';

const Detail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    async function getDetail() {
      const d = await get(CONFIG.api+'detail/'+id);
      
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
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.detail} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque nibh
            lacus, posuere et turpis in, pretium facilisis nisl. Proin congue sem vel
            sollicitudin sagittis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per
          </div>
          <div className="leading-relaxed hidden">
            Tab2 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus
            ligula nec dolor placerat, a consequat elit volutpat. Quisque nibh lacus,
            posuere et turpis in, pretium facilisis nisl. Proin congue sem vel
            sollicitudin sagittis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per
          </div>
          <div className="leading-relaxed hidden">
            Tab3 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus
            ligula nec dolor placerat, a consequat elit volutpat. Quisque nibh lacus,
            posuere et turpis in, pretium facilisis nisl. Proin congue sem vel
            sollicitudin sagittis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per
          </div>
          <div className="leading-relaxed hidden">
            Tab4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit
            odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.
          </div>
        </div>
      </div>


    </>
  );
};

export default Detail;