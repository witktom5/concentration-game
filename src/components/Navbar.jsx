import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar bg-base-200 bg-opacity-80'>
      <div className='md:w-4/5 md:mx-auto md:justify-center'>
        <ul className='menu menu-horizontal p-0 gap-2 hidden md:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'btn btn-outline' : 'btn btn-ghost'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/play'
              className={({ isActive }) =>
                isActive ? 'btn btn-outline' : 'btn btn-ghost'
              }
            >
              Play
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/instructions'
              className={({ isActive }) =>
                isActive ? 'btn btn-outline' : 'btn btn-ghost'
              }
            >
              Instructions
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'btn btn-outline' : 'btn btn-ghost'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div class='dropdown md:hidden ml-2'>
          <label tabindex='0' class='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-9 w-9'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabindex='0'
            class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'btn btn-outline' : 'btn btn-ghost'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/play'
                className={({ isActive }) =>
                  isActive ? 'btn btn-outline' : 'btn btn-ghost'
                }
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/instructions'
                className={({ isActive }) =>
                  isActive ? 'btn btn-outline' : 'btn btn-ghost'
                }
              >
                Instructions
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'btn btn-outline' : 'btn btn-ghost'
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
