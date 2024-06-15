import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import globalStyles from './style';

import MainLayout from './layout/main';
import ContentLayout from './layout/content';

import Catalog from './components/Catalog';
import Auth from './components/Auth';
import { User } from './components/User';
import { Upload } from './components/Upload';
import { EditPostModel } from './components/PostModel/Edit';
import { ProtectedRoute } from './components/ProtectedRoute';
import { NotFound } from './components/NotFound';

function App() {
  globalStyles();

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/auth/register" element={<Auth />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/user/:login">
              <Route
                path="/user/:login"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:login/likes"
                element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:login/collections"
                element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:login/likes/:id"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route path="/user/:login/3d-models" element={<Catalog />} />
              <Route
                path="/user/:login/3d-models/:id"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:login/create-post"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:login/edit-post/:id"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
          <Route path="/" element={<ContentLayout />}>
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
