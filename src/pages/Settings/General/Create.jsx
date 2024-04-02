import Breadcrumb from '../../../components/Breadcrumb';
import React from 'react';
import { post } from '../../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../../components/common/BackButton'
import Tab from '../../../components/Tabs/Tab'
import MyForm from './Form';
import { useNavigate } from 'react-router-dom';
import CONFIG from './const';
const Create = () => {
  
return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.update} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Update
          </h4>
          {/* <BackButton to={CONFIG.slug} /> */}
        </div>
        <div>
          <Tab></Tab>
        {/* <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Update'} /> */}
        </div>
      </div>

    </>
  );
};

export default Create;