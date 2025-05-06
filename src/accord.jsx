import React from "react";

export default function Accordion() {
  return (
    <div className="font-extrabold flex flex-col items-center justify-center">
      {/* <div className="w-full bg-white rounded-lg shadow-md">
                <div className="flex flex-col p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                            Accordion
                        </h3>
                        <button
                            className="flex items-center justify-center rounded-full bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={() => setOpen(!open)}
                        >
                            <svg
                                className={`${
                                    open ? "rotate-180" : ""
                                } h-6 w-6 transform`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            open ? "" : "hidden"
                        } overflow-hidden transition-all duration-500 ease-in-out`}
                    >
                        <div className="border border-gray-200 p-6">
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut eleifend libero sed
                                consectetur eleifend. Integer posuere erat a
                                ante.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* Accordion 1 */}

      <div className="m-2 space-y-2">
        <div
          className="group flex flex-col gap-2 rounded-lg bg-fuchsia-600 p-5 text-white"
          tabindex="1"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span> Drinks </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible w-full h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            <div className="flex flex-col gap-2 rounded-lg bg-fuchsia-900 p-5 text-white">
              <div className="flex min-w-[50vw] justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Starlight Mojito
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">60</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Galaxy Smoothie
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">65</h3>
              </div>
              <div className="flex justify-between  items-center">
                <h3 className="text-lg font-medium text-White">
                  Milky Way Shake
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">70</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Zero Gravity Coffee
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">100</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Cosmic Blue Lemonade
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">110</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group flex flex-col gap-2 rounded-lg bg-fuchsia-600 p-5 text-white"
          tabindex="2"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span> Main dishes </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            <div className="flex flex-col gap-2 rounded-lg bg-fuchsia-900 p-5 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Galactic Burger
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">160</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">Nebula Steak</h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">120</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">Meteor Fries</h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">140</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">Cosmic Pasta</h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">130</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Supernova Chicken
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">120</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group flex flex-col gap-2 rounded-lg bg-fuchsia-600 p-5 text-white"
          tabindex="3"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span> Desserts </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            <div className="flex w-full flex-col gap-2 rounded-lg bg-fuchsia-900 p-5 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  stardust Donuts
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">50</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Nebula Ice Cream
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">30</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Planetary CheeseCake
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">60</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Moon Rock Brownies
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">65</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-White">
                  Black Hole Lava Cake
                </h3>{" "}
                 
                <h3 className="text-lg font-medium text-White">80</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
