import { navigationMenus } from '../constants';

export const PageNavigation = () => {
  return (
    <nav className="sticky bottom-0 z-10 border-t border-secondary-border bg-white lg:hidden">
      <ul className="grid grid-cols-4">
        {navigationMenus.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.link}
              className="flex flex-col items-center justify-center gap-1 py-1.5 text-xs hover:bg-secondary-hover"
            >
              <menu.icon className="size-[24px] stroke-2" />
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
