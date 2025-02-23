import photo1 from "../../../../assets/images/user_features/photo-1.png";
import photo2 from "../../../../assets/images/user_features/photo-2.png";
import photo3 from "../../../../assets/images/user_features/photo-3.png";
import photo4 from "../../../../assets/images/user_features/photo-4.png";

const photos = [photo1, photo2, photo3, photo4];

const Photos = () => {
  return (
    <div className="text-[#2B2B2B] flex-1">
      <h2 className="md:text-2xl text-lg font-semibold mb-2">Photo</h2>
      <figure className="grid grid-cols-2 lg:w-max">
        {photos?.map((photo) => (
          <img key={photo} src={photo} alt="Photo" />
        ))}
      </figure>
      <div className="flex justify-end mt-2 text-blue-400">
        <button>More +</button>
      </div>
    </div>
  );
};

export default Photos;
