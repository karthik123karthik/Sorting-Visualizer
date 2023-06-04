const Navbartwo = ({setArray}) => {


    function cleargrid(){
        setArray(Array.from({ length: 18 }, () => Array(37).fill(0)))
      }



  return (
    <nav className="bg-gray-800 p-2">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <h3 className="text-xl text-white font-bold">ALGORITHM VISUALIZER</h3>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
            >
              bubble sort
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              merge sort
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              quick sort
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              selection sort
            </a>
          <button onClick={cleargrid} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border mx-2 border-blue-500 hover:border-transparent rounded">Clear Grid</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbartwo;
