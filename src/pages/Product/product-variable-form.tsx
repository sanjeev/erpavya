import { useState, useEffect } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import InputSelect from '../../components/form/InputSelect';

const options = [
  { label: 'Size 🍇', value: 'size' },
  { label: 'Color 🥭', value: 'color' },
  { label: 'Material 🍓', value: 'material' },
];

const optionsSize = [
  { label: 'M 🍇', value: 'M' },
  { label: 'X 🥭', value: 'X' },
  { label: 'XXL 🍓', value: 'XXL' },
];

const optionsColor = [
  { label: 'Red 🍇', value: 'Red' },
  { label: 'Black 🥭', value: 'Black' },
  { label: 'Orange 🍓', value: 'Orange' },
];

const optionsMaterial = [
  { label: 'Cotton 🍇', value: 'Cotton' },
  { label: 'Jecard 🥭', value: 'Jecard' },
];

export default function ProductVariableForm({ onChangevariable }: any) {
  const [selected1, setSelected1] = useState([]);

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);

  const [dataVariations, setDataVariations] = useState([]);

  const [attributes, setAttributes] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClickClear = () => {
    setDataVariations([]);
  };
  const handleClick = () => {
    const productVariations = selected1.map((item) => {
      return {
        name: item.value,
        values:
          item.value === 'size'
            ? selectedSize
            : item.value == 'color'
            ? selectedColor
            : item.value == 'material'
            ? selectedMaterial
            : '',
      };
    });
    var fixedArray: any[] = [];
    productVariations.forEach(function (item) {
      if (item.values.length > 0) {
        fixedArray.push(item);
      } else {
      }
    });

    var timestamp = new Date().getTime();

    if (fixedArray) {
      const cartesian = (...a: any[]) =>
        a.reduce((a, b) =>
          a.flatMap((d: any) => b.map((e: any) => [d, e].flat())),
        );

      const productValues = fixedArray.map(({ values }) => values);
      const permutations = cartesian(...productValues).map(
        (e: any, index: any) => ({
          combName:
            e.length > 0
              ? e.map(({ value }: any) => value).join(' | ')
              : e.label,
          combUnicode: `${timestamp}-${index}`,
          stock: 0,
          sku: 0,
          price: 0,
          saleprice: 0,
          photo: '',
          photo_url: '',
        }),
      );
      setDataVariations([]);
      setDataVariations(permutations);
    }
  };
  useEffect(() => {
    async function getAttributesData() {
      const d = await get(CONFIG.api + 'listattributes');
      setAttributes(d);
      setLoading(false);
    }

    getAttributesData();
  }, []);

  useEffect(() => {
    onChangevariable(dataVariations);
  }, [dataVariations]);

  const setDatafunction = (val: any, id: any, name: any) => {
    const abc = dataVariations.map((vehicle) =>
      vehicle.combUnicode === id ? { ...vehicle, [name]: val } : vehicle,
    );

    //dataVariations
    setDataVariations(abc);
  };
  const setDatafunctionimage = (event: any, id: any, name: any) => {
    const abc = dataVariations.map((vehicle) =>
      vehicle.combUnicode === id
        ? {
            ...vehicle,
            [name]: event.target.files[0],
            photo_url: URL.createObjectURL(event.target.files[0]),
          }
        : vehicle,
    );

    setDataVariations(abc);
  };

  return (
    <>
      <div className="mt-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
          <div>
            <div className="w-1/2">
              {!loading ? (
                <div>
                  <InputSelect
                    name="attributes"
                    label="Attributes"
                    options={attributes}
                    defaultValue={{
                      value: initialValues.attribute
                        ? initialValues.attribute._id
                        : null,
                      label: initialValues.attribute
                        ? initialValues.attribute.name
                        : null,
                    }}
                  />
                </div>
              ) : null}
            </div>
            <span>Select Attributes </span>
            <MultiSelect
              options={options}
              value={selected1}
              onChange={setSelected1}
              labelledBy="Select"
            />
          </div>
          {selected1.map((bird) => (
            <>
              {bird.value === 'size' ? (
                <>
                  <div>
                    <span>Select {bird.label} Values</span>
                    <MultiSelect
                      options={optionsSize}
                      value={selectedSize}
                      onChange={setSelectedSize}
                      labelledBy="Select"
                    />
                  </div>
                </>
              ) : (
                ''
              )}

              {bird.value === 'color' ? (
                <>
                  <div>
                    <span>Select {bird.label} Values</span>
                    <MultiSelect
                      options={optionsColor}
                      value={selectedColor}
                      onChange={setSelectedColor}
                      labelledBy="Select"
                    />
                  </div>
                </>
              ) : (
                ''
              )}

              {bird.value === 'material' ? (
                <>
                  <div>
                    <span>Select {bird.label} Values</span>
                    <MultiSelect
                      options={optionsMaterial}
                      value={selectedMaterial}
                      onChange={setSelectedMaterial}
                      labelledBy="Select"
                    />
                  </div>
                </>
              ) : (
                ''
              )}
            </>
          ))}
        </div>
        <div className="justify-center mt-7 mb-7  flex">
          {selected1 && selected1.length > 0 && (
            <>
              <div className="w-1/2 p-1">
                <div
                  onClick={handleClick}
                  className="text-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Generate Variants
                </div>
              </div>
              <div className="w-1/2 p-1">
                <div
                  onClick={handleClickClear}
                  className="text-center  rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Clear Variants
                </div>
              </div>
            </>
          )}
        </div>
        {dataVariations && dataVariations.length > 0 && (
          <>
            {dataVariations.map((d23, i) => (
              <div className="mb-4.5">
                <div className="h-px mt-6 mb-6  border-b border-dashed border-border-base border-indigo-100" />
                <div className="flex justify-between">
                  <h5 className="block text-body-dark font-semibold text-sm leading-none mb-8 !text-lg">
                    Variant : {d23?.combName} ({d23?.combUnicode})
                  </h5>

                  <div className="" style={{ color: 'Red' }}>
                    <svg
                      className="fill-current"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-5.5 mb-4.5">
                  <div className="w-1/2">
                    <label className="mb-3 block text-black dark:text-white">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      type="text"
                      placeholder="Price"
                      value={d23?.price ? d23?.price : ''}
                      onChange={(e) => {
                        setDatafunction(
                          e.target.value,
                          d23?.combUnicode,
                          'price',
                        );
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    {/* <InputText name={`sale_price[${i}]`} label="Sale Price*" /> */}
                    <label className="mb-3 block text-black dark:text-white">
                      Sale Price
                    </label>
                    <input
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      type="text"
                      placeholder="Sale Price"
                      value={d23?.saleprice ? d23?.saleprice : ''}
                      onChange={(e) => {
                        setDatafunction(
                          e.target.value,
                          d23?.combUnicode,
                          'saleprice',
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-5.5 mb-4.5">
                  <div className="w-1/2">
                    {/* <InputText name={`quantity[${i}]`} label="Quantity*" /> */}
                    <label className="mb-3 block text-black dark:text-white">
                      Quantity
                    </label>
                    <input
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      type="text"
                      placeholder="Quantity"
                      value={d23?.stock ? d23?.stock : ''}
                      onChange={(e) => {
                        setDatafunction(
                          e.target.value,
                          d23?.combUnicode,
                          'stock',
                        );
                      }}
                    />
                  </div>
                  <div className=" w-1/2">
                    {/* <InputText name={`sku[${i}]`} label="SKU*" /> */}
                    <label className="mb-3 block text-black dark:text-white">
                      Sku
                    </label>
                    <input
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      type="text"
                      placeholder="Sku"
                      value={d23?.sku ? d23?.sku : ''}
                      onChange={(e) => {
                        setDatafunction(
                          e.target.value,
                          d23?.combUnicode,
                          'sku',
                        );
                      }}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor={`countries-${i}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image and size should not be more than 2MB
                  </label>

                  {/* Hello world */}
                  <label
                    htmlFor={`countries66-${i}`}
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
                      id={`countries66-${i}`}
                      type="file"
                      className="hidden"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => {
                        setDatafunctionimage(e, d23?.combUnicode, 'photo');
                      }}
                    />
                  </label>
                </div>
                {d23?.photo_url && (
                  <>
                    <div className="flex gap-5.5 mb-4 mt-5">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Preview
                        </label>

                        <img
                          src={d23?.photo_url}
                          alt="Image Preview"
                          className="p-1 rounded ring-2 ring-black-300 dark:ring-black-500 w-36 h-36 "
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
