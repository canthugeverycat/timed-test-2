import { PropTypes } from 'prop-types';

import './index.scss';

const Post = ({ title, body }) => {
    const isBadData = typeof title !== 'string' || typeof body !== 'string';

    return (
        <div data-testid="post" className="post">
            {isBadData ? (
                <div className="post-error">⚠️ This post's data is malformed. We apologize for the inconvenience.</div>
            ) : (
                <>
                    <p data-testid="post-title" className="title">{title}</p>
                    <p className="body">{body}</p>
                </>
            )}
        </div>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Post;