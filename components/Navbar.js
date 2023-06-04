import {selectionSort} from "../algorithms/selectionSort";
import { bubbleSort} from "../algorithms/bubbleSort";
import { mergeSort} from "../algorithms/mergeSort";
import {quickSort} from "../algorithms/quicksort";
import {insertionSort} from "../algorithms/insertion";


const Navbar = ({generateRandomArray,setSpeed})=>{

  function handleOnchange(event){
    setSpeed(parseInt(event.target.value));
}  

    return(
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
                 <h3 className="text-xl text-white font-bold">SORTING VISUALIZER</h3>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
               <a href="#" onClick={bubbleSort} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">bubble sort</a>
    
                <a href="#" onClick={mergeSort} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">merge sort</a>
    
                <a href="#" onClick={quickSort} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">quick sort</a>
    
                <a href="#" onClick={selectionSort} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">selection sort</a>

                <a href="#" onClick={insertionSort} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">insertion sort</a>

                <button onClick={generateRandomArray} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border mx-2 border-blue-500 hover:border-transparent rounded">
      generate newArray
           </button> 
           <div className="flex flex-row w-10 items-center p-2">
             <label className="text-white mr-3 font-medium">Speed</label> 
             <input className="border-3" onChange={handleOnchange} type="range" min="0" max="100" steps="25"/>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
    )

}

export default Navbar;