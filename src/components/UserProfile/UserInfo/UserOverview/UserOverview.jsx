import userProfilePic from "../../../../assets/images/user_profile/profile-pic.png";

const UserOverview = () => {
  return (
    <div className="flex justify-between md:-mb-16">
      <div className="flex gap-[26px]">
        <figure className="relative lg:-top-32 md:-top-28 -top-20">
          <img
            className="lg:w-[200px] md:w-[150px] w-[100px]"
            src={userProfilePic}
            alt="User Profile Pic"
          />
        </figure>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-[#2B2B2B] md:text-2xl text-xl font-semibold">
              John Doe <sub>•</sub>
            </h2>
            <small className="text-[#76A4CE] text-xs font-[300]">
              @johndoe
            </small>
          </div>
          <div className="text-xs md:text-[14px] font-normal text-[#1B1C1E]">
            <h3>Astrophotographer 🌌</h3>
            <h3>Gamer 👾</h3>
          </div>
        </div>
      </div>
      <button className="md:px-[18px] px-3 md:py-[6px] py-1 h-max bg-[#196AA0] text-[#FEFEFE] rounded-full">
        Follow
      </button>
    </div>
  );
};

export default UserOverview;
