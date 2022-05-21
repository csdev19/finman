import React, { FunctionComponent } from 'react';
import { Modal, Box } from '@mui/material';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  children: React.ReactNode;
};

const BaseModal: FunctionComponent<Props> = ({ open, onClose, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default BaseModal;
