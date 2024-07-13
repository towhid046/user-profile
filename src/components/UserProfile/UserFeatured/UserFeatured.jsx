import Photos from "./Photos/Photos";
import Videos from "./Videos/Videos";

const UserFeatured = () => {
  return (
    <aside className="flex xl:flex-col justify-between gap-6 mb-7">
      <Photos />
      <Videos />
    </aside>
  );
};

export default UserFeatured;
