import photo1 from '../../../assets/images/user_features/photo-1.png'
import photo2 from '../../../assets/images/user_features/photo-2.png'
import photo3 from '../../../assets/images/user_features/photo-3.png'
import photo4 from '../../../assets/images/user_features/photo-4.png'

import video1 from '../../../assets/images/user_features/video-1.png'
import video2 from '../../../assets/images/user_features/video-2.svg'
import video3 from '../../../assets/images/user_features/video-3.svg'
import video4 from '../../../assets/images/user_features/video-4.svg'
import youtubeIcon from '../../../assets/images/user_features/youtube-icon.png'


const photos = [photo1, photo2, photo3, photo4]
const videos = [video2, video3, video4]

const UserFeatured = () => {
  return (
    <aside className='flex xl:flex-col justify-between gap-6 mb-7'>

        <div className='text-[#2B2B2B] flex-1'>
          <h2 className='md:text-2xl text-lg font-semibold mb-2'>Photo</h2>
          <figure className='grid grid-cols-2 lg:w-max'>
            {photos?.map(photo=>(
              <img key={photo}  src={photo} alt="Photo" />
            ))}
          </figure>
          <div className='flex justify-end mt-2 text-blue-400'>
            <button>More +</button>
          </div>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div>
          <h2 className='md:text-2xl text-lg font-semibold'>Videos</h2>
          <figure className='my-2'>
            <img className='cursor-pointer w-full min-h-[100px]' src={video1} alt="Video" />
          </figure>
          </div>
          <div>
          <ul className='flex items-center justify-between gap-2'>
            {videos?.map(video=>(
              <li key={video} className='relative'>
                <img className='w-32 cursor-pointer' src={video} alt="Video" />
                <img className='absolute top-[42%] left-[38%] md:w-8 cursor-pointer' src={youtubeIcon} alt="" />
              </li>
            ))}
          </ul>
          <div className='flex justify-end mt-2 text-blue-400'>
            <button>More +</button>
          </div>
          </div>
        </div>
    </aside>
  )
}

export default UserFeatured