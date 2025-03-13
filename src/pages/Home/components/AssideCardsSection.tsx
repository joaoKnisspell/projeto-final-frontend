import { Hammer } from 'lucide-react';
import Card from '../../../components/Card/Card';

export default function AssideCardsSection() {
  return (
    <aside className="grid grid-rows-3 gap-4">
      <Card key="asside-card-1" title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
      <Card key="asside-card-2" title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
      <Card key="asside-card-3" title="Em Construção">
        <div className="h-full flex items-center justify-center">
          <Hammer size={50} />
        </div>
      </Card>
    </aside>
  );
}
