import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyForm from '../../../src/pages/Settings/General/Form';
import { useNavigate } from 'react-router-dom';
import CONFIG from '../../../src/pages/Settings/General/const';
import { post } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton'

const Tab: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
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

  const activeClasses = 'text-primary border-primary';
  const inactiveClasses = 'border-transparent';
  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
        <Link
          to="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 1 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(1)}
        >
         General
        </Link>
        <Link
          to="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 2 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(2)}
        >
            Highlight
        </Link>
        <Link
          to="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 3 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(3)}
        >
           Coming Soon...
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
        <div className="p-6.5">
           <div className=' mb-4 bg-indigo-500'>
          <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                 <label className="mb-3 block text-black dark:text-white">
                  HighLight
                </label>
              </div>
                <div className="w-1/2 relative">
               
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
           
          </div>
        
            <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Lable Name
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>
               </div>
          
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Two
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Instagram Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                  
                 </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image two
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Three
                </label>
              </div>
                <div className="w-1/2 relative">

                <input
                  type="text"
                  placeholder="Twitter Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 
                </div>
              </div>
            </div>

             <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image Three
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Four
                </label>
              </div>
                <div className="w-1/2 relative">
                  
                <input
                  type="text"
                  placeholder="Pinterest Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? 'block' : 'hidden'}`}
        >
        <div className="p-6.5">
          <div className=' mb-4 bg-indigo-500'>
          <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                 <label className="mb-3 block text-black dark:text-white">
                  HighLight 2
                </label>
              </div>
                <div className="w-1/2 relative">
               
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
           
          </div>
        
            <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Lable Name
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>
               </div>
          
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Two
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Instagram Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                  
                 </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image two
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Three
                </label>
              </div>
                <div className="w-1/2 relative">

                <input
                  type="text"
                  placeholder="Twitter Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 
                </div>
              </div>
            </div>

             <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Image Three
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Name Four
                </label>
              </div>
                <div className="w-1/2 relative">
                  
                <input
                  type="text"
                  placeholder="Pinterest Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Tab
