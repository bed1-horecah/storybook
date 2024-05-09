import React from 'react';
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
    return (
        <div className="text-[#FE8B4C] text-center my-10">
            <button
              className="border-2 color-[#FFF9F6] border-[#FE8B4C] rounded-full p-2"
            >
            <AddIcon className="font-bold text-3xl" />
            </button>
            <p className="mt-2">
              Add Award / Certification
            </p>
        </div>
    );
};

export default AddButton;