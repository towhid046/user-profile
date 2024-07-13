import UserFeatured from "./../UserFeatured/UserFeatured";
import Articles from "./Articles/Articles";
import UserOverview from "./UserOverview/UserOverview";

const UserInfo = () => {
  return (
    <div>
      {/* user overview */}
      <UserOverview />

      <div className="xl:hidden ">
        <UserFeatured />
      </div>

      {/* user article */}
      <Articles />
    </div>
  );
};

export default UserInfo;
