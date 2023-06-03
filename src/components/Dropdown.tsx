"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface dropdown {
  handleOrder: (sort: "name" | "date") => void;
}

export function Dropdown({ handleOrder }: dropdown) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-300 text-gray-700 font-semibold p-2 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>Ordernar</span>
        <ChevronDown className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-28 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={() => handleOrder("date")}
            className="w-full flex  px-4 py-2 text-gray-800  hover:bg-gray-100"
          >
            <p className="self-start">Data</p>
          </button>
          <button
            onClick={() => handleOrder("name")}
            className="w-full flex px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Nome
          </button>
        </div>
      )}
    </div>
  );
}
