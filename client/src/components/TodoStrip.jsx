import React, { useContext } from "react";
import { BsCheck2All } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
{
  /* <BsDashCircleDotted />
<RxCross2 />

 */
}

const BASE_URL = `http://localhost:5000`;

const TodoStrip = ({ title, status, _id }) => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const handleDelete = async () => {
    try {
      const response = axios.delete(`${BASE_URL}/api/post/${_id}`);
      const newList = todoList.filter((item) => item._id != _id);
      setTodoList(newList);
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("something went wrong! Try again.");
      }
    }
  };
  return (
    <div className=" mt-4">
      <div className="flex ">
        <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
          <button>
            {status && status === "pending" ? (
              <BsDashCircleDotted />
            ) : (
              <BsCheck2All />
            )}
          </button>
          <p className=" text-sm ml-4 text-[#5b7a9d] font-semibold">{title}</p>
        </div>
        <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex gap-4 justify-center text-lg text-[#5b7a9d] font-semibold items-center ">
          <button>
            <AiOutlineEdit />
          </button>
          <button onClick={handleDelete}>
            <MdOutlineDelete />
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoStrip;
