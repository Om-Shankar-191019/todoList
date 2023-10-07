import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

{
  /* <BsDashCircleDotted />
<RxCross2 />

 */
}

const TodoStrip = ({ title, status }) => {
  return (
    <div className=" mt-4">
      <div className="flex ">
        <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
          <button>
            <BsCheck2All />
          </button>
          <p className=" text-sm ml-4 text-[#5b7a9d] font-semibold">{title}</p>
        </div>
        <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex gap-4 justify-center text-lg text-[#5b7a9d] font-semibold items-center ">
          <button>
            <AiOutlineEdit />
          </button>
          <button>
            <MdOutlineDelete />
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoStrip;
