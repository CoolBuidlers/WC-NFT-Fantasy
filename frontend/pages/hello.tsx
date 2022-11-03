import React, {useEffect} from "react"


const Hello = () => {

   // 14219 - IC Play-Off 1
    //14220 - IC Play-Off 2

    //Costa Rica
    //Australia
const fetchData = async() => {
 const standings = await fetch(
   `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=3ea27ea0-48bc-11ed-b28c-c7621712479b&season_id=3072`
 );
 console.log(standings.json())
}

const fetchData2 = async () => {
  const rounds = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/rounds?apikey=3ea27ea0-48bc-11ed-b28c-c7621712479b&season_id=3072`
  );
  console.log(rounds.json());
};

const fetchData3 = async () => {
  const team = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/teams/14219?apikey=3ea27ea0-48bc-11ed-b28c-c7621712479b`
  );
  console.log(team.json());
};

 useEffect(() => {
   //fetchData()
   //fetchData2()
   //fetchData3()
 }, [])
  return (
    <main>
     
    </main>
  );
};

export default Hello;
