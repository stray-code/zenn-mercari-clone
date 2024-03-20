import { PageNavigation } from './layouts';
import { Categories } from './components';

export default function App() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <Categories />
      </div>
      <div className="min-h-screen"></div>
      <PageNavigation />
    </div>
  );
}
