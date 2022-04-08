import { Box } from '@mui/material';
import DashboardSkeleton from 'components/DashboardSkeleton';
import { NextPage } from 'next';
import React from 'react';

const DashboardPage: NextPage = () => {
  return (
    <>
      <DashboardSkeleton>
        <Box>DashboardPage</Box>
      </DashboardSkeleton>
    </>
  );
};

export default DashboardPage;
