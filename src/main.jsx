import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from ".";
import {
  createContactAction,
  deleteContactAction,
  getContactAction,
} from "./actions/contactsAction";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./Error";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: getContactAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  {
    path: "/about",
    element: <div>Hello About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
