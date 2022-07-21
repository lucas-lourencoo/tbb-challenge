type Categories = {
  name: string;
  id: string;
};

interface FilterInterface {
  categories: Categories[];
}

export function Filter({ categories }: FilterInterface) {
  return (
    <aside>
      <h1>Filters</h1>
    </aside>
  );
}
