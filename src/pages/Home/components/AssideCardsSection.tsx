import { Hammer } from 'lucide-react';
import Card from '../../../components/Card/Card';

export default function AssideCardsSection() {
  return (
    <aside className="grid grid-rows-3 gap-4">
      <Card title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
      <Card title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
      <Card title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
    </aside>
  );
}
