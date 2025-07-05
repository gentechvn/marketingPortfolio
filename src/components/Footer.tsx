
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 md:mb-0">
            Marketing Pro
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; GenTech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
