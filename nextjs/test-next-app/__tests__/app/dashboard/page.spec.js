import Dashboard from '@/app/dashboard/page';
import { render, screen, fireEvent } from '@testing-library/react'


describe('Dashboard', () => {
    test('should render Dashboard', () => {
        render(<Dashboard />)
        const title = screen.getByText(/Estoy en el Dashboard/i);
        expect(title).toBeInTheDocument();
    })
    test('should add one to count', () => {
        render(<Dashboard />)
        const button = screen.getByText(/Sumar \+ 1/i);
        fireEvent.click(button);
        fireEvent.click(button);

        const count = screen.getByText(/Count: 2/i);
        expect(count).toBeInTheDocument();

    })
    test('should subtract one to count', () => {
        render(<Dashboard />)
        const buttonSuma = screen.getByText(/Sumar \+ 1/i);
        fireEvent.click(buttonSuma);
        fireEvent.click(buttonSuma);
        fireEvent.click(buttonSuma);
        const button = screen.getByText(/Restar - 1/i);
        fireEvent.click(button);
        const count = screen.getByText(/Count: 2/i);
        expect(count).toBeInTheDocument();
    });

})
