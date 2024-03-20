import { Bird, Book } from 'lucide-react';

import { aboutMenus, helpMenus, termsMenus } from '../constants';
import { FooterMenus } from './';

export const PageFooter = () => {
  return (
    <footer className="bg-neutral-100">
      <div className="py-10">
        <div className="space-y-8 px-5 lg:hidden">スマホサイズのメニュー</div>
        <div className="hidden gap-5 px-10 lg:flex">
          <FooterMenus heading="カリカリについて" menus={aboutMenus} />
          <FooterMenus heading="ヘルプ" menus={helpMenus} />
          <FooterMenus heading="プライバシーと利用規約" menus={termsMenus} />
        </div>
      </div>
      <div className="border-t border-secondary-border px-8 py-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <a href="/">
              <Bird className="size-[32px] stroke-2" />
            </a>
            <a href="/">
              <Book className="size-[32px] stroke-2" />
            </a>
          </div>
          <span className="text-xs text-secondary-text">
            &copy; Caricari, Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};
