import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Tab } from '@headlessui/react';
import useLocalStorage from '../utils/useLocalStorage';

const Dropdown = () => {
  const [timeFormat, setTimeFormat] = useLocalStorage('timeFormat', 1);
  const [units, setUnits] = useLocalStorage('units', 0);

  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ');
  };

  const changeTimeFormatHandler = (i: number) => {
    setTimeFormat(i);
  };

  const changeUnitsHandler = (i: number) => {
    setUnits(i);
  };

  return (
    <div className="z-10 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex ml-2 justify-center items-center bg-white hover:bg-slate-200 transition-all duration-150 ease-out border border-slate-300 w-10 h-10 rounded-full hover:drop-shadow-md">
          <AiOutlineMenu />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-400 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Favourites
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <p className="text-xs ml-1 text-slate-700">Time format:</p>
              <Tab.Group defaultIndex={timeFormat} onChange={changeTimeFormatHandler}>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-400 p-1">
                  <Tab
                    key={1}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 focus:outline-none',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    12h
                  </Tab>
                  <Tab
                    key={2}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'focus:outline-none',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    24h
                  </Tab>
                </Tab.List>
              </Tab.Group>
            </div>
            <div className="px-1 py-1">
              <p className="text-xs ml-1 text-slate-700">Units:</p>
              <Tab.Group defaultIndex={units} onChange={changeUnitsHandler}>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-400 p-1">
                  <Tab
                    key={1}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 focus:outline-none',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    metric/°C
                  </Tab>
                  <Tab
                    key={2}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'focus:outline-none',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    imperial/°F
                  </Tab>
                </Tab.List>
              </Tab.Group>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default Dropdown;
