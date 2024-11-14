import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;
