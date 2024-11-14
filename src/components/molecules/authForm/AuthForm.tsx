import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { StyledTextField } from '../../atoms/TextField';

import { ButtonsContainer, FormContainer } from './AuthForm.styles';
import { AuthFormData, AuthFormProps } from './AuthForm.types';

export const AuthForm = ({ isLogin, onSubmit, onToggleMode }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AuthFormData>({
    defaultValues: {
      email: 'test@test.pl',
      password: 'testowe',
    },
  });

  const password = watch('password');

  const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || 'Podaj prawidłowy e-mail';
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" color="white" align="center">
        {isLogin ? 'Logowanie' : 'Rejestracja'}
      </Typography>

      <StyledTextField
        label="Email"
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email', {
          required: 'To pole jest wymagane',
          validate: validateEmail,
        })}
      />

      <StyledTextField
        label="Hasło"
        type="password"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password', {
          required: 'To pole jest wymagane',
          minLength: {
            value: 6,
            message: 'Hasło musi mieć przynajmniej 6 znaków',
          },
        })}
      />

      {!isLogin && (
        <>
          <StyledTextField
            label="Potwierdź hasło"
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'To pole jest wymagane',
              validate: (value) => value === password || 'Hasła różnią się',
            })}
          />

          <StyledTextField
            label="Imię"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name', {
              required: 'To pole jest wymagane',
              minLength: {
                value: 2,
                message: 'Imię musi zawierać przynajmniej 2 znaki',
              },
            })}
          />

          <StyledTextField
            label="Ulubione miasto"
            error={!!errors.favoriteCity}
            helperText={errors.favoriteCity?.message}
            {...register('favoriteCity', {
              required: 'To pole jest wymagane',
              minLength: {
                value: 2,
                message: 'Podane miasto musi zawierać przynajmniej 2 znaki',
              },
            })}
          />
        </>
      )}

      <ButtonsContainer>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.colors.teal,
            color: (theme) => theme.colors.lightestGray,
            '&:hover': {
              backgroundColor: (theme) => theme.colors.teal,
              opacity: 0.9,
            },
          }}
        >
          {isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
        </Button>

        <Button onClick={onToggleMode} sx={{ color: (theme) => theme.colors.teal }}>
          {isLogin ? 'Potrzebujesz konta? Zarejestruj się' : 'Masz konto? Zaloguj się'}
        </Button>
      </ButtonsContainer>
    </FormContainer>
  );
};
