import React, { useState, useEffect, Suspense } from 'react';
import { replaceStr, pars_address, deleteRecordByName } from '../../../../helpers/common';
import IconForm from '../../../../components/Icons/Form'
import Loader from '../../../../common/Loader';

import { Tooltip as ReactTooltip } from "react-tooltip"
import Sidepanel from '../../../../components/Sidepanel';
import { get } from '../../../../helpers/api';

const Table = ({ data, admin_id, refreshTableDataHook }) => {

    const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);
    const [sidepanelData, setSidepanelData] = useState([]);
    const [serviceAreaId, setServiceAreaId] = useState(false);
    const [serviceAddressParsed, setServiceAddressParsed] = useState(false);
    const [savedDp, setSavedDp] = useState([]);

    const handleOpenSidepanel = (id, service_address_parsed, saved_dp) => {
      setIsSidepanelOpen(true);
      getDP();
      setServiceAreaId(id);
      setServiceAddressParsed(service_address_parsed);
      setSavedDp(saved_dp);
    };
  
    const handleCloseSidepanel = () => {
      setIsSidepanelOpen(false);
      setSidepanelData([]);
    };

    const getDP = async () => {
      let d = await get('delivery_preference');
      //d = deleteRecordByName(d, 'Standard Delivery');
      setSidepanelData(d);
    }

    const onSubmitHook = () => {
      refreshTableDataHook();
      handleCloseSidepanel();
    }

    
    return (
      <div className="max-w-full overflow-x-auto">
        
        <ReactTooltip
          id="view"
          content="Add/Edit Delivery Preferences"
        />

        <Suspense fallback={<Loader />}>
        <Sidepanel 
          isOpen={isSidepanelOpen} 
          onClose={handleCloseSidepanel}
          headerLabel={'Add/Edit Delivery Preferences'}
          sidepanelData={sidepanelData}
          admin_id={admin_id}
          serviceAreaId={serviceAreaId}
          serviceAddressParsed={serviceAddressParsed}
          onSubmitHook={onSubmitHook}
          savedDp={savedDp}
        />
        </Suspense>

        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white" width="3%">
                Sr.
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white" width="10%">
                Service area
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white" width="*">
                Delivery Preferences Detail
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white" width="5%">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {data.length ? data.map((value,i) => {
           const service_address_parsed = pars_address(value.address);
           
            return (<tr key={value._id}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{i+1}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark w-1/4">
                <p className="text-black dark:text-white">
                  {service_address_parsed}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {/* <InputNumber /> */}
                <div className='flex gap-8'>
                
                {value.delivery_preferences && value.delivery_preferences.length ? (
                value.delivery_preferences.map((dp, ii) => (
                  <div key={ii}>
                    <div className='border-stroke border-b pb-1 mb-2'>{dp.name}</div>
                    <div className='text-xs'><strong>Cost: </strong>{dp.cost==0?'Free':dp.cost}</div>
                    <div className='text-xs'><strong>Info: </strong>{dp.delivery_preference?dp.delivery_preference.time:''}</div>
                    {/* <div className='text-xs'>
                      <span className={`mt-2 inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ dp.status=='Active' ? 'bg-success text-success' : 'bg-danger text-danger'} `}>
                        {dp.status}
                      </span>
                    </div> */}
                  </div>
                ))
                ) : (
                  <div>No delivery preferences added</div>
                )}
                </div>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  <button 
                    data-tooltip-id="view" 
                    onClick={() => handleOpenSidepanel(value._id, service_address_parsed, value.delivery_preferences )}
                    className="hover:text-primary"
                  >
                    <IconForm />
                  </button>
                </div>
              </td>
            </tr>
            )
            }) : <tr><td colSpan={10}><div className='text-center mt-5 mb-5'>Empty</div></td></tr> }
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;  