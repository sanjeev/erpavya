import { useFormikContext, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import { API_PUBLIC_BASE_URL } from '../../helpers/api_config.js';

export default function InputFile({ formik, ...props }) {
  const { initialValues } = useFormikContext();

  useEffect(() => {
    if (initialValues.image)
      formik.setFieldValue(
        'imagePreview',
        API_PUBLIC_BASE_URL + initialValues.image,
      );
  }, []);

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    formik.setFieldValue(props.name, file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      formik.setFieldValue('imagePreview', imageUrl);
    } else if (initialValues.image) {
      formik.setFieldValue(
        'imagePreview',
        API_PUBLIC_BASE_URL + initialValues.image,
      );
    } else {
      formik.setFieldValue('imagePreview', '');
    }
  };

  return (
    <>
      <div className="bg-white ">
        <label
          htmlFor="countries"
          className="mb-3 block text-black dark:text-white"
        >
          {' '}
          {props.label}
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
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          {/* <input type="file" className="hidden" /> */}

          <input
            id="dropzone-file"
            type="file"
            {...props}
            className="w-full hidden rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            onChange={handleChange}
          />
        </label>
      </div>
      {formik.values.imagePreview && (
        <>
          <div className="flex gap-5.5 mb-4 mt-5">
            {/* <div>
          <label className="mb-3 block text-black dark:text-white">
            Choose a file
          </label>
          <input
            type="file"
            {...props}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            onChange={handleChange}
          />
        </div> */}

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Preview
              </label>

              <img
                src={formik.values.imagePreview}
                alt="Image Preview"
                className="p-1 rounded ring-2 ring-black-300 dark:ring-black-500 w-36 h-36 "
              />
            </div>
          </div>
          <ErrorMessage
            name={props.name}
            className="text-danger"
            component="div"
          />
        </>
      )}
    </>
  );
}
