import { useState, useEffect } from 'react';

const MultipleFileUploadField = ({ formik, ...props }) => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) =>
      newImageUrls.push(URL.createObjectURL(image)),
    );

    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    if (images) formik.setFieldValue(props.name, images);
  }, [images]);

  return (
    <>
      <div>
        <label
          htmlFor="countries"
          className="mb-3 block text-black dark:text-white"
        >
          {' '}
          Gallery
        </label>
        {/* Hello world */}
        <label
          htmlFor="gallery-file"
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
        </label>

        <input
          type="file"
          multiple
          id="gallery-file"
          {...props}
          onChange={onImageChange}
          style={{ display: 'none' }}
        />
      </div>
      {/* <input type="file" multiple accept="image/*" onChange={onImageChange} /> */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-5">
        {imageURLS.map((imageSrc, i) => (
          <div className="mt-5 relative" key={i}>
            <img
              className="p-1 rounded ring-2 ring-black-300 dark:ring-black-500 w-36 h-36 "
              src={imageSrc}
              alt="not fount"
            />
            <div className="absolute top-0 right-0 lg:top-[-14px] lg:right-[-9px] h-6 w-6 z-2">
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: '#ef5d73' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleFileUploadField;
