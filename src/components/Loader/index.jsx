import { PropTypes } from 'prop-types';

import './index.scss';

const Loader = ({isLoading}) => {
    if (!isLoading) {
        return null;
    }

    return <p className="loader">💠</p>;
};

Loader.propTypes = {
    isLoading: PropTypes.bool,
};

export default Loader;

