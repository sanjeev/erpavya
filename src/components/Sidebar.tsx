import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';
import IconUser from './Icons/User';
import IconSignOut from './Icons/SignOut';
import IconUIElement from './Icons/UIElement';
import IconVendor from './Icons/Vendor';
import IconStore from './Icons/Store';
import IconSettings from './Icons/Settings';
import SignoutButton from '../pages/Authentication/SignoutButton';
import IconAngleDown from './Icons/AngleDown';
import IconCart from './Icons/Cart';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-65 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-4 lg:py-4">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2 py-4 px-7 lg:mt-2 lg:px-7">
          {/* <!-- Menu Group --> */}

          <div>
            <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/' || pathname.includes('admin')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          (pathname === '/' || pathname.includes('admin')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconUser />
                        Admin List
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/admin"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Admin
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/role"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Role
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/permission-group"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Permission Group
                            </NavLink>
                          </li>
                          {/*
                          <li>
                            <NavLink
                              to="/permission"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Permission
                            </NavLink>
                          </li> */}
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          (pathname === '/vandor' ||
                            pathname.includes('vendor')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconVendor />
                        Vendor
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/vendor"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Vendor List
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          <div>
            <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup activeCondition={pathname.includes('order')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          pathname.includes('order') &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconCart />
                        Order
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/order"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Order
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}
            </ul>
          </div>

          {/*end vendor management */}
          {/* <!-- Others Group --> */}
          <div>
            <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          (pathname === '/brand' ||
                            pathname.includes('brand')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconUIElement />
                        Products
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/product"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Product
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Category
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/attributes"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Attributes
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/product_tag"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Tags
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/brand"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Brand
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
            {/* <!-- STORE Start  --> */}

            <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          (pathname === '/brand' ||
                            pathname.includes('brand')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconStore />
                        Store
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/sitesetting"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Site Setting
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}

              {/* <!-- Menu Item Chart --> */}
            </ul>

             <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4  ${
                          (pathname === '/faq' ||
                            pathname.includes('brand')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4 active:bg-[#f9f9f9]'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconUIElement />
                        FAQ
                        <IconAngleDown open={open} />
                      </NavLink>
                       

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        <li>
                            <NavLink
                              to="/faq"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-body duration-300 ease-in-out hover:text-body ' +
                                (isActive && '!text-body')
                              }
                            >
                              FAQ
                            </NavLink>
                          </li> 
                          <li>
                            <NavLink
                              to="/faqcategory"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-body duration-300 ease-in-out hover:text-body ' +
                                (isActive && '!text-body')
                              }
                            >
                              FAQ Categories
                            </NavLink>
                          </li> 
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
              </ul>
              
            <ul className="mb-0 flex flex-col gap-1.5">
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 ${
                          (pathname === '/brand' ||
                            pathname.includes('brand')) &&
                          'bg-[#f9f9f9] dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IconSettings />
                        Settings
                        <IconAngleDown open={open} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-2 mb-2 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/general"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              General
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/#"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Header
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/#"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-[14px] text-body duration-300 ease-in-out hover:text-[#666] ' +
                                (isActive && '!text-body')
                              }
                            >
                              Footer
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}

              {/* <!-- Menu Item Chart --> */}
              <li>
                <div
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-body duration-300 ease-in-out hover:bg-[#f9f9f9] dark:hover:bg-meta-4 }`}
                >
                  <IconSignOut />
                  <SignoutButton />
                </div>
              </li>
              {/* <!-- Menu Item Chart --> */}
            </ul>

            {/* <!-- STORE End  --> */}
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
