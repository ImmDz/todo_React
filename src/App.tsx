import { FC } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header, Login, MainPage, PageNotFound, Profile, SingleTask } from "./Pages";



export const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<MainPage />} />
        <Route path="task/:id" element={<SingleTask />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

