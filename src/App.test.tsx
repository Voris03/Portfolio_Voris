import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// The particles background draws on canvas, which jsdom does not implement.
jest.mock('./components/particle/Particle', () => ({
  Particle: () => null,
}));

test('renders the hero and every section', () => {
  render(<App />);

  expect(screen.getByText('Vladimir Vidus')).toBeInTheDocument();

  ['My Skills', 'My Works', 'Testimony', 'Contact', 'I Am Available For Freelance'].forEach(
    (title) => {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
    }
  );
});

test('renders the navigation menu', () => {
  render(<App />);

  ['Home', 'Skills', 'Works', 'Testimony', 'Contact'].forEach((item) => {
    expect(screen.getAllByText(item, { selector: 'a' }).length).toBeGreaterThan(0);
  });
});

test('filters works by tab', async () => {
  render(<App />);

  ['Nc Invest', 'Cleanmywin', 'GoGift', 'BelImport'].forEach((title) => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });

  userEvent.click(screen.getByRole('button', { name: 'Landing Page' }));

  await waitFor(() => {
    expect(screen.queryByRole('heading', { name: 'GoGift' })).not.toBeInTheDocument();
  });
  expect(screen.getByRole('heading', { name: 'Nc Invest' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'BelImport' })).not.toBeInTheDocument();
});

test('renders the contact form fields', () => {
  render(<App />);

  ['name', 'email', 'subject', 'message'].forEach((placeholder) => {
    expect(screen.getByPlaceholderText(placeholder)).toBeRequired();
  });
  expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument();
});
