import { PropTypes } from 'prop-types';

import './index.scss';

const Post = ({ title, body }) => {
    return (
        <div className="post">
            <p className="title">{title}</p>
            <p className="body">{body}</p>
        </div>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Post;