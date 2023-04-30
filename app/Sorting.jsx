"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";

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
  const [selectedPopularity, setSelectedPopularity] = useState(false);
  const [selectedVote, setSelectedVote] = useState(false);
  const [selectedAZ, setSelectedAZ] = useState(false);

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
    setSelectedPopularity(true);
    setSelectedVote(false);
    setSelectedAZ(false);
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
    setSelectedPopularity(false);
    setSelectedVote(true);
    setSelectedAZ(false);
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
    setSelectedPopularity(false);
    setSelectedVote(false);
    setSelectedAZ(true);
  };

  return (
    <div className="section-sort">
      {content.length > 0 && (
        <Menu as="div" className="relative inline-block text-right">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-transparent border border-white-900">
              {!selectedVote && !selectedPopularity && !selectedAZ && "Sort by"}
              {selectedVote && getterSortVote === "asc" ? "Most Liked" : ""}
              {selectedVote && getterSortVote === "desc" ? "Least Liked" : ""}
              {selectedPopularity && getterSortPopularity === "desc"
                ? "Least Popular"
                : ""}
              {selectedPopularity && getterSortPopularity === "asc"
                ? "Most Popular"
                : ""}
              {selectedAZ && getterSortAlphabet === "desc" ? "A-Z" : ""}
              {getterSortAlphabet === "asc" && selectedAZ ? "Z-A" : ""}

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
            <Menu.Items className="menu-items absolute right-0 w-44 mt-2 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-white-800">
              <div className="py-1">
                <Menu.Item onClick={orderByPopularity}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {getterSortPopularity === "asc"
                        ? "Least Popular"
                        : "Most Popular"}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item onClick={orderByVote}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {getterSortVote === "asc" ? "Least Liked" : "Most Liked"}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item onClick={orderByAlphabet}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {!selectedAZ && "A-Z"}
                      {selectedAZ && getterSortAlphabet === "asc" ? "A-Z" : ""}
                      {getterSortAlphabet === "desc" && selectedAZ ? "Z-A" : ""}
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
}
