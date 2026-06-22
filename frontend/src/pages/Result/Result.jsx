import { NavLink } from "react-router-dom";

const Result=() => {
  const auths = JSON.parse(localStorage.getItem('disease'));
  
  if(auths && Object.keys(auths) !== 0) {
    const firstAuth = auths; // Get the first item from the array
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
        <div className="max-w-3xl w-full space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
              Predicted Disease
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {/* Our AI-powered diagnosis system has analyzed your symptoms and identified the most likely condition. */}
            </p>
          </div>
            <div className="bg-white  rounded-lg shadow-lg p-6 md:p-8 space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-green-700">{firstAuth.Diseases}</span>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Confidence level: {firstAuth.Confidence.toFixed(2)}%</p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
              Disease Description : {firstAuth.Description}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Precautions :
                <ul>
                  {firstAuth.Precautions.map((precaution, index) => (
                    <li key={index}>{index + 1}. {precaution}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavLink to="/doctor">
          <button
            type="button"
            // className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7" 
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7"
            style={{backgroundColor: "#33805D"}}
          >
            More Suggestions
          </button>
          </NavLink>
        </div>  
        </div>
      </div>
    );
  }else {
      // If auths is not an array or is empty, render a message indicating no data
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p>No data available</p>
        </div>
      );
    }
}
export default Result;