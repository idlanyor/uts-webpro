import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// Import komponen-komponen dengan React.lazy
const LazyExperience = React.lazy(() => import("./pages/Experience"));
const LazyNotFound = React.lazy(() => import("./Components/NotFound"));
const LazyTentang = React.lazy(() => import("./pages/Tentang"));
const LazyContactMe = React.lazy(() => import("./pages/ContactMe"));
const LazyProject = React.lazy(() => import("./pages/Project"));
const LazyBlog = React.lazy(() => import("./Components/Blog"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyTentang />
          </Suspense>} />
          <Route path="experience" element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyExperience />
          </Suspense>} />
          <Route path="blog" element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyBlog />
          </Suspense>} />
          <Route path="project" element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyProject />
          </Suspense>} />
          <Route path="contact" element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyContactMe />
          </Suspense>} />
          <Route path="*" element={<Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
            <LazyNotFound />
          </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
