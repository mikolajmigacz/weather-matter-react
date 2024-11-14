import { TextField as MuiTextField } from '@mui/material';
import styled from 'styled-components';

export const StyledTextField = styled(MuiTextField)`
  width: 250px;

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.colors.lightestGray};
  }

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.lightestGray};
  }

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.colors.darkestGray};
    border-radius: 8px;

    & fieldset {
      border: none;
    }
  }

  & .MuiFormHelperText-root {
    color: #f44336;
    font-size: 14px;
  }
`;
