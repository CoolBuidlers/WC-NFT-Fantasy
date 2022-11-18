import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ActivityTable = () => {
  // State to store the countries
  const [countries, setCountries] = useState<any[]>([]);

  // Get the Data from the URL Query
  const getData = async (): Promise<void> => {
    try {
      const query = `https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=${process.env.NEXT_PUBLIC_API_KEY}`;

      const res = await axios.get(query);
      console.log(process.env.API_KEY);

      if (res.data.erros) {
        console.error(res.data.errors);
        throw new Error("Query Error");
      }
      console.log(res.data);
      setCountries(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Runs when the component loads
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-2xl shadow-[#8900F2] min-h-[60vh] overflow-y-auto border-x-[6px] border-t-[6px] border-b-[4px] border-white md:w-[80vw] w-[90vw]">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg text-white uppercase bg-[#8900F2] text-center">
          <tr>
            <th scope="col" className="py-10 px-6">
              Country ID
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Flag
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.length != 0 ? (
            countries.map((country) => {
              return (
                <tr
                  key={country.id}
                  className="bg-transparent text-white border-b-2 border-white text-center"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    {country.id}
                  </th>
                  <td className="py-4 px-6">{country.name}</td>
                  <td className="py-4 px-6">
                    <Image
                      src={country.logo_path}
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="bg-transparent text-white border-b-2 border-white text-center">
              <th
                colSpan={2}
                scope="row"
                className="py-4 px-6 font-medium whitespace-nowrap"
              >
                No country yet!
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
