import PropTypes from'prop-types'
import { FaDollarSign } from 'react-icons/fa';
import {BsBook} from 'react-icons/Bs'
const Blog = ({blog}) => {
   const {title, img, p, price, credit} = blog;
    return (
          <div className="card w-full mt-8 bg-base-100 shadow-xl">
  <figure className="p-5">
    <img className='w-full' src={img} alt=""/>
  </figure>
  <div className="card-body">
    <div className='p-4'>
    <h2 className="card-title text-2xl font-blod">{title}</h2>
    <p  className='text-gray-400'>{p}</p>
    </div>
    <div className='flex justify-between p-4'>
      <p className='text-gray-400'><button className='text-black text-2xl'><FaDollarSign></FaDollarSign></button>{price}</p>
    <div>
    <p className='text-gray-400'><button className='text-black text-2xl'><BsBook></BsBook></button> {credit} </p>
    </div>
    </div>
    <div className="text-center">
      <button className="bg-blue-500 py-2 px-28 rounded-lg text-white">Select</button>
    </div>
  </div>
</div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
   
}
export default Blog;

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/Course-Registration.git
git push -u origin main