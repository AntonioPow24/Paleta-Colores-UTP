import DataCard from "./DataCard";

export default function GridCards({ isLoading, colorList }) {
  return (
    <>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="grow p-3">
          <div className="flex flex-wrap ">
            {colorList.map((color) => (
              <DataCard key={color.id} color={color} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
