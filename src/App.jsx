import React from 'react';

const App = () => {
  return (
    <>
          <div class="navbar bg-base-100 shadow-sm flex justify-around items-center">
          <a class="btn btn-ghost text-xl ml-8">CS — Ticket SYSTEM</a>
  {/* বাম পাশের অংশ: লোগো এবং মোবাইলের জন্য টোগল মেনু */}
  <div>
    <div class="dropdown">
      <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Link</a></li>
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li><a class="btn btn-primary">+ New Ticket</a></li>
      </ul>
    </div>
    
  </div>

  {/* ডান পাশের অংশ: ডেস্কটপের জন্য সম্পূর্ণ মেনু */}
  <div class="hidden lg:flex">
    <ul class="menu menu-horizontal px-10">
      <li><a>Link</a></li>
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
    <a class="btn btn-primary">+ New Ticket</a>
  </div>
</div>
    </>
  );
};

export default App;