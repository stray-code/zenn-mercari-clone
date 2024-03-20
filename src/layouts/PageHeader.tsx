export const PageHeader = () => {
  return (
    <div className="relative mx-4 mb-6 flex items-center justify-between gap-6 pt-2">
      <div className="absolute inset-0 flex justify-center md:static">ロゴ</div>
      <div className="hidden md:block">検索フォーム</div>
      <div className="ml-auto">ボタン</div>
    </div>
  );
};
