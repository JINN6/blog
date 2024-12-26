import React from 'react';
import Link from 'next/link';


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 w-full">

      <div className="font-extrabold text-3xl text-white lg:pl-20">
        Brand
      </div>


      <div className="flex gap-6 hidden md:flex font-extrabold text-lg lg:pr-20">
        <Link href="/">Home</Link>
        <Link href="/products">View</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

 
      <Sheet>
        <SheetTrigger className="md:hidden text-white">
          <AlignJustify className="text-3xl" />
        </SheetTrigger>

     
        <SheetContent className="flex justify-center items-center h-full backdrop-blur">
          <div className="flex gap-6 flex-col justify-center items-center">
            <Link href="/">Home</Link>
            <Link href="/products">View</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;