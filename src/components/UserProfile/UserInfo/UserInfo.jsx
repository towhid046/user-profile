import userProfilePic from '../../../assets/images/user_profile/profile-pic.png'


const articles =  [
{
  id: 1, 
  title: 'How Astrophotography changed my life',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.`,

  tags: [
    'photography',
    'astronomy',
    'astrophotography',
  ]
},
{
  id: 2, 
  title: 'Which Telescope and DSLR I use',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.`,

  tags: [
    'photography',
    'astronomy',
    'astrophotography',
  ]
},
]

const UserInfo = () => {
  return (
    <div>
      <div className='flex justify-between -mb-16'>
        <div className='flex gap-[26px]'>
        <figure className='relative -top-32'>
          <img className='md:w-[200px] w-[100px]' src={userProfilePic} alt="User Profile Pic" />
        </figure>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <h2 className='text-[#2B2B2B] text-2xl font-semibold' >John Doe <sub>•</sub></h2>
              <small className='text-[#76A4CE] text-xs font-[300]'>@johndoe</small>
            </div>
           <div className='text-[14px] font-normal text-[#1B1C1E]'>
             <h3>Astrophotographer 🌌</h3>
             <h3>Gamer 👾</h3>
           </div>
          </div>
        </div>
        <button className='px-[18px] py-[6px] h-max bg-[#196AA0] text-[#FEFEFE] rounded-full'>Follow</button>
      </div>

      <div>
        {articles?.map(article=>(
          <article key={article.id}
          className='bg-[#f1f1f1] p-4 rounded-[10px] mb-4'
          >
            <h2 className='text-[26px] font-semibold text-[#2B2B2B] mb-3'>{article.title}</h2>
            <p className='font-[300] text-[#5F5F5F] mb-4'>{article.description.split(' ').slice(0, 90).join(' ')}...</p>
            <hr />
            <div className='flex justify-between items-center mt-4'>
              <ul className='flex flex-wrap items-center gap-3'>
                {article?.tags?.map(tag=>(
                  <li key={tag}
                  className='text-[#76A4CE] bg-white rounded-full px-3 py-1'
                  >#{tag}</li>
                ))}
                <li className='text-[#76A4CE] cursor-pointer bg-white rounded-full px-3 py-1'>+</li>
              </ul>
              <button className='text-[#196AA0]'>Read More</button>
            </div>
          </article>
        ))

        }
      </div>

    </div>
  )
}

export default UserInfo