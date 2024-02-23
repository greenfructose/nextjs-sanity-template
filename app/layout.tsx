import {Ubuntu} from "next/font/google";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "300"
});

const Layout = ({children}) => {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="bg-slate-800 text-white min-h-screen">{children}</body>
    </html>
  );
};

export default Layout;
