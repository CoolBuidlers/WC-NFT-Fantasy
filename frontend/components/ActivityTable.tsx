import React from "react";

const ActivityTable = ({ rounds }: { rounds: any[] }) => {
  return (
    <div className="overflow-x-auto w-11/12 relative shadow-2xl shadow-[#8900F2] h-[60vh] overflow-y-auto border-x-[6px] border-t-[6px] border-b-[4px] border-white mx-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg text-white uppercase bg-[#8900F2] text-center">
          <tr>
            <th scope="col" className="py-10 px-6">
              Country ID
            </th>
            <th scope="col" className="py-3 px-6">
              Round
            </th>
          </tr>
        </thead>
        <tbody>
          {rounds && rounds.length != 0 ? (
            rounds.map((round, index) => {
              return (
                <tr
                  key={round.id}
                  className="bg-transparent text-white border-b-2 border-white text-center"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    {round.id}
                  </th>
                  <td className="py-4 px-6">{round.countryIds[index]}</td>
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
