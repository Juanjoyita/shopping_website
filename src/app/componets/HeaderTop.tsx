import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-4">
                        <div className="header_top_icon_wrapper bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-accent hover:text-white">
                            <BsFacebook />
                        </div>
                        <div className="header_top_icon_wrapper bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-accent hover:text-white">
                            <BsTwitter />
                        </div>
                        <div className="header_top_icon_wrapper bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-accent hover:text-white">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-accent hover:text-white">
                            <BsLinkedin />
                        </div>
                    </div>

                    <div className="text-gray-500 text-[12px]">
                        <b> FREE SHIPPING</b>THIS WEEK ORDER OVER -$55
                    </div>
                    <div className="flex gap-4">
  <select
        className="text-gray-500 text-[12px] w-[70px]"
        name="currency"
        id="currency"
    >
        <option value="USD">USD $</option>
        <option value="EUR">EUR €</option>
        <option value="GBP">COP $</option>
    </select>

    <select
        className="text-gray-500 text-[12px] w-[70px]"
        name="Language"
        id="Language"
    >
        <option value="USD">English </option>
        <option value="EUR">Español </option>
        
    </select>
</div>
                    
                    </div>    
                </div>
            </div>
    );
}


export default HeaderTop;
