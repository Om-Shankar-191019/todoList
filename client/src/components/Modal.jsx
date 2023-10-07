import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TodoContext } from "../context/todoContext";
const BASE_URL = `http://localhost:5000`;

const Modal = ({ isOpen, onClose, title, status, _id }) => {
  const [inputValue, setInputValue] = useState(title);
  const [isChecked, setIsChecked] = useState(status);
  const { setTodoList } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`${BASE_URL}/api/post/${_id}`, {
        title: inputValue,
        status: isChecked,
      });
      const updatedData = await axios.get(`${BASE_URL}/api/post`);
      toast.success("task updated successfully");
      setTodoList(updatedData.data.tasks);
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("something went wrong! Try again.");
        console.log(error);
      }
    }
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 w-full h-full flex items-center justify-center z-50`}
    >
      <div className="bg-white w-96 p-4 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Edit todo</h2>
        <input
          type="text"
          placeholder="Edit Task..."
          className="border rounded-lg px-4 py-2 mb-2 w-full"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span>Task completed</span>
        </label>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 mx-2 rounded-lg"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
