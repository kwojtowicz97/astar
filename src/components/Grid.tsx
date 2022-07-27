import { Cell } from "./Cell";

const columns = 45;
const rows = 19;

export const Grid = () => {
  return (
    <div className="grid" data-columns={columns} data-rows={rows}>
      {Array(columns * rows)
        .fill(true)
        .map((_a, index) => (
          <Cell key={`cell-${index}`} />
        ))}
    </div>
  );
};