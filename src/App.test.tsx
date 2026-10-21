import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';

// The particles background draws on canvas, which jsdom does not implement.
jest.mock('./components/particle/Particle', () => ({
  Particle: () => null,
}));

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

const allWorks = [
  'GuessPredict',
  'SkyLineStroi',
  'Arctech',
  'BelImport',
  'GoGift',
  'Nc Invest',
  'Cleanmywin',
  'UKS Rechica',
];

beforeEach(() => {
  localStorage.clear();
});

test('renders the hero and every section', () => {
  renderApp();

  expect(screen.getByText('Vladimir Vidus')).toBeInTheDocument();

  ['My Skills', 'My Works', 'Testimony', 'Contact', 'I Am Available For Freelance'].forEach(
    (title) => {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
    }
  );
});

test('renders the navigation menu', () => {
  renderApp();

  ['Home', 'Skills', 'Works', 'Testimony', 'Contact'].forEach((item) => {
    expect(screen.getAllByText(item, { selector: 'a' }).length).toBeGreaterThan(0);
  });
});

test('renders the new skills', () => {
  renderApp();

  ['AI-assisted development', 'Backend with Go', 'State & Data'].forEach((skill) => {
    expect(screen.getByRole('heading', { name: skill })).toBeInTheDocument();
  });
});

test('filters works by tab', async () => {
  renderApp();

  allWorks.forEach((title) => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });

  userEvent.click(screen.getByRole('button', { name: 'CMS' }));

  await waitFor(() => {
    expect(screen.queryByRole('heading', { name: 'GoGift' })).not.toBeInTheDocument();
  });
  expect(screen.getByRole('heading', { name: 'UKS Rechica' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'GuessPredict' })).not.toBeInTheDocument();
});

test('never links to source code and shows the NDA modal instead', () => {
  renderApp();

  const links = screen.getAllByRole('link') as HTMLAnchorElement[];
  links.forEach((link) => {
    expect(link.getAttribute('href') ?? '').not.toMatch(/github\.com\/Voris03\/(?!$)/);
  });

  userEvent.click(screen.getAllByRole('button', { name: 'code' })[0]);

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByText('Source code is under NDA')).toBeInTheDocument();
  expect(within(dialog).getByText('GuessPredict · NDA')).toBeInTheDocument();

  userEvent.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('opens the demo modal for a project without a public demo', () => {
  renderApp();

  const demoButtons = screen.getAllByRole('button', { name: 'demo' });
  expect(demoButtons).toHaveLength(1);

  userEvent.click(demoButtons[0]);
  expect(within(screen.getByRole('dialog')).getByText('Demo is not available')).toBeInTheDocument();
});

test('cycles through every testimonial and back to the first', async () => {
  renderApp();

  const authors = ['Sergey Gardeychik', 'Denis Muraveiko', 'Andrei Knyazhishche', 'Maxim Kalinin'];
  expect(screen.getAllByRole('button', { name: /Go to testimonial/ })).toHaveLength(authors.length);

  for (let i = 0; i < authors.length; i++) {
    expect(await screen.findByText(authors[i])).toBeInTheDocument();
    expect(screen.getByText(String(i + 1).padStart(2, '0'))).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Next testimonial' }));
  }

  expect(await screen.findByText(authors[0])).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }));
  expect(await screen.findByText(authors[authors.length - 1])).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }));
  expect(await screen.findByText(authors[2])).toBeInTheDocument();
});

test('switches the language to Russian and remembers it', () => {
  renderApp();

  userEvent.click(screen.getByRole('button', { name: 'Switch language to Russian' }));

  expect(screen.getByRole('heading', { level: 2, name: 'Мои навыки' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: 'Мои работы' })).toBeInTheDocument();
  expect(screen.getByText('Владимир Видус')).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('ru');
  expect(localStorage.getItem('lang')).toBe('ru');
});
