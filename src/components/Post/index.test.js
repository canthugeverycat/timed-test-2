import { screen, render } from '@testing-library/react';
import Post from '.';

test('Shows an error when receiving unexpected argument types', () => {
    render(<Post title={{ title: 'Test title'}} description="This is a description" />);
    const errorElem = screen.getByText(`⚠️ This post's data is malformed. We apologize for the inconvenience.`);
    expect(errorElem).toBeInTheDocument();
});