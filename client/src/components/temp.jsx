import React from "react";

const temp = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#f7f8f9]">
        <div className="h-auto  w-96  rounded-lg p-4">
          {/* <div className="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
            <p className="set_date">Thursday 28 May</p>
            <p className="set_time">8:00 AM</p>
          </div> */}
          <p className="text-2xl font-semibold mt-2 text-[#063c76] text-center">
            Task Manager
          </p>
          {/* <div className="w-full mt-4 flex text-sm flex-col text-center justify-center ">
            <div className=" px-[15px] flex justify-between text-center items-center">
              <p>s</p>
              <p>m</p>
              <p>t</p>
              <p>w</p>
              <p>t</p>
              <p>f</p>
              <p>s</p>
            </div>
            <div className="w-full pl-1 flex justify-between text-center items-center">
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>24</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>25</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>26</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>27</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>28</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>29</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
                <p>30</p>
              </span>
            </div>
          </div> */}
          <ul className="my-4 ">
            <li className=" mt-4" id="1">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check1"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(1)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike1"
                    className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    take out the trash
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  9:00 AM
                </span>
              </div>
            </li>
            <li className=" mt-4" id="2">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check2"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(2)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike2"
                    className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    do homework{" "}
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  12:00 PM
                </span>
              </div>
            </li>
            <li className=" mt-4" id="3">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check3"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(3)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike3"
                    className="strike_none  text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    go to grocery store
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  1:00 PM
                </span>
              </div>
            </li>
            <li className=" mt-4" id="4">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check4"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(4)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike4"
                    className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    run 5 kilometers
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  4:20 PM
                </span>
              </div>
            </li>
            <li className=" mt-4" id="5">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check5"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(5)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike5"
                    className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    load the dishwasher
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  9:00 PM
                </span>
              </div>
            </li>
            <li className=" mt-4" id="6">
              <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                  <span
                    id="check6"
                    className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                    onclick="checked(6)"
                  >
                    <i className="text-white fa fa-check"></i>
                  </span>
                  <strike
                    id="strike6"
                    className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                  >
                    Take out the trash
                  </strike>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
                  9:00 AM
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default temp;
