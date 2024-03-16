import propTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes={
    blog: propTypes.object.isRequired
}

export default Blog;