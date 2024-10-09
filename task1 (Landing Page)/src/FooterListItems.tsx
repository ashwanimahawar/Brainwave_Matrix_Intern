import React from "react";

interface FooterListItemsProps {
  text: string;
  buttonText?: string
}

const FooterListItems: React.FC<FooterListItemsProps> = ({ text, buttonText }) => {
  return (
    <li className="text-blue-500 cursor-pointer leading-7 hover:text-gray-600">
      {text} <button className="bg-green-500 text-[11px] px-[5px] py-[0px] text-white font-bold rounded-[2px] ml-2">{buttonText}</button>
    </li>
  );
};
export default FooterListItems;
