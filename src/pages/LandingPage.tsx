import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { calculateStats } from "../lib/calculateStats";
import BikeTheftChart from "../components/DateLineChart";
import DateLineChart from "../components/DateLineChart";
export interface LocationStatsType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}
const LandingPage = (): JSX.Element => {
  const { locs } = calculateStats();
  const data = {
    labels: Object.keys(locs),
    datasets: [
      {
        label: "Theft rate by country",
        data: Object.values(locs).map((e) => e),
      },
    ],
  };
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
  };
  return (
    <main className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center relative h-1">
      <div className="absolute bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 w-[100%] h-[100%] opacity-20"></div>
      <div className="h-full relative z-20 flex justify-center items-center">
        {/* hero */}
        <div className="flex flex-col items-center p-4 ">
          <h1 className="text-3xl md:text-6xl text-center text-white leading-relaxed">
            Don't Let Bike Theft Ruin Your Day <br /> Use Our Theft Tracker
          </h1>
          <p className="mt-10 text-sm md:text-lg text-white text-center">
            Bike theft can be a frustrating and upsetting experience,
            <br />
            especially if you rely on your bike for transportation or use it
            <br />
            for leisure activities. That's why we created our theft tracker
            <br />
            web app
          </p>
          <form className="w-full max-w-xl mt-10">
            <div className="bg-white rounded-full flex justify-between items-center p-2">
              <input
                type="text"
                className="rounded-full border-none outline-none px-4 w-full"
                placeholder="Bike"
                value={searchQuery}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(event.target.value)
                }
              />
              <button
                onClick={handleSearch}
                className="text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-[#e3e3e3] ">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <BarChart data={data} />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Bar Chart</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pretium pretium tempor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <DateLineChart />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Line Chart</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pretium pretium tempor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <PieChart />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Pie Chart</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pretium pretium tempor.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
