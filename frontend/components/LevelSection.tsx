const LevelSection = ({ predictors, swaps }: any) => {
  // Makes an entry where time a user mints a token
  return (
    <div className="border-4 border-white py-4 mx-auto max-w-[90vw] md:max-w-[80vw] mb-32 shadow-2xl shadow-[#8900F2] overflow-y-scroll overflow-x-scroll ">
      {swaps &&
        swaps.length > 0 &&
        swaps.map((swap: any) => {
          return (
            <div
              key={swap.id}
              className="text-white md:text-lg flex justify-center py-1"
            >
              <p>A swap just happened!</p>
            </div>
          );
        })}

      {predictors?.length != 0 ? (
        predictors?.map((pred: any) => {
          return pred?.tokens?.map((token: any) => {
            if (token.level == 1) {
              return (
                <div
                  key={token.id}
                  className="text-white md:text-lg flex justify-center py-1"
                >
                  <p> {pred.id} just minted a level 1 token</p>
                </div>
              );
            } else {
              return (
                <div
                  key={token.id}
                  className="text-white md:text-lg flex justify-center py-1"
                >
                  <p>
                    {" "}
                    {pred.id} just evolved his NFT to level {token.level}
                  </p>
                </div>
              );
            }
          });
        })
      ) : (
        <div className="text-white md:text-lg flex justify-center py-1">
          <p> Nothing to report.. yet</p>
        </div>
      )}
    </div>
  );
};

export default LevelSection;
