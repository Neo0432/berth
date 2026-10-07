import { renderWithProviders, screen } from '@shared/test';

import { FieldControl } from './field-control';

describe('FieldControl', () => {
  it('показывает подсказку и счётчик', () => {
    renderWithProviders(
      <FieldControl label="Stack" htmlFor="stack" notifyBefore="Pick from the list." notifyAfter="3 / 15">
        <input id="stack" />
      </FieldControl>,
    );

    expect(screen.getByText('Pick from the list.')).toBeInTheDocument();
    expect(screen.getByText('3 / 15')).toBeInTheDocument();
  });

  it('заменяет подсказку ошибкой, а счётчик оставляет', () => {
    renderWithProviders(
      <FieldControl
        label="Stack"
        htmlFor="stack"
        notifyBefore="Pick from the list."
        notifyAfter="0 / 15"
        errorText="Add at least one technology."
      >
        <input id="stack" />
      </FieldControl>,
    );

    expect(screen.queryByText('Pick from the list.')).not.toBeInTheDocument();
    expect(screen.getByText('Add at least one technology.')).toHaveAttribute('id', 'stack-error');
    expect(screen.getByText('0 / 15')).toBeInTheDocument();
  });

  it('оставляет подсказку, если текст ошибки скрыт', () => {
    renderWithProviders(
      <FieldControl htmlFor="stack" notifyBefore="Pick from the list." errorText="Required." showErrorText={false}>
        <input id="stack" />
      </FieldControl>,
    );

    expect(screen.getByText('Pick from the list.')).toBeInTheDocument();
    expect(screen.queryByText('Required.')).not.toBeInTheDocument();
  });
});
