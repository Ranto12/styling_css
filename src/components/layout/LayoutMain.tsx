import { ReactNode } from "react";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen max-h-screen flex flex-col ">
      <div className="bg-[#f9dcb0] p-3 border-b-[1px] border-solid border-slate-600">Header</div>
      <div
        className="flex flex-1 scrollbar-hide "
        style={{
          maxHeight: "calc(100vh - 49px)",
        }}
      >
        <div className="w-40 p-3 flex-shrink-0 bg-[#f9dcb0] border border-solid border-slate-600">
          <nav>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Posts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Media
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Pages
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Comments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Appearance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Plugins
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Users
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Tools
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-5 bg-white flex-1 overflow-y-scroll scrollbar-hide">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMain;
