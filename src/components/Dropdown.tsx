"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface dropdown {
  handleOrder: (emoji: string) => void;
}

export function Dropdown({ handleOrder }: dropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("🔵");
  const iconsInf = [
    {
      name: "drink",
      emoji: "🥤",
    },
    {
      name: "hamburger",
      emoji: "🍔",
    },
    {
      name: "pizza",
      emoji: "🍕",
    },
    {
      name: "taco",
      emoji: "🌮",
    },
    {
      name: "sushi",
      emoji: "🍣",
    },
    {
      name: "coffee",
      emoji: "☕️",
    },
    {
      name: "tea",
      emoji: "🍵",
    },
    {
      name: "ice cream",
      emoji: "🍦",
    },
    {
      name: "cake",
      emoji: "🍰",
    },
    {
      name: "beer",
      emoji: "🍺",
    },
    {
      name: "apple",
      emoji: "🍎",
    },
    {
      name: "banana",
      emoji: "🍌",
    },
    {
      name: "strawberry",
      emoji: "🍓",
    },
    {
      name: "watermelon",
      emoji: "🍉",
    },
    {
      name: "lemon",
      emoji: "🍋",
    },
    {
      name: "grapes",
      emoji: "🍇",
    },
    {
      name: "carrot",
      emoji: "🥕",
    },
    {
      name: "tomato",
      emoji: "🍅",
    },
    {
      name: "broccoli",
      emoji: "🥦",
    },
    {
      name: "cheese",
      emoji: "🧀",
    },
    {
      name: "rice",
      emoji: "🍚",
    },
    {
      name: "cookie",
      emoji: "🍪",
    },
    {
      name: "chocolate",
      emoji: "🍫",
    },
    {
      name: "wine",
      emoji: "🍷",
    },
    {
      name: "cocktail",
      emoji: "🍹",
    },
    {
      name: "beer mug",
      emoji: "🍺",
    },
    {
      name: "bottle",
      emoji: "🍾",
    },
    {
      name: "fork and knife",
      emoji: "🍴",
    },
    {
      name: "plate",
      emoji: "🍽",
    },
    {
      name: "cupcake",
      emoji: "🧁",
    },
    {
      name: "popcorn",
      emoji: "🍿",
    },
    {
      name: "hot dog",
      emoji: "🌭",
    },
    {
      name: "burrito",
      emoji: "🌯",
    },
    {
      name: "pancakes",
      emoji: "🥞",
    },
    {
      name: "soda",
      emoji: "🥤",
    },
    {
      name: "doughnut",
      emoji: "🍩",
    },
    {
      name: "spaghetti",
      emoji: "🍝",
    },
    {
      name: "fries",
      emoji: "🍟",
    },
    {
      name: "bread",
      emoji: "🍞",
    },
    {
      name: "milk",
      emoji: "🥛",
    },
    {
      name: "popcorn",
      emoji: "🍿",
    },
    {
      name: "popcorn",
      emoji: "🍿",
    },
    {
      name: "trunfa",
      emoji: "🍬",
    },
    {
      name: "espeto",
      emoji: "🍡",
    },
    // Adicione mais objetos com emojis aqui
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handlerSelected(emoji: string) {
    setSelected(emoji);
    handleOrder(selected);
  }
  return (
    <div className="w-full relative">
      <button
        type="button"
        className="bg-gray-300 text-gray-700 font-semibold p-2 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span className="mr-2">Icones {selected}</span>
        <ChevronDown className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute  mt-2 py-2 w-3/4 bg-zinc-400 rounded-lg  shadow-lg z-10">
          <div className="grid grid-rows-4 grid-flow-col p-2">
            {iconsInf.map((icon) => (
              // eslint-disable-next-line react/jsx-key
              <div
                onClick={() => {
                  handlerSelected(icon.emoji);
                }}
                className="col-span-1 cursor-pointer"
              >
                {icon.emoji}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
