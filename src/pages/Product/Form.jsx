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
      {(formik, value) => <Form className="">waeqweqwe</Form>}
    </Formik>
  );
};

export default MyForm;
