import logo  from '../../../assets/images/logo.svg'
import searchIcon from '../../../assets/images/navbar/search.svg'
import penIcon from '../../../assets/images/navbar/pen.svg'
import mailIcon from '../../../assets/images/navbar/mail.svg'
import threeDotsIcon from '../../../assets/images/navbar/three-dots.svg'
import userProfileIcon from '../../../assets/images/navbar/user-profile.svg'

const icons = [searchIcon, penIcon, mailIcon, threeDotsIcon, userProfileIcon]

const Navbar = () => {
  return (
    <nav className=' bg-[#1B1C1E] py-5 '>
        <div className='container mx-auto px-4 flex justify-between items-center'>
            <div>
                <img className='cursor-pointer' src={logo} alt="Logo" />
            </div>
            <ul className='flex gap-4 items-center'>
                {icons?.map((icon, index)=> (
                    <li className={`${icon !== userProfileIcon && 'bg-[#2B2B2B] w-10 h-10 rounded-full p-1' } flex items-center justify-center cursor-pointer`}
                        key={index}>
                        <img src={icon} alt="Icon" />
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar