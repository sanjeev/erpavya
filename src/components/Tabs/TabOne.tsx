import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyForm from '../../../src/pages/Settings/General/Form';
import { useNavigate } from 'react-router-dom';
import CONFIG from '../../../src/pages/Settings/General/const';
import { post } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton'

const TabOne: React.FC = () => {
   const [openTab, setOpenTab] = useState(1);

  const activeClasses = 'bg-primary text-white';
  const inactiveClasses = 'bg-gray dark:bg-meta-4 text-black dark:text-white';
  const navigate = useNavigate();
  const initialValues = {
    meta_key: '',
    meta_tag: ''
   };
  const onSubmit = async (values, { setSubmitting }) => {
    
    const response = await post(CONFIG.api+'create', values); // Make a POST request
    toast.success(response.message);
    navigate(CONFIG.slug);
    setSubmitting(false);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-7.5 flex flex-wrap gap-3 rounded-lg border border-stroke py-3 px-4 dark:border-strokedark">
        <Link
          to="#"
          className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 1 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(1)}
        >
          General
        </Link>
        <Link
          to="#"
          className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 2 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(2)}
        >
          Header
        </Link>
        <Link
          to="#"
          className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 3 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(3)}
        >
          Footer
        </Link>
      
      </div>

      <div>
        <div
          className={`leading-relaxed ${openTab === 1 ? 'block' : 'hidden'}`}
        >
          <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Update'} />
        </div>
        <div
          className={`leading-relaxed ${openTab === 2 ? 'block' : 'hidden'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          ex dolorum voluptate cupiditate adipisci doloremque, vel quam
          praesentium nihil veritatis.
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? 'block' : 'hidden'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod. <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          mollitia nam eligendi reprehenderit reiciendis saepe laboriosam
          maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis
          ducimus recusandae repellat quasi eaque, suscipit praesentium totam?
        </div>
        <div
          className={`leading-relaxed ${openTab === 4 ? 'block' : 'hidden'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.
        </div>
      </div>
    </div>
  );
};

export default TabOne;
