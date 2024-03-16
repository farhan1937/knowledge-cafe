import propTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-xl ml-4 mt-4 pt-4">
            <div>
                <h3>Reading Time : {readingTime}</h3>
            </div>
            <h3 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: propTypes.array,
    readingTime: propTypes.number,
}

export default Bookmarks;