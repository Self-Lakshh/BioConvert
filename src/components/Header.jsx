const Header = () => {
    return (
      <header className="bg-gray-100 text-secondary shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
          {/* Logo + Brand */}
          <div className="flex items-center justify-center align-middle flex-wrap rounded-full py-2.5 px-5 bg-gray-800">
            <img
              src="https://cdn.discordapp.com/attachments/1203219990203858955/1351688943279804538/bioconvertlogo.jpg?ex=67db49ed&is=67d9f86d&hm=7062198470e9ab2f811ce4299af0151d336277201818d8c1dc9a29abbd1d0063&"
              alt="Logo"
              className="h-6 sm:h-6 w-auto"
            />
            <h1 className="text-2xl sm:text-2xl text-white ms-2 font-bold">BioConvert</h1>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  