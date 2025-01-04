import Bottombar from "../components/navs/BottomBar";
import Navbar from "../components/navs/NavBar";
import Sidebar from "../components/navs/SideBar";

// app/dashboard/layout.tsx
export const metadata = {
    title: 'Dashboard',
  };
  
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
    
  <div className="">
          {/* Navbar */}
        <Navbar />
        
        <div className=" lg:flex min-h-screen">
          <div className="lg:basis-1/6 bg-transparent h-full">
          <Sidebar />
          </div>
          
          {/* Main Content */}
          <main className="flex-grow px-6 bg-sec w-full lg:basis-5/6 ">{children}</main>
        </div>
        <Bottombar/>
  </div>
    );
  }
  