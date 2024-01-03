
import { Cards } from './Cards';
import { Navbar } from './Navbar';
export function Main() { 
  
  return (
    <main className="h-[900px] bg-purple-100 px-10 py-5 dark:bg-gray-800">
          <Cards></Cards>
          <Navbar></Navbar>
    </main>
  );
}
