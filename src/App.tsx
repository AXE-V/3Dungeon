import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import globalStyles from './style';

import MainLayout from './layout/main';
import ContentLayout from './layout/content';

import Catalog from './components/Catalog';
import Auth from './components/Auth';
import { User } from './components/User';
import { Upload } from './components/Upload';
import { EditPostModel } from './components/PostModel/Edit';
import { AuthProvider } from './providers/authProvider';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  globalStyles();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/auth/register" element={<Auth />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/user/:id">
              <Route
                path="/user/:id"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:id/likes"
                element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:id/likes/:id"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route path="/user/:id/3d-models" element={<Catalog />} />
              <Route
                path="/user/:id/3d-models/:id"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:id/create-post"
                element={
                  <ProtectedRoute>
                    <EditPostModel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/:id/edit-post/:id"
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
