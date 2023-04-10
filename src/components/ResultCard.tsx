import { Map, Marker } from "pigeon-maps";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
interface ResultCardProps {
  name: string;
  description: string;
  area: string;
  date: string;
  lat: number;
  lon: number;
  reported: string;
}

const ResultCard = ({
  name,
  description,
  area,
  date,
  lat,
  lon,
  reported,
}: ResultCardProps) => {
  const days = Math.ceil(
    (new Date().getTime() - new Date(reported).getTime()) / (1000 * 3600 * 24)
  );
  console.log(new Date().getDay());
  return (
    <div className="max-w-xs w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mb-5">
      <div className="bg-gray-400 h-64 w-full object-cover object-center">
        <Map
          defaultCenter={[lat, lon]}
          defaultZoom={5}
          mouseEvents={false}
          touchEvents={false}
        >
          <Marker width={50} anchor={[lat, lon]} />
        </Map>
      </div>
      <div className="p-4">
        <h1 className="text-gray-900 font-bold text-2xl mb-2">{name}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-3 flex items-center">
          <BsCalendar2DateFill className="text-lg mr-3" />
          <p className="text-gray-600 text-xs">{date}</p>
        </div>
        <div className="mt-3 flex items-center">
          <GrMapLocation className="text-lg mr-3" />
          <p className="text-gray-600 text-xs">{area}</p>
        </div>
        <div className="mt-3 flex justify-end">
          <p className="text-gray-600 text-xs">
            reported{" "}
            {days > 365
              ? `${Math.floor(days / 365)} ${
                  Math.floor(days / 365) > 1 ? "years" : "year"
                }`
              : `${days} ${days > 1 ? "days" : "day"}`}{" "}
            ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
