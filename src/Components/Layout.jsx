const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-black text-white">
      {/* Floating white outlined circles */}
      <div className="absolute inset-0 z-0">
        <div className="floating-circle" style={{ width: '200px', height: '200px', top: '20%', left: '10%' }} />
        <div className="floating-circle" style={{ width: '150px', height: '150px', top: '8%', left: '75%' }} />
        <div className="floating-circle" style={{ width: '250px', height: '250px', top: '30%', left: '80%' }} />
        <div className="floating-circle" style={{ width: '300px', height: '300px', top: '33%', left: '30%' }} />
        <div className="floating-circle" style={{ width: '200px', height: '200px', top: '50%', left: '20%' }} />
        <div className="floating-circle" style={{ width: '300px', height: '300px', top: '55%', left: '75%' }} />
        <div className="floating-circle" style={{ width: '200px', height: '200px', top: '75%', left: '38%' }} />
        <div className="floating-circle" style={{ width: '300px', height: '300px', top: '90%', left: '10%' }} />


      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
