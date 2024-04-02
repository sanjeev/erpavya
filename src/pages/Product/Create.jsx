import Breadcrumb from '../../components/Breadcrumb';
import { post } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import MyForm from './Form';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import CONFIG from './const';

const Create = () => {



  return (
    <>
      <div className="p-5 border-b border-dashed border-border-base border-indigo-100">
        <Breadcrumb
          pageName="Create Product"
          elements={CONFIG.breadcrumbs.create}
        />
      </div>
      <div className="">

        <div className="mt-5">
          wwerwerjlkjlkj
        </div>
      </div>
    </>
  );
};

export default Create;
