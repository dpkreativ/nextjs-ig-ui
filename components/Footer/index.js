const Footer = () => {
  return (
    <footer className="max-w-screen-lg mx-auto pt-5 px-5 md:pt-12 pb-12 flex flex-col items-center text-xs">
      <div className="flex flex-wrap space-x-3 justify-center">
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help</p>
        <p>API</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Top Accounts</p>
        <p>Hashtags</p>
        <p>Locations</p>
        <p>Instagram Lite</p>
      </div>
      <div className="flex space-x-3 py-5">
        <select name="languages" id="languages" className="outline-none">
          <option value="English">English</option>
          <option value="France">France</option>
          <option value="Italian">Italian</option>
        </select>
        <div>&#169; 2021 Instagram from Facebook</div>
      </div>
    </footer>
  );
};

export default Footer;
