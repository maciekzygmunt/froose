import React, { forwardRef, Fragment, useContext } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Tab } from '@headlessui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FavoriteCity } from '../types';
import { usePreferencesContext } from '../context/preferencesContext';
import { useFavoritesContext } from '../context/favoritesContext';

interface Props {
  href: string;
  children: React.ReactNode;
  className: string;
}

const MyLink: React.FC<Props> = forwardRef(
  ({ href, children, className }, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    return (
      <Link href={href}>
        <a ref={ref} className={className}>
          {children}
        </a>
      </Link>
    );
  }
);

MyLink.displayName = 'MyLink';

const Dropdown = () => {
  const preferencesCtx = usePreferencesContext();
  const favCtx = useFavoritesContext();

  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ');
  };

  const changeTimeFormatHandler = () => {
    preferencesCtx?.toggleTimeFormat();
  };

  const changeUnitsHandler = (i: number) => {
    preferencesCtx?.toggleUnits();
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {favCtx?.favorites.length !== 0 && (
              <div className="px-1 py-1 ">
                <p className="text-xs ml-1 text-slate-700">Favorites:</p>
                {favCtx?.favorites.map((fav: FavoriteCity, i: number) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <MyLink
                        className={`${
                          active ? 'bg-blue-400 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-400 hover:text-blue-100`}
                        href={`/${fav.latitude}/${fav.longitude}`}
                      >
                        {fav.city}
                      </MyLink>
                    )}
                  </Menu.Item>
                ))}
              </div>
            )}
            <div className="px-1 py-1">
              <p className="text-xs ml-1 text-slate-700">Time format:</p>
              <Tab.Group
                defaultIndex={preferencesCtx?.preferences.timeFormat}
                onChange={changeTimeFormatHandler}
              >
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
              <Tab.Group
                defaultIndex={preferencesCtx?.preferences.units === 'metric' ? 0 : 1}
                onChange={changeUnitsHandler}
              >
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-400 p-1">
                  <Tab
                    key={'metric'}
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
                    key={'imperial'}
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
