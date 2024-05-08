import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fetchPosts as fetchPostsApi } from './utils/http';
import App from './App';

const mockStore = configureStore([]);

const post = () => ({
    id: Math.random(9999999),
    title: 'This is a title',
    body: 'This is a subtitle',
});

describe('Title', () => {
    it(`wont display count in title when there is no data`, () => {
        const store = mockStore({
            posts: {
                data: [],
                isFetching: false,
                hasError: false,
            },
        });
        render(<Provider store={store}><App /></Provider>);
        const titleElement = screen.getByRole('heading', { level: 1 });
        expect(titleElement).toHaveTextContent('Showing posts');
    });

    it('shows correct post count in title', async () => {
        const store = mockStore({
            posts: {
                data: [post(), post()],
                isFetching: false,
                hasError: false,
            },
        });
        render(<Provider store={store}><App/></Provider>);
        const titleElement = screen.getByRole('heading', { level: 1 });
    
        expect(titleElement).toHaveTextContent('Showing 2 posts');
    });
});

describe('Posts', () => {
    it('renders the correct number of posts', () => {
        const store = mockStore({
            posts: {
                data: [post(), post(), post()],
                isFetching: false,
                hasError: false,
            },
        });

        render(<Provider store={store}><App/></Provider>);
        const elems = screen.getAllByTestId('post');

        expect(elems).toHaveLength(3);
    });

    it('attempts to fetch posts again after clicking the error', async () => {
        const store = mockStore({
            posts: {
                data: [post(), post(), post()],
                isFetching: false,
                hasError: true,
            },
        });

        render(<Provider store={store}><App/></Provider>);

        const errorElement = screen.getByTestId('posts-error');
        fireEvent.click(errorElement);

        await waitFor(() => expect(screen.getAllByTestId('post')).toHaveLength(3));
    });
});