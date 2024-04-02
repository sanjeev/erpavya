import React, { useState, useEffect } from 'react';

import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import InputNumber from '../../components/form/InputNumber';
import TextArea from '../../components/form/TextArea';
import InputFile from '../../components/form/InputFile';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import InputSelect from '../../components/form/InputSelect';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { get } from '../../helpers/api';
import CONFIG from './const';
import { TagsInput } from 'react-tag-input-component';
import ProductVariableForm from './product-variable-form';
const MyForm = ({ initialValues, onSubmit, action }) => {
  const [categories, setCategories] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [selected, setSelected] = useState(['papaya']);

  const [publish, setpublish] = useState([
    { label: 'Draft', value: 0 },
    { label: 'Publish', value: 1 },
  ]);

  const [openTab, setOpenTab] = useState(4);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    price: Yup.number().required('Price is required'),
    discount: Yup.number()
      .min(0, 'Discount cannot be negative')
      .max(90, 'Discount cannot exceed 90%'),
    short_description: Yup.string()
      .required('Short Description is required')
      .max(400, 'Max charecters cannot exceed 400'),
    long_description: Yup.string()
      .required('Long Description is required')
      .max(1000, 'Max charecters cannot exceed 1000'),
  });

  useEffect(() => {
    async function getCategoriesData() {
      const d = await get('category/list');
      setCategories(d);
      setLoading(false);
    }
    getCategoriesData();

    async function getProductTagData() {
      const d = await get('product_tag/list');
      setProductTags(d);
    }
    getProductTagData();
  }, []);
  const [productType, setProductType] = useState('0');
  const handleChangetype = (event) => {
    setProductType(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 mt-5 ">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Featured Image
              </h3>
              <p>
                Upload your product featured image here Image size should not be
                more than 2 MB
              </p>
            </div>
            <div className="bg-white p-5 mt-5 lg:col-span-2 rounded-lg">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Main Image
              </label>

              {/* Hello world */}
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Gallery
              </h3>
              <p>
                Upload your product image gallery here Image size should not be
                more than 2 MB
              </p>
            </div>
            <div className="bg-white p-5 lg:col-span-2 rounded-lg">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {' '}
                Gallery
              </label>

              {/* Hello world */}
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Group & Categories
              </h3>
              <p>Select product group and categories from here</p>
            </div>
            <div className="bg-white p-5 lg:col-span-2 rounded-lg">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Group*
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="">Type your Group</option>
                    <option value="">USA</option>
                    <option value="">UK</option>
                    <option value="">Canada</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Categories
                </label>
                <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-wrap items-center">
                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Option1
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Option2
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <select
                    name=""
                    id=""
                    className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                  >
                    <option value="">Option</option>
                    <option value="">Option2</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Tags
                </label>
                <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-wrap items-center">
                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Option1
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Option2
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <select
                    name=""
                    id=""
                    className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                  >
                    <option value="">Option</option>
                    <option value="">Option2</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 ">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Description
              </h3>
              <p>
                Edit your product description and necessary information from
                here
              </p>
            </div>
            <div className="bg-white p-5  lg:col-span-2 rounded-lg">
              <div className="w-full mb-4.5">
                <InputText name="name" label="Name" />
              </div>
              <div className="w-full mb-4.5">
                <InputText name="slug" label="Slug" />
              </div>
              <div className="mb-4.5">
                <TextArea
                  name="long_description"
                  rows="10"
                  label="Long Description"
                />
              </div>
              <div className="mb-4.5">
                <TextArea
                  name="short_description"
                  rows="2"
                  label="Short Description"
                />
              </div>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 mt-5 ">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Product Type
              </h3>
              <p>Select product type form here</p>
            </div>
            <div className="bg-white p-5 mt-5 lg:col-span-2 rounded-lg">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Product Type
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={productType}
                    onChange={handleChangetype}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="">Type Product Type</option>
                    <option selected value="0">
                      Simple Product
                    </option>
                    <option value="1">Variants Product</option>
                  </select>

                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={
              productType === '0' ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="p-5 ">
                <h3 className="text-title-md1 font-bold text-black dark:text-white">
                  Simple Product Information
                </h3>
                <p>
                  Edit your simple product description and necessary information
                  from here
                </p>
              </div>
              <div className="bg-white p-5  lg:col-span-2 rounded-lg">
                <div className="flex gap-5.5 mb-4.5">
                  <div className="w-1/2">
                    <InputText name="price" label="Price*" />
                  </div>
                  <div className="w-1/2">
                    <InputText name="sale_price" label="Sale Price*" />
                  </div>
                </div>
                <div className="flex gap-5.5 mb-4.5">
                  <div className="w-1/2">
                    <InputText name="quantity" label="Quantity*" />
                  </div>
                  <div className=" w-1/2">
                    <InputText name="SKU" label="SKU*" />
                  </div>
                </div>

                <div className="flex gap-5.5 mb-4.5">
                  <div className="w-1/2">
                    <InputText name="width" label="Width" />
                  </div>
                  <div className="w-1/2">
                    <InputText name="height" label="Height" />
                  </div>
                </div>
                <div className="w-full mb-4.5">
                  <InputText name="length" label="Length" />
                </div>
              </div>
            </div>
          </div>

          <div
            style={
              productType === '1' ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="p-5 ">
                <h3 className="text-title-md1 font-bold text-black dark:text-white">
                  Product Variation Information
                </h3>
                <p>
                  Update your product variation and necessary information from
                  here
                </p>
              </div>
              <div className="bg-white p-5  lg:col-span-2 rounded-lg">
                <ProductVariableForm />
              </div>
            </div>
          </div>

          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 ">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Seo Description
              </h3>
              <p>
                Edit your product seo description and necessary information from
                here
              </p>
            </div>
            <div className="bg-white p-5  lg:col-span-2 rounded-lg">
              <div className="mb-4.5">
                <TextArea name="long_description" rows="1" label="Seo Title" />
              </div>
              <div className="mb-4.5">
                <TextArea
                  name="long_description"
                  rows="3"
                  label="Seo Keyword"
                />
              </div>
              <div className="mb-4.5">
                <TextArea
                  name="short_description"
                  rows="5"
                  label="Seo Description"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white  p-7">
                <div className="flex gap-5.5 mb-4">
                  {/* <div className="w-1/2">
                  {!loading ? (
                    <div>
                      <InputSelect
                        formik={formik}
                        name="category"
                        label="Category"
                        options={categories}
                        defaultValue={{
                          value: initialValues.category ? initialValues.category._id : null,
                          label: initialValues.category ? initialValues.category.name : null
                        }}
                      />

                    </div>
                  ) : null}
                </div> */}
                  <div className="w-full">
                    <InputText name="name" label="Name" />
                  </div>
                  <div className="w-full">
                    <InputText name="slug" label="Slug" />
                  </div>
                </div>

                <div className="mb-4">
                  <TextArea
                    name="long_description"
                    rows="10"
                    label="Long Description"
                  />
                </div>
                <div className="mb-4">
                  <TextArea
                    name="short_description"
                    rows="2"
                    label="Short Description"
                  />
                </div>
              </div>

              <div></div>
            </div>
            <div className="">
              <div className="bg-white p-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Publish
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Publish</option>
                  <option value="0">Draft</option>
                  <option value="1">Publis</option>
                </select>
              </div>

              <div className="bg-white p-5 mt-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {' '}
                  Product Type Value
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Product Type Value</option>
                  <option value="veg">Veg</option>
                  <option value="non-veg">Non Veg</option>
                </select>
              </div>
              <div className="bg-white p-5 mt-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product categories
                </label>
                <div className="overflow-y-auto h-72">
                  {categories.map((item, index) => (
                    <div className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value={item._id}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base" />
          <div>
            <div className="bg-white  p-5 mt-5">
              <div className="md:flex">
                <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400  mb-4 md:mb-0">
                  <li onClick={() => setOpenTab(4)}>
                    <a
                      href="#"
                      className={`inline-flex items-center rounded-lg  w-full 0 whitespace-nowrap active  p-3 ${
                        openTab === 4 ? 'bg-[#00000024]' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.84516 5.3272C6.32597 5.3272 5.90508 5.74809 5.90508 6.26728V23.8154C5.90508 24.3346 6.32597 24.7555 6.84516 24.7555H24.3933C24.9125 24.7555 25.3334 24.3346 25.3334 23.8154V6.26728C25.3334 5.74809 24.9125 5.3272 24.3933 5.3272H6.84516ZM2.77148 6.26728C2.77148 4.01745 4.59533 2.1936 6.84516 2.1936H24.3933C26.6431 2.1936 28.467 4.01745 28.467 6.26728V23.8154C28.467 26.0653 26.6431 27.8891 24.3933 27.8891H6.84516C4.59533 27.8891 2.77148 26.0653 2.77148 23.8154V6.26728Z"
                          fill="#219653"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.2323 9.71414C10.7132 9.71414 10.2923 10.135 10.2923 10.6542C10.2923 11.1734 10.7132 11.5943 11.2323 11.5943C11.7515 11.5943 12.1724 11.1734 12.1724 10.6542C12.1724 10.135 11.7515 9.71414 11.2323 9.71414ZM8.41211 10.6542C8.41211 9.09665 9.67477 7.83398 11.2323 7.83398C12.7899 7.83398 14.0526 9.09665 14.0526 10.6542C14.0526 12.2118 12.7899 13.4745 11.2323 13.4745C9.67477 13.4745 8.41211 12.2118 8.41211 10.6542Z"
                          fill="#219653"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.528 11.4264C20.1399 10.8146 21.1319 10.8146 21.7438 11.4264L28.011 17.6936C28.6228 18.3055 28.6228 19.2975 28.011 19.9094C27.3991 20.5213 26.4071 20.5213 25.7952 19.9094L20.6359 14.7501L7.95594 27.4301C7.34407 28.0419 6.35203 28.0419 5.74015 27.4301C5.12828 26.8182 5.12828 25.8261 5.74015 25.2143L19.528 11.4264Z"
                          fill="#219653"
                        />
                      </svg>
                      Image
                    </a>
                  </li>
                  <li onClick={() => setOpenTab(1)}>
                    <a
                      href="#"
                      className={`inline-flex items-center rounded-lg  w-full 0 whitespace-nowrap active  p-3 ${
                        openTab === 1 ? 'bg-[#00000024]' : ''
                      }`}
                      aria-current="page"
                    >
                      <svg
                        className="w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      SEO
                    </a>
                  </li>
                  <li onClick={() => setOpenTab(2)}>
                    <a
                      href="#"
                      className={`inline-flex items-center rounded-lg  w-full 0 whitespace-nowrap active  p-3 ${
                        openTab === 2 ? 'bg-[#00000024]' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>
                      Product Type
                    </a>
                  </li>
                  <li onClick={() => setOpenTab(3)}>
                    <a
                      href="#"
                      className={`inline-flex items-center rounded-lg  w-full 0 whitespace-nowrap active  p-3 ${
                        openTab === 3 ? 'bg-[#00000024]' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                      </svg>
                      Product tags
                    </a>
                  </li>
                </ul>
                <div
                  className={`leading-relaxed px-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full max-h-96 overflow-y-auto ${
                    openTab === 1 ? 'active' : 'hidden'
                  }`}
                >
                  <div className="mb-4">
                    <TextArea
                      name="long_description"
                      rows="1"
                      label="Seo Title"
                    />
                  </div>
                  <div className="mb-4 mt-4">
                    <TextArea
                      name="long_description"
                      rows="3"
                      label="Seo Keyword"
                    />
                  </div>
                  <div className="mb-4">
                    <TextArea
                      name="short_description"
                      rows="5"
                      label="Seo Description"
                    />
                  </div>
                </div>
                <div
                  className={`leading-relaxed px-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-96 max-h-96 overflow-y-auto ${
                    openTab === 2 ? 'active' : 'hidden'
                  }`}
                >
                  <ProductVariableForm />
                </div>
                <div
                  className={`leading-relaxed px-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-96 max-h-96 overflow-y-auto ${
                    openTab === 3 ? 'active' : 'hidden'
                  }`}
                >
                  <pre>{JSON.stringify(selected)}</pre>
                  <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="fruits"
                    placeHolder="Product tags"
                  />
                  <em>press enter or comma to add new tag</em>
                </div>
                <div
                  className={`leading-relaxed px-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-96 max-h-96 overflow-y-auto ${
                    openTab === 4 ? 'active' : 'hidden'
                  }`}
                >
                  <div className="bg-white">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {' '}
                      Main Image
                    </label>

                    {/* Hello world */}
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="bg-white mt-5">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {' '}
                      Other Images of the Product
                    </label>

                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5.5 mb-4">
            <SubmitButton labelText={action} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
