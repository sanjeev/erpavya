import IconSearch from '../Icons/Search';

export default function InputSearch({name, label, maxLength}) {
  return (
    <>
      <div className="w-full sm:w-1/2">
        <div className="relative">
          <span className="absolute right-4.5 top-4">
            <IconSearch />
          </span>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name={name}
            id={name}
            placeholder={label}
            maxLength={maxLength}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

    </>
  )
}
