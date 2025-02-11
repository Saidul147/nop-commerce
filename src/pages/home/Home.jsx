import React, { useState } from 'react';

import { FaRegStar } from "react-icons/fa6";
import { useSelector,useDispatch } from 'react-redux';
import { setSelection,toggleSoftware } from '../../features/slice/slectionSlice';

import img1 from '../../assets/0000020_build-your-own-computer.jpeg'
import img2 from '../../assets/0000021_build-your-own-computer_550.jpeg'


const Home = () => {

  
    const productOptions = {
        processor: [
            { label: "Please select", value: 0 },
            { label: "2.2 GHz Intel Pentium Dual-Core E2200", value: 0 },
            { label: "2.5 GHz Intel Pentium Dual-Core E2200 [+€12.90]", value: 12.90 }
        ],
        ram: [
            { label: "Please select", value: 0 },
            { label: "4GB [+€17.20]", value: 17.20 },
            { label: "8GB [+€51.60]", value: 51.60 }
        ],
        hdd: [
            { label: "320 GB", value: 0 },
            { label: "400 GB [+€86.00]", value: 86.00 }
        ],
        os: [
            { label: "Vista Home [+€43.00]", value: 43.00 },
            { label: "Vista Premium [+€51.60]", value: 51.60 }
        ],
        software: [
            { label: "Microsoft Office [+€43.00]", value: 43.00 },
            { label: "Acrobat Reader [+€8.60]", value: 8.60 },
            { label: "Total Commander [+€4.30]", value: 4.30 }
        ]
    };

    const basePrice = 1075.00;

    //----------using redux:---------------

    const price = useSelector((state) => state.selection)
    const dispatch = useDispatch()

    const handleSelectionChange = (catagory,price) => {
        dispatch(setSelection({catagory,price}))
    }
    const handleSoftwareChange = (price,checked) => {
        dispatch(toggleSoftware({price,checked}))
    }
  

    //------------using useState:----------------

    // const [price, setPrice] = useState({
    //     processor: 0,
    //     ram: 0,
    //     hdd: 0,
    //     os: 0,
    //     software: []
    // });


    // const handleSelectionChange = (category, price) => {
    //     setPrice((prev) => ({
    //         ...prev,
    //         [category]: Number(price)
    //     }));
    // };

    // const handleSoftwareChange = (price, checked) => {
    //     setPrice((prev) => ({
    //         ...prev,
    //         software: checked
    //             ? [...prev.software, Number(price)]
    //             : prev.software.filter((p) => p !== Number(price))
    //     }));
    // };

    const totalPrice = basePrice +
        price.processor +
        price.ram +
        price.hdd +
        price.os +
        price.software.reduce((acc, curr) => acc + curr, 0);


    return (
        <div className='my-10 text-[#444] font-sans'>
            <div className="flex gap-6">
                <div className='max-w-[575px]'>
                    <img src={img1} alt="" />
                    ''
                </div>
                <div className='w-full '>
                    <h1 className='text-[30px] font-normal pb-4  leading-none'>Build your own computer</h1>
                    <div className='w-full h-[1px] bg-[#dddddd]'></div>

                    <div className='flex text-sm flex-col gap-6 mt-6'>
                        <p>Build it</p>
                        <div className=''>
                            <div className=" flex gap-1"> {Array.from({ length: 5 }).map((_, index) => (
                                <FaRegStar className={`${index <= 3 ? "text-yellow-500":""} text-md`} key={index}></FaRegStar>
                            ))}</div>
                            <a className='underline' href="">4 review(s)</a>
                        </div>
                        <p className='uppercase'>SKU:COMP_CUST</p>
                        <div className='flex gap-4'>
                            <div className="icon">icon</div>
                            <h2 className='text-[#444] font-bold'>Free shipping</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 text-[#444444]'>
                                <p className='font-bold '>Processor</p>
                                <span className='text-red-600'>*</span>
                            </div>
                            <div className='max-w-[60%]'>
                                <select
                                    onChange={(e) => handleSelectionChange("processor", e.target.value)}
                                    className="w-full border border-gray-300  px-2 py-2  bg-white text-gray-700 cursor-pointer"
                                >
                                    {productOptions.processor.map((option, index) => (
                                        <option key={index} value={option.value} className='text-[#777]' >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex gap-2 text-[#444444]'>
                                <p className='font-bold uppercase'>ram</p>
                                <span className='text-red-600 '>*</span>
                            </div>
                            <div>
                                <select className='border px-2 py-2' onChange={(e) => handleSelectionChange("ram", e.target.value)} >
                                    {productOptions.ram.map((option, index) => (
                                        <option key={index} value={option.value} className='text-[#777]' >{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex gap-2 text-[#444444]'>
                                <p className='font-bold uppercase'>HDD</p>
                                <span className='text-red-600 '>*</span>
                            </div>

                            <div className=" space-y-1">
                                {productOptions.hdd.map((option, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value={option.value}
                                            name="hdd"
                                            checked={price.hdd === option.value}
                                            onChange={(e) => handleSelectionChange("hdd", e.target.value)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-800">{option.label}</span>
                                    </label>
                                ))}
                            </div>

                            <div className='flex gap-2 text-[#444444]'>
                                <p className='font-bold uppercase'>OS</p>
                                <span className='text-red-600 '>*</span>
                            </div>

                            <div className='space-y-1'>
                                {productOptions.os.map((option, index) => (
                                    <label key={index} className='flex items-center space-x-2 cursor-pointer' >
                                        <input
                                            type="radio"
                                            name="oss"
                                            value={option.value}
                                            
                                            onChange={(e) => handleSelectionChange("os", e.target.value)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </div>

                            <div>
                                <h1 className='uppercase font-bold'>Software</h1>
                                <div className="mt-2 space-y-2">
                                    {productOptions.software.map((option, index) => (
                                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value={option.value}
                                                onChange={(e) => handleSoftwareChange(e.target.value, e.target.checked)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-gray-800">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className='text-xl mt-5 font-bold mb-2'>€{totalPrice.toFixed(2)}</div>
                            <div className='flex'>
                                <input type="text" className='border focus-none w-[45px] h-[43px] text-center focus:outline-none' value={1} />
                                <button className='uppercase text-[15px] text-white bg-[#4ab2f1] px-6'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
