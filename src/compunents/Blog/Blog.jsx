import propTypes from 'prop-types';
import { FaBookReader } from 'react-icons/fa';

const Blog = ({ blog, handleAddtoBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddtoBookmark(blog)}
                        className='ml-4 text-blue-300'><FaBookReader></FaBookReader></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p><button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {

    blog: propTypes.object.isRequired,
    handleAddtoBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func,

}

export default Blog;