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
              className={`relative whitespace-nowrap px-6 py-3 text-sm font-bold hover:bg-secondary-hover ${
                index === 0
                  ? 'text-red-500 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-red-500'
                  : 'text-secondary-text'
              }`}
            >
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
