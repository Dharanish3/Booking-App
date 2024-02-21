import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
const LazyLoad = lazy(() => import("./Routes/AppRoutes"));


function App() {
  const router = createBrowserRouter(AppRoutes);

  return (
    <RouterProvider router={router}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad />
      </Suspense>
    </RouterProvider>
  );
}

export default App;
