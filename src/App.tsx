import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
import SignUp from './pages/Authentication/SignUp';
import LandingPage from './pages/Landing/LandingPage';
import BrandIdentity from './pages/Landing/BrandIdentity';
import MusicPage from './pages/Landing/MusicPage';
import GraphicsGallery from './pages/Landing/GraphicsGallery';

const hiddenOnRoutes = ['/', '/signup', '/verify-user', '/brand-identity', '/sounds', '/graphics-gallery'];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Determine if the current route should skip the layout
  const shouldUseDefaultLayout = !hiddenOnRoutes.includes(location.pathname);

  return loading ? (
    <Loader />
  ) : shouldUseDefaultLayout ? (
    <DefaultLayout hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>

        
      </Routes>
    </DefaultLayout>
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home | Sama.Dev" />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up | Sama.Dev" />
              <SignUp />
            </>
          }
        />

        <Route
          path="/brand-identity"
          element={
            <>
              <PageTitle title="Brand Identity | Sama.Dev" />
              <BrandIdentity />
            </>
          }
        />
        <Route
          path="/sounds"
          element={
            <>
              <PageTitle title="My Sounds | Sama.Dev" />
              <MusicPage />
            </>
          }
        />
        <Route
          path="/graphics-gallery"
          element={
            <>
              <PageTitle title="Graphics Gallery | Sama.Dev" />
              <GraphicsGallery />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
