import styled from 'styled-components';

import { StyleProps } from './Temperature.types';

export const TemperatureWrapper = styled.span<StyleProps>`
  font-size: ${({ fontSize }) => fontSize || 32}px;
  color: ${({ color }) => color || 'white'};
  font-weight: bold;
  white-space: nowrap;
  display: inline-block;
`;
