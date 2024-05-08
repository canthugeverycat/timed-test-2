import './App.scss';
import { useEffect } from 'react';
import { fetchPosts as fetchPostsApi } from './utils/http';

import Post from './components/Post';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchPostsFailure, fetchPostsSuccess } from './store/posts/actions';

const App = () => {
  const { data, isFetching, hasError } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(fetchPosts());
      const data = await fetchPostsApi();
      dispatch(fetchPostsSuccess(data.posts));
    } catch (e) {
      console.log(e);
      dispatch(fetchPostsFailure());
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <h1>Showing {data.length || ''} posts</h1>
      <div className="posts">
        {hasError && (<p className="error" onClick={getData}>Oops! There has been an error. 🤷‍♀️</p>)}
        <Loader isLoading={isFetching} />
        {data.map(post => (<Post key={post.id} {...post} />))}
      </div>
    </div>
  );
}

export default App;
