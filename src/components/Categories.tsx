import { categoryMenus } from '../constants';

export const Categories = () => {
  return (
    <div className="border-b border-secondary-border">
      <div className="container mx-auto max-w-screen-xl">
        <div
          className="flex overflow-x-auto px-5 lg:px-10"
          style={{ scrollbarWidth: 'none' }}
        >
          {categoryMenus.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className="relative whitespace-nowrap px-6 py-3 text-sm font-bold text-secondary-text hover:bg-secondary-hover"
            >
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
