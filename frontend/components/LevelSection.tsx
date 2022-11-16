const LevelSection = ({ predictors }: any) => {
  // Makes an entry where time a user mints a token
  return (
    <div className="border-4 border-white sm:mx-20 mb-20 py-10 shadow-2xl shadow-[#8900F2] overflow-y-scroll h-[35vh]">
      {predictors?.length != 0 ? (
        predictors?.map((pred: any) => {
          return pred?.tokens?.map((token: any) => {
            return (
              <div
                key={token.id}
                className="text-white md:text-lg flex justify-center py-1"
              >
                <p> {pred.id} just minted a level 1 token</p>
              </div>
            );
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
