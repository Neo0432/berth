import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders, screen } from '@shared/test';

import { Button } from './button';

describe('Button', () => {
  it('вызывает onClick по нажатию', async () => {
    const onClick = vi.fn();
    const { user } = renderWithProviders(<Button onClick={onClick}>Apply</Button>);

    await user.click(screen.getByRole('button', { name: 'Apply' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('блокирует повторное нажатие во время загрузки', async () => {
    const onClick = vi.fn();
    const { user } = renderWithProviders(
      <Button isLoading onClick={onClick}>
        Apply
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Apply' });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('рендерится ссылкой при as="a"', () => {
    renderWithProviders(
      <Button as="a" href="/projects">
        To projects
      </Button>,
    );

    expect(screen.getByRole('link', { name: 'To projects' })).toHaveAttribute('href', '/projects');
  });
});
