import React, { useState, useEffect } from "react";

import SubmitButton from "../../components/common/SubmitButton";
import InputText from "../../components/form/InputText";
import InputNumber from "../../components/form/InputNumber";
import Editor from "../../components/form/Editor";
import TextArea from "../../components/form/TextArea";
import InputFile from "../../components/form/InputFile";
import MultipleFileUploadField from "../../components/form/Multiplefileuploadformik";
import InputSelectisMulti from "../../components/form/InputSelectisMulti";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { get } from "../../helpers/api";

import ProductVariableForm from "./product-variable-form";
const MyForm = ({ initialValues, onSubmit, action }) => {
  const [categories, setCategories] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [selected, setSelected] = useState(["papaya"]);

  const [publish, setpublish] = useState([
    { label: "Draft", value: 0 },
    { label: "Publish", value: 1 },
  ]);

  const options = [
    { value: "Food", label: "Food" },
    { value: "Being Fabulous", label: "Being Fabulous" },
    { value: "Ken Wheeler", label: "Ken Wheeler" },
    { value: "ReasonML", label: "ReasonML" },
    { value: "Unicorns", label: "Unicorns" },
    { value: "Kittens", label: "Kittens" },
  ];

  const [openTab, setOpenTab] = useState(4);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
  });

  useEffect(() => {
    async function getCategoriesData() {
      const d = await get("category/list");
      setCategories(d);
      setLoading(false);
    }
    getCategoriesData();

    async function getProductTagData() {
      const d = await get("product_tag/list");
      setProductTags(d);
    }
    getProductTagData();
  }, []);
  const [productType, setProductType] = useState("0");
  const handleChangetype = (event) => {
    setProductType(event);
  };
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik, value) => (
        <Form className="">
          <div className="w-full bg-[#fff] py-5 px-4 sticky z-40 top-[60px]">
            <div
              className="flex flex-row [--scrollspy-offset:220] md:[--scrollspy-offset:70]"
              data-hs-scrollspy="#scrollspy-1"
              data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
            >
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500 active"
                  href="#first"
                >
                  Featured Image
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#gallery"
                >
                  Gallery
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#G-Categories"
                >
                  Group & Categories
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#Description"
                >
                  Description
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#Product-type"
                >
                  Product Type
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#Product-information"
                >
                  Simple Product Information
                </a>
              </div>
              <div className="px-3">
                <a
                  className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500"
                  href="#Seo-Description"
                >
                  Seo Description
                </a>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 p-5 gap-4 lg:grid-cols-3 lg:gap-8"
            id="scrollspy-1"
          >
            <div className="p-5" id="first">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Featured Image
              </h3>
              <p>
                Upload your product featured image here Image size should not be
                more than 2 MB
              </p>
            </div>
            <div className="bg-white p-5  lg:col-span-2 rounded-lg">
              <InputFile
                formik={formik}
                label="Main Image"
                name="featured_images"
                accept="image/*"
                placeholder="image"
              />
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5" id="gallery">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Gallery
              </h3>
              <p>
                Upload your product image gallery here Image size should not be
                more than 2 MB
              </p>
            </div>
            <div className="bg-white p-5 lg:col-span-2 rounded-lg">
              <MultipleFileUploadField
                name="gallery_images"
                formik={formik}
                accept="image/*"
              />
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5" id="G-Categories">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Group & Categories
              </h3>
              <p>Select product group and categories from here</p>
            </div>
            <div className="bg-white p-5 lg:col-span-2 rounded-lg">
              <div className="mb-4.5">
                <InputSelectisMulti
                  name="categories"
                  label="Categories"
                  options={options}
                  onchangeto={(e) => {
                    formik.setFieldValue("categories", e);
                  }}
                  onBlur={(e) => {
                    "categories", true;
                  }}
                  defaultValue={initialValues.categories}
                />
              </div>
              <div className="mb-4.5">
                <InputSelectisMulti
                  name="tags"
                  label="Tags"
                  options={options}
                  onchangeto={(e) => {
                    formik.setFieldValue("tags", e);
                  }}
                  onBlur={(e) => {
                    "tags", true;
                  }}
                  defaultValue={initialValues.categories}
                />
              </div>
            </div>
          </div>
          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 " id="Description">
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
                <label
                  htmlFor="long_description"
                  className="mb-3 block text-black dark:text-white"
                >
                  Long Description
                </label>
                <Editor
                  name="long_description"
                  onChange={(data) => {
                    setData(data);
                  }}
                  editorLoaded={editorLoaded}
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
            <div className="p-5 mt-5" id="Product-type">
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
                    onChange={(e) => {
                      handleChangetype(e.target.value);
                      formik.setFieldValue("product_type", e.target.value);
                    }}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="">Select product type</option>
                    <option value="1">Simple Product</option>
                    <option value="2">Variants Product</option>
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
              productType === "1" ? { display: "block" } : { display: "none" }
            }
          >
            <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="p-5 " id="Product-information">
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
                    <InputText name="sku" label="SKU*" />
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
              productType === "2" ? { display: "block" } : { display: "none" }
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
                {/* <ProductVariableForm
                  onChangevariable={(e) => {
                    formik.setFieldValue("product_variable", e);
                  }}
                /> */}
              </div>
            </div>
          </div>

          <div className="h-px m-6 border-b border-dashed border-border-base border-indigo-100" />
          <div
            className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"
            id="Seo-Description"
          >
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
                <TextArea name="seo_title" rows="1" label="Seo Title" />
              </div>
              <div className="mb-4.5">
                <TextArea name="seo_keywords" rows="3" label="Seo Keyword" />
              </div>
              <div className="mb-4.5">
                <TextArea
                  name="seo_description"
                  rows="5"
                  label="Seo Description"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5.5 mb-4"></div>
          <div className="relative w-full height-[90px] z-40 sticky left-0 bottom-0 bg-white py-3">
            <div className="flex flex-row">
              <div className="basis-full text-right">
                <div className="pr-4">
                  <SubmitButton labelText={action} />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
