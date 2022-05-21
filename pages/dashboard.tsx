import { Box } from '@mui/material';
import DashboardLayout from 'layouts/DashboardLayout';
import { NextPage } from 'next';
import React from 'react';

const DashboardPage: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <Box>DashboardPage</Box>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
