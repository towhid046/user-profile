
import UserInfo from './UserInfo/UserInfo';
import UserFeatured from './UserFeatured/UserFeatured';
const UserProfile = () => {
  return (
    <section className='container mx-auto px-4'>
            
        <div
        className="md:p-8 p-5 xl:grid grid-cols-5 bg-[#f6f6f6] gap-24"
        >
          <div className='col-span-3'>
              <UserInfo/>
          </div>
          <div className='col-span-2 hidden xl:flex'>
              <UserFeatured/>
          </div>
        </div>
    </section>
  )
}

export default UserProfile