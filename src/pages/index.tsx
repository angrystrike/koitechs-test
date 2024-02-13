import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { ResumePage } from '@pages/resume';
import { routes } from '@pages/routes';
import React from 'react';

export const Pages = () => {
  return (
    <Routes>
      <Route path={routes.home()} element={<HomePage />} />
      <Route path={routes.resume(':username')} element={<ResumePage />} />
    </Routes>
  );
};
