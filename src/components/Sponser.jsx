const Sponser = () => {
  return (
    <div className="bg-[rgb(236,234,227)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 rounded-lg justify-around">
        <div className="bg-white shadow-lg p-3 rounded-lg space-y-2">
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728109201/1_sutxrv.png"
            alt=""
          />
          <h2 className="font-medium text-2xl">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="bg-white shadow-lg p-3 rounded-lg space-y-2">
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728109225/2_kfyump.png"
            alt=""
          />
          <h2 className="font-medium text-2xl">High Quality</h2>
          <p>
            We served the coffee to you maintaining coffee beans best quality
          </p>
        </div>
        <div className="bg-white shadow-lg p-3 rounded-lg space-y-2">
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728109232/3_xmzdtp.png"
            alt=""
          />
          <h2 className="font-medium text-2xl">Pure Grades</h2>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="bg-white shadow-lg p-3 rounded-lg space-y-2">
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728109238/4_udfzt8.png"
            alt=""
          />
          <h2 className="font-medium text-2xl">Proper Roasting</h2>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
