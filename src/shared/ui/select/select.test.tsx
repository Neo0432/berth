import { useForm } from 'react-hook-form';

import { renderWithProviders, screen } from '@shared/test';

import { Select } from './select';
import { SelectField } from './select-field';

const ROLE_OPTIONS = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Design', value: 'design' },
];

describe('Select', () => {
  it('связывает подпись с полем', () => {
    renderWithProviders(<Select label="Main role" options={ROLE_OPTIONS} />);

    expect(screen.getByRole('combobox', { name: 'Main role' })).toBeInTheDocument();
  });

  it('открывает список и выбирает опцию', async () => {
    const onChange = jest.fn();
    const { user } = renderWithProviders(<Select label="Main role" options={ROLE_OPTIONS} onChange={onChange} />);

    await user.click(screen.getByRole('combobox', { name: 'Main role' }));
    await user.click(screen.getByRole('option', { name: 'Backend' }));

    expect(onChange).toHaveBeenCalledWith(ROLE_OPTIONS[1], expect.objectContaining({ action: 'select-option' }));
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('показывает ошибку и связывает её с полем', () => {
    renderWithProviders(
      <Select label="Main role" options={ROLE_OPTIONS} errorText="Choose your main role to continue." />,
    );

    const combobox = screen.getByRole('combobox', { name: 'Main role' });

    expect(combobox).toHaveAttribute('aria-invalid', 'true');
    expect(combobox).toHaveAccessibleErrorMessage('Choose your main role to continue.');
  });

  it('не ссылается на скрытый текст ошибки', () => {
    renderWithProviders(
      <Select label="Main role" options={ROLE_OPTIONS} errorText="Choose your main role." showErrorText={false} />,
    );

    const combobox = screen.getByRole('combobox', { name: 'Main role' });

    expect(combobox).toHaveAttribute('aria-invalid', 'true');
    expect(combobox).not.toHaveAttribute('aria-errormessage');
  });

  it('сообщает об обязательности поля', () => {
    renderWithProviders(<Select label="Main role" options={ROLE_OPTIONS} isRequired />);

    expect(screen.getByRole('combobox', { name: 'Main role' })).toHaveAttribute('aria-required', 'true');
  });

  it('блокирует поле при isDisabled', () => {
    renderWithProviders(<Select label="Main role" options={ROLE_OPTIONS} isDisabled />);

    expect(screen.getByRole('combobox', { name: 'Main role' })).toBeDisabled();
  });
});

describe('SelectField', () => {
  interface ProfileForm {
    role: string | null;
    skills: string[];
  }

  const ProfileFormStub = ({
    defaultValues,
    onSubmit,
  }: {
    defaultValues: ProfileForm;
    onSubmit: (values: ProfileForm) => void;
  }) => {
    const { control, handleSubmit } = useForm<ProfileForm>({ defaultValues });

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <SelectField
          control={control}
          name="role"
          rules={{ required: true }}
          label="Main role"
          options={ROLE_OPTIONS}
        />
        <SelectField control={control} name="skills" label="Skills" options={ROLE_OPTIONS} isMulti />
        <button type="submit">Save</button>
      </form>
    );
  };

  it('хранит в форме значения опций, а не сами опции', async () => {
    const onSubmit = jest.fn();
    const { user } = renderWithProviders(
      <ProfileFormStub defaultValues={{ role: 'frontend', skills: [] }} onSubmit={onSubmit} />,
    );

    expect(screen.getByText('Frontend')).toBeInTheDocument();

    await user.click(screen.getByRole('combobox', { name: 'Main role' }));
    await user.click(screen.getByRole('option', { name: 'Backend' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSubmit).toHaveBeenCalledWith({ role: 'backend', skills: [] }, expect.anything());
  });

  it('сохраняет порядок мульти-значений и значения, которых нет в опциях', async () => {
    const onSubmit = jest.fn();
    const { user } = renderWithProviders(
      <ProfileFormStub defaultValues={{ role: 'frontend', skills: ['design', 'retired'] }} onSubmit={onSubmit} />,
    );

    await user.click(screen.getByRole('combobox', { name: 'Skills' }));
    await user.click(screen.getByRole('option', { name: 'Frontend' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSubmit).toHaveBeenCalledWith(
      { role: 'frontend', skills: ['design', 'retired', 'frontend'] },
      expect.anything(),
    );
  });

  it('помечает поле невалидным и фокусирует его, даже если у ошибки нет текста', async () => {
    const onSubmit = jest.fn();
    const { user } = renderWithProviders(
      <ProfileFormStub defaultValues={{ role: null, skills: [] }} onSubmit={onSubmit} />,
    );

    await user.click(screen.getByRole('button', { name: 'Save' }));

    const combobox = screen.getByRole('combobox', { name: 'Main role' });

    expect(onSubmit).not.toHaveBeenCalled();
    expect(combobox).toHaveAttribute('aria-invalid', 'true');
    expect(combobox).toHaveFocus();
  });
});
