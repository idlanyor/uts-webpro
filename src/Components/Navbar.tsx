import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
// set the target element that will be collapsed or expanded (eg. navbar menu)
const $targetEl: HTMLElement | null = document.getElementById('toggleNav');

const $triggerEl: HTMLElement | null = document.getElementById('toggleNavBtn');

const options: CollapseOptions = {
  onCollapse: () => {
    console.log('element has been collapsed');
  },
  onExpand: () => {
    console.log('element has been expanded');
  },
  onToggle: () => {
    console.log('element has been toggled');
  },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'toggleNav',
  override: true
};

const collapse: CollapseInterface = new Collapse(
  $targetEl,
  $triggerEl,
  options,
  instanceOptions
);

export default function Navbar() {
  return (
    <nav className="bg-white w-full fixed z-20 top-0 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/vite.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RoiDev</span>
        </a>
        <button data-collapse-toggle="toggleNav" id="toggleNavBtn" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="toggleNav" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="toggleNav">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Home</NavLink>
            </li>
            <li>
              <Link to="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
            </li>
            <li>
              <Link to="/project" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Project</Link>
            </li>
            <li>
              <Link to="/experience"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Experience</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}