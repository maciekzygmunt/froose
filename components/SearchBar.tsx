import { AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center m-4 relative shadow-md md:max-w-lg md:mx-auto">
        <AiOutlineSearch className="w-6 h-6 absolute pointer-events-none text-slate-600 left-2" />
        <input
          type="text"
          className="rounded w-full h-12 pl-10  border border-slate-300 placeholder:italic placeholder:font-medium outline-none focus:ring-2 focus:ring-slate-600 focus:shadow-xl transition-all ease-out duration-150"
          placeholder="Search..."
        />
        <BiCurrentLocation className="absolute right-2 w-6 h-6 text-slate-600 cursor-pointer" />
      </div>
    </>
  );
};

export default SearchBar;
