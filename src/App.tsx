import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Experience from "./pages/Experience";
import NotFound from "./Components/NotFound";
import Tentang from "./pages/Tentang";
import ContactMe from "./pages/ContactMe";
import Project from "./pages/Project";
import Blog from "./Components/Blog";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Tentang />} />
          <Route path="experience" element={<Experience />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}