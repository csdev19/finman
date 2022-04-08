import { Box } from '@mui/material';
import DashboardSkeleton from 'components/DashboardSkeleton';
import { NextPage } from 'next';
import React from 'react';

const ExpensePage: NextPage = () => {
  return (
    <>
      <DashboardSkeleton>
        <Box>ExpensePage</Box>
      </DashboardSkeleton>
    </>
  );
};

export default ExpensePage;
