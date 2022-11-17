import { useEffect, useState } from "react";
import { worldCupQuery } from "../fetchSubgraphs/subgraphs";

const GamesTable = () => {
  // State to store the countries
  const [games, setGames] = useState<any[]>([]);

  // Fetches all Predictors
  const fetchData = async (): Promise<void> => {
    // The GraphQL query to run
    const gamesQuery = `
          query gamesQuery {
            games{
              id
              people
              gameId
              gameType
              status
            }
          }
        `;

    const data = await worldCupQuery(gamesQuery);
    setGames(data.games);
  };

  // Runs when the component loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-2xl shadow-[#8900F2] min-h-[60vh] overflow-y-auto border-x-[6px] border-t-[6px] border-b-[4px] border-white md:w-[80vw] w-[90vw]">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg text-white uppercase bg-[#8900F2] text-center">
          <tr>
            <th scope="col" className="py-10 px-6">
              Game
            </th>
            <th scope="col" className="py-3 px-6">
              Player
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {games && games.length != 0 ? (
            games.map((game) => {
              return game.people.map((person: any) => {
                return (
                  <tr
                    key={game.id}
                    className="bg-transparent text-white border-b-2 border-white text-center"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      {game.gameType}
                    </th>
                    <td className="py-4 px-6">{person}</td>
                    <td className="py-4 px-6">
                      {game.status ? "Finished" : "On going"}
                    </td>
                  </tr>
                );
              });
            })
          ) : (
            <tr className="bg-transparent text-white border-b-2 border-white text-center">
              <th
                colSpan={3}
                scope="row"
                className="py-4 px-6 font-medium whitespace-nowrap"
              >
                No games yet!
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;
