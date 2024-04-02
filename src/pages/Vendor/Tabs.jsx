import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom'

export default function Tabs() {
  const location = useLocation();
  const { pathname } = location;

  const { id } = useParams();
  const url_personal_info = `/vendor/personal-info/${id}`;
  const url_store_address = `/vendor/store-address/${id}`;
  const url_service_area = `/vendor/service-area/${id}`;
  const url_delivery_preference = `/vendor/delivery-preference/${id}`;

  return (
    <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
        <NavLink
        className={`py-4 text-sm font-medium hover:text-primary md:text-base ${
          pathname.includes('personal-info') ? 'border-b-2 text-primary border-primary' : ''
        }`}
        to={url_personal_info}
        >
        Personal Info

        </NavLink>
        <NavLink
        className={`py-4 text-sm font-medium hover:text-primary md:text-base ${
          pathname.includes('store-address') ? 'border-b-2 text-primary border-primary' : ''
        }`}
        to={url_store_address}
        >
        Store Address

        </NavLink>
        <NavLink
        className={`py-4 text-sm font-medium hover:text-primary md:text-base ${
          pathname.includes('service-area') ? 'border-b-2 text-primary border-primary' : ''
        }`}
        to={url_service_area}
        >
        Service Area

        </NavLink>
        <NavLink
        className={`py-4 text-sm font-medium hover:text-primary md:text-base ${
          pathname.includes('delivery-preference') ? 'border-b-2 text-primary border-primary' : ''
        }`}
        to={url_delivery_preference}
        >
        Delivery Preference

        </NavLink>
        
    </div>
  )
}
