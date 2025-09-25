import { MdOutlineMenu } from 'react-icons/md';
import Container from './Container';

const Navbar = () => {
  return (
    <div className="shadow-lg border-b-2 border-slate-900">
      <Container>
        <nav className="py-4 flex justify-between items-center">
          <h1 className="md:text-xl text-sm font-bold">PH University</h1>
          <div className="md:flex hidden items-center gap-6">
            <a href="#" className="">
              Home
            </a>
            <a href="#" className="">
              Faculty
            </a>
            <a href="#" className="">
              Students
            </a>

            <a href="#" className="">
              Contact
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              + New Assignment
            </button>
          </div>
          <div className="block md:hidden">
            <MdOutlineMenu />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
