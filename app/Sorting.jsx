"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Sorting({
  content,
  setContent,
  getterSortPopularity,
  setterSortPopularity,
  getterSortVote,
  setterSortVote,
  getterSortAlphabet,
  setterSortAlphabet,
}) {
  const orderByPopularity = () => {
    const sortedResults = [...content].sort((a, b) =>
      getterSortPopularity === "desc"
        ? b.popularity - a.popularity
        : a.popularity - b.popularity
    );
    setContent(sortedResults);
    setterSortPopularity(getterSortPopularity === "desc" ? "asc" : "desc");
    setterSortAlphabet("asc");
    setterSortVote("desc");
  };

  const orderByVote = () => {
    const sortedResults = [...content].sort((a, b) =>
      getterSortVote === "desc"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );
    setContent(sortedResults);
    setterSortVote(getterSortVote === "desc" ? "asc" : "desc");
    setterSortPopularity("desc");
    setterSortAlphabet("asc");
  };

  const orderByAlphabet = () => {
    const sortedResults = [...content].sort((a, b) => {
      const titleA = a.title || a.name;
      const titleB = b.title || b.name;

      if (getterSortAlphabet === "desc") {
        return titleB.localeCompare(titleA);
      } else {
        return titleA.localeCompare(titleB);
      }
    });
    setContent(sortedResults);
    setterSortAlphabet(getterSortAlphabet === "desc" ? "asc" : "desc");
    setterSortPopularity("desc");
    setterSortVote("desc");
  };

  return (
    <>
      {content.length > 0 && (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Options
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item onClick={orderByPopularity}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Popularity
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item onClick={orderByVote}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Vote
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item onClick={orderByAlphabet}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      A-Z
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
}
