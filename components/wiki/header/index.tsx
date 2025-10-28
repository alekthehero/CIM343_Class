import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Mobile navbar: visible on small screens only */}
      <nav className="uk-navbar-container uk-margin block md:hidden">
        <div className="uk-container">
          <div data-uk-navbar="mode: click">
            <div className="uk-navbar-left">
              <a className="uk-navbar-toggle" href="#">
                <span data-uk-navbar-toggle-icon></span>
                <span className="uk-margin-xsmall-left">Menu</span>
              </a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop (normal) header: hidden on small screens */}
      <nav className="uk-navbar-container hidden md:block">
        <div className="uk-container">
          <div>
            <div className="uk-navbar-center">
              <div className="uk-navbar-center-left">
                <ul className="uk-navbar-nav">
                  <li className="uk-active">
                    <Link href="/">Home</Link>
                  </li>
                </ul>
              </div>
              <Link className="uk-navbar-item uk-logo" href="/">
                CIM 343 Wikipedia Assignment
              </Link>
              <div className="uk-navbar-center-right">
                <ul className="uk-navbar-nav">
                  <li>
                    <Link href="/about">About Me</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <hr className="uk-divider-icon hidden md:block" />
    </>
  );
};

export default Header;
