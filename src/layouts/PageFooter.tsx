export const PageFooter = () => {
  return (
    <footer className="bg-neutral-100">
      <div className="py-10">
        <div className="space-y-8 px-5 lg:hidden">スマホサイズのメニュー</div>
        <div className="hidden gap-5 px-10 lg:flex">PCサイズのメニュー</div>
      </div>
      <div className="border-t border-secondary-border px-8 py-6">
        SNSのリンクアイコンとコピーライト
      </div>
    </footer>
  );
};
