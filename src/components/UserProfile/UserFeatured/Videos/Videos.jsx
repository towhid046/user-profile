import video1 from "../../../../assets/images/user_features/video-1.png";
import video2 from "../../../../assets/images/user_features/video-2.svg";
import video3 from "../../../../assets/images/user_features/video-3.svg";
import video4 from "../../../../assets/images/user_features/video-4.svg";
import youtubeIcon from "../../../../assets/images/user_features/youtube-icon.png";
const videos = [video2, video3, video4];

const Videos = () => {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <h2 className="md:text-2xl text-lg font-semibold">Videos</h2>
        <figure className="my-2">
          <img
            className="cursor-pointer w-full min-h-[100px]"
            src={video1}
            alt="Video"
          />
        </figure>
      </div>
      <div>
        <ul className="flex items-center justify-between gap-2">
          {videos?.map((video) => (
            <li key={video} className="relative">
              <img className="w-32 cursor-pointer" src={video} alt="Video" />
              <img
                className="absolute top-[42%] left-[38%] md:w-8 cursor-pointer"
                src={youtubeIcon}
                alt=""
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-2 text-blue-400">
          <button>More +</button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
