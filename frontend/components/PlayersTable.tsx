import React from "react";

const PlayersTable = ({ predictors }: any) => {
  return (
    <div className="overflow-x-auto relative shadow-2xl shadow-[#8900F2] border-x-[6px] border-t-[6px] border-b-[4px] border-white mx-5 h-[60vh] overflow-y-auto w-2/3">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg text-white uppercase bg-[#8900F2] text-center">
          <tr>
            <th scope="col" className="py-10 px-6">
              Player
            </th>
            <th scope="col" className="py-3 px-6">
              Number of Teams
            </th>
          </tr>
        </thead>
        <tbody>
          {predictors?.map((pred: any) => {
            return (
              <tr
                key={pred.id}
                className="bg-transparent text-white border-b-2 border-white text-center"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  {pred.id}
                </th>
                <td className="py-4 px-6">{pred.tokens.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
