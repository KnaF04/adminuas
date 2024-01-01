import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NewItemForm from './components/Products/NewItemForm';
import Tables from './views/examples/Tables';



import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
      <Route path="add" element={<Navigate to="/components/Products/addProduct"/>}/>
      {/* <Route path="/new-item" component={NewItemForm} /> */}
      <Route path="/new-item" element={<NewItemForm />} />
      <Route path="/" element={<Tables />} />
    </Routes>
  </BrowserRouter>
);
