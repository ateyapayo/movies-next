"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { useSearchContext } from "@/context/SearchContext";

function classNames(...classes) {
  return classes?.filter(Boolean)?.join(" ");
}
export default function Sorting({ content, setContent }) {
  const context = useSearchContext();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const gettingPopularity = context?.popularity?.getter;
  const settingPopularity = context?.popularity?.setter;
  const gettingAlphabet = context?.alphabet?.getter;
  const settingAlphabet = context?.alphabet?.setter;
  const gettingDate = context?.date?.getter;
  const settingDate = context?.date?.setter;

  const selectedPopularity = context?.selectPopularity?.getter;
  const selectingPopularity = context?.selectPopularity?.setter;
  const selectedDate = context?.selectDate?.getter;
  const selectingDate = context?.selectDate?.setter;
  const selectedAlphabet = context?.selectAlphabet?.getter;
  const selectingAlphabet = context?.selectAlphabet?.setter;

  const orderByPopularity = () => {
    const sortedResults = [...content].sort((a, b) =>
      gettingPopularity === "desc" || gettingPopularity === ""
        ? b?.popularity - a?.popularity
        : a?.popularity - b?.popularity
    );
    setContent(sortedResults);
    settingPopularity(
      gettingPopularity === "desc" || gettingPopularity === "" ? "asc" : "desc"
    );
    settingAlphabet("asc");
    settingDate("desc");
    selectingPopularity(true);
    selectingDate(false);
    selectingAlphabet(false);
  };

  const orderByDate = () => {
    const sortedResults = [...content].sort((a, b) => {
      const dateA = a?.first_air_date || a?.release_date;
      const dateB = b?.first_air_date || b?.release_date;

      if (gettingDate === "desc" || gettingDate === "") {
        return dateB?.localeCompare(dateA);
      } else {
        return dateA?.localeCompare(dateB);
      }
    });
    setContent(sortedResults);
    settingDate(gettingDate === "desc" || gettingDate === "" ? "asc" : "desc");
    settingPopularity("desc");
    settingAlphabet("asc");
    selectingPopularity(false);
    selectingDate(true);
    selectingAlphabet(false);
  };

  const orderByAlphabet = () => {
    const sortedResults = [...content].sort((a, b) => {
      const titleA = a?.title || a?.name;
      const titleB = b?.title || b?.name;

      if (gettingAlphabet === "desc") {
        return titleB?.localeCompare(titleA);
      } else {
        return titleA?.localeCompare(titleB);
      }
    });
    setContent(sortedResults);
    settingAlphabet(gettingAlphabet === "desc" ? "asc" : "desc");
    settingPopularity("desc");
    settingDate("desc");
    selectingPopularity(false);
    selectingDate(false);
    selectingAlphabet(true);
  };

  return (
    <div className="section-sort">
      {content?.length > 0 && (
        <Menu as="div" className="relative inline-block text-right">
          <div onMouseDown={(e) => e.stopPropagation()}>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-transparent border border-white-900">
              {!selectedDate &&
                !selectedPopularity &&
                !selectedAlphabet &&
                "Sort by"}
              {selectedDate && gettingDate === "asc" ? "Most Recent" : ""}
              {selectedDate && gettingDate === "desc" ? "Least Recent" : ""}
              {selectedPopularity && gettingPopularity === "desc"
                ? "Least Popular"
                : ""}
              {selectedPopularity && gettingPopularity === "asc"
                ? "Most Popular"
                : ""}
              {selectedAlphabet && gettingAlphabet === "desc" ? "A-Z" : ""}
              {gettingAlphabet === "asc" && selectedAlphabet ? "Z-A" : ""}

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
                <Menu.Item className="pointer" onClick={orderByPopularity}>
                  {({ active }) => (
                    <a
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {gettingPopularity === "asc"
                        ? "Least Popular"
                        : "Most Popular"}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="pointer" onClick={orderByDate}>
                  {({ active }) => (
                    <a
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {gettingDate === "asc" ? "Least Recent" : "Most Recent"}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="pointer" onClick={orderByAlphabet}>
                  {({ active }) => (
                    <a
                      className={classNames(
                        active
                          ? "bg-black text-white text-sm"
                          : "text-gray-300",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {!selectedAlphabet && "A-Z"}
                      {selectedAlphabet && gettingAlphabet === "asc"
                        ? "A-Z"
                        : ""}
                      {gettingAlphabet === "desc" && selectedAlphabet
                        ? "Z-A"
                        : ""}
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
