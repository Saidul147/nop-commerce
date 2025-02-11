// import { useState } from "react";

// export default function ProductConfigurator() {
//     const basePrice = 1078;

//     // Store selections in a single state object
//     const [selections, setSelections] = useState({
//         processor: 0,
//         ram: 0,
//         hdd: 0,
//         os: 0,
//         software: []
//     });

//     // Product Options
//     const productOptions = {
//         processor: [
//             { label: "Please select", value: 0 },
//             { label: "2.2 GHz Intel Pentium Dual-Core E2200", value: 0 },
//             { label: "2.5 GHz Intel Pentium Dual-Core E2200 [+€12.90]", value: 12.90 }
//         ],
//         ram: [
//             { label: "Please select", value: 0 },
//             { label: "4GB [+€17.20]", value: 17.20 },
//             { label: "8GB [+€51.60]", value: 51.60 }
//         ],
//         hdd: [
//             { label: "320 GB", value: 0 },
//             { label: "400 GB [+€86.00]", value: 86.00 }
//         ],
//         os: [
//             { label: "Vista Home [+€43.00]", value: 43.00 },
//             { label: "Vista Premium [+€51.60]", value: 51.60 }
//         ],
//         software: [
//             { label: "Microsoft Office [+€43.00]", value: 43.00 },
//             { label: "Acrobat Reader [+€8.60]", value: 8.60 },
//             { label: "Total Commander [+€4.30]", value: 4.30 }
//         ]
//     };

//     // Generic function to update selection state
//     const handleSelectionChange = (category, price) => {
//         setSelections((prev) => ({
//             ...prev,
//             [category]: Number(price)
//         }));
//     };

//     // Handle Software checkboxes
//     const handleSoftwareChange = (price, checked) => {
//         setSelections((prev) => ({
//             ...prev,
//             software: checked
//                 ? [...prev.software, Number(price)]
//                 : prev.software.filter((p) => p !== Number(price))
//         }));
//     };

//     // Calculate total price
//     const totalPrice = basePrice +
//         selections.processor +
//         selections.ram +
//         selections.hdd +
//         selections.os +
//         selections.software.reduce((acc, curr) => acc + curr, 0);

//     return (
//         <div className="w-96 mx-auto mt-5 p-5 border rounded-md bg-white">
//             <h2 className="text-lg font-bold mb-4">Customize Your Product</h2>

//             {/* Processor */}
//             <label className="block font-semibold">Processor *</label>
//             <select className="border px-2 py-2 w-full mb-3" onChange={(e) => handleSelectionChange("processor", e.target.value)}>
//                 {productOptions.processor.map((option, index) => (
//                     <option key={index} value={option.value}>{option.label}</option>
//                 ))}
//             </select>

//             {/* RAM */}
//             <label className="block font-semibold">RAM *</label>
//             <select className="border px-2 py-2 w-full mb-3" onChange={(e) => handleSelectionChange("ram", e.target.value)}>
//                 {productOptions.ram.map((option, index) => (
//                     <option key={index} value={option.value}>{option.label}</option>
//                 ))}
//             </select>

//             {/* HDD */}
//             <label className="block font-semibold">HDD *</label>
//             {productOptions.hdd.map((option, index) => (
//                 <label key={index} className="flex items-center space-x-2 cursor-pointer">
//                     <input type="radio" name="hdd" value={option.value} onChange={(e) => handleSelectionChange("hdd", e.target.value)} />
//                     <span>{option.label}</span>
//                 </label>
//             ))}

//             {/* OS */}
//             <label className="block font-semibold mt-3">OS *</label>
//             {productOptions.os.map((option, index) => (
//                 <label key={index} className="flex items-center space-x-2 cursor-pointer">
//                     <input type="radio" name="os" value={option.value} onChange={(e) => handleSelectionChange("os", e.target.value)} />
//                     <span>{option.label}</span>
//                 </label>
//             ))}

//             {/* Software */}
//             <label className="block font-semibold mt-3">Software</label>
//             {productOptions.software.map((option, index) => (
//                 <label key={index} className="flex items-center space-x-2 cursor-pointer">
//                     <input type="checkbox" value={option.value} onChange={(e) => handleSoftwareChange(e.target.value, e.target.checked)} />
//                     <span>{option.label}</span>
//                 </label>
//             ))}

//             {/* Total Price */}
//             <div className="mt-4 text-xl font-bold text-blue-600">
//                 Total Price: €{totalPrice.toFixed(2)}
//             </div>

//             {/* Add to Cart Button */}
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md font-semibold">ADD TO CART</button>
//         </div>
//     );
// }
