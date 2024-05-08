import { render, screen } from '@testing-library/react';
import Loader from '.';

test('Whether loader shows if isLoading is true', () => {
    render(<Loader isLoading={true} />)
    expect(screen.getByTestId('loader')).toBeInTheDocument();
});