import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation, BiLoaderAlt } from 'react-icons/bi';
import { coordsToName, nameToCoords } from '../utils/coords';
import { useGeoLocation } from '../utils/useGeoLocation';

const SearchBar = () => {
  const { latitude, longitude } = useGeoLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputValue) {
      const coords = await nameToCoords(inputValue);
      router.push(`/${coords?.latitude}/${coords?.longitude}`);
      setInputValue('');
    }
  };

  const locationHandler = async () => {
    setLoading(true);
    const placeName = await coordsToName(latitude, longitude);
    setInputValue(placeName);
    inputRef.current?.focus();
    setLoading(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center m-4 relative drop-shadow-md md:max-w-3xl md:mx-auto">
        <AiOutlineSearch className="w-6 h-6 absolute pointer-events-none text-slate-600 left-2" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded-lg w-full h-12 pl-10 border border-slate-300 placeholder:italic placeholder:font-medium outline-none focus:ring-2 focus:ring-slate-600 focus:shadow-xl transition-all ease-out duration-150"
          placeholder="Search..."
        />
        {loading && (
          <BiLoaderAlt className="animate-spin absolute right-2 w-6 h-6 text-slate-600 cursor-pointer" />
        )}
        {!loading && (
          <BiCurrentLocation
            onClick={locationHandler}
            className="absolute right-2 w-6 h-6 text-slate-600 cursor-pointer"
          />
        )}
      </div>
    </form>
  );
};

export default SearchBar;
