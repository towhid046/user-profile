import photo1 from '../../../assets/images/user_features/photo-1.png'
import photo2 from '../../../assets/images/user_features/photo-2.png'
import photo3 from '../../../assets/images/user_features/photo-3.png'
import photo4 from '../../../assets/images/user_features/photo-4.png'

import video1 from '../../../assets/images/user_features/video-1.png'
const photos = [photo1, photo2, photo3, photo4]
const UserFeatured = () => {
  return (
    <aside className='space-y-5'>
        <div className='text-[#2B2B2B]'>
          <h2 className='text-2xl font-semibold mb-2 xl:text-left text-center'>Photo</h2>
          <figure className='grid grid-cols-2 w-max mx-auto'>
            {photos?.map(photo=>(
              <img key={photo} src={photo} alt="Photo" />
            ))}
          </figure>
          <div className='flex justify-end mt-2 mr-4 text-blue-400'>
            <button>More +</button>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-2 xl:text-left text-center'>Videos</h2>
          <figure className='flex justify-center '>
            <img src={video1} alt="Video" />
          </figure>
        </div>
    </aside>
  )
}

export default UserFeatured