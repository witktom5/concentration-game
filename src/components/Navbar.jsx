import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar text-neutral-content bg-neutral bg-opacity-80'>
      <div className='md:w-4/5 md:mx-auto md:justify-center'>
        <ul className='menu menu-horizontal p-0 gap-2 hidden md:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/play'
              className={({ isActive }) =>
                isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
              }
            >
              Play
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/instructions'
              className={({ isActive }) =>
                isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
              }
            >
              Instructions
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className='dropdown md:hidden ml-2'>
          <label tabIndex='0' className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52'
          >
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/play'
                className={({ isActive }) =>
                  isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
                }
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/instructions'
                className={({ isActive }) =>
                  isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
                }
              >
                Instructions
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'btn bg-nav-btn' : 'btn btn-ghost'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
