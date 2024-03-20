import { Search } from 'lucide-react';

import logo from '../assets/logo.png';

export const PageHeader = () => {
  return (
    <div className="relative mx-4 mb-6 flex items-center justify-between gap-6 pt-2">
      <div className="absolute inset-0 flex justify-center md:static">
        <a href="/">
          <img src={logo} className="h-[50px]" />
        </a>
      </div>
      <form className="hidden grow md:block">
        <div className="flex max-w-[560px] overflow-hidden rounded border border-secondary-border has-[:focus]:border-gray-800">
          <input
            type="text"
            placeholder="なにをお探しですか？"
            className="w-full bg-neutral-100 pl-4 pr-1 outline-none focus:border-blue-500"
          />
          <button
            type="button"
            className="bg-gray-100 p-[8px] hover:bg-gray-200"
          >
            <Search className="size-[18px] stroke-2" />
          </button>
        </div>
      </form>
      <div className="ml-auto">ボタン</div>
    </div>
  );
};
