
export const Marquee = () => {

  return (
    <div className="py-3 w-full">
      <button className="w-full overflow-hidden whitespace-nowrap">
        {(new Array(15).fill(0)).map((_, index) => (
          <div className="marquee" key={index}>
            🌸 🌼  NEW ARRIVALS 🌸 🌼
          </div>
        ))}
      </button>
    </div>
  )
}