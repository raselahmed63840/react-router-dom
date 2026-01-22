import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg font-semibold text-gray-700">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
