import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const StyledCityName = styled.h2<{ fontSize?: number }>`
  color: ${AppColors.lightestGray};
  font-size: ${({ fontSize }) => fontSize || 40}px;
  font-weight: bold;
`;
