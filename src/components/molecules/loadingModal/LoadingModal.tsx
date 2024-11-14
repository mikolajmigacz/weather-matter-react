import { CircularProgress } from '@mui/material';

import { StyledModal } from './LoadingModal.styles';

export const LoadingModal = ({ open }: { open: boolean }) => (
  <StyledModal open={open} disableAutoFocus>
    <CircularProgress />
  </StyledModal>
);
