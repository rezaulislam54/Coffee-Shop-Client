const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content p-10">
      <div className="footer container mx-auto">
        <aside>
          <img
            className="size-16"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728190966/logo1_gj6sgi.png"
            alt=""
          />
          <h1 className="text-xl font-extrabold">Online Coffee Shop</h1>
          <p className="w-96">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
