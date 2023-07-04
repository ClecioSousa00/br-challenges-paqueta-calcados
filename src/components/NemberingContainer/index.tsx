export const NumberingContainer = () => {
  const numberingList = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

  return (
    <div className="flex justify-between">
      {numberingList.map((item, index) => (
        <div
          key={index}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded border border-secondary border-opacity-20"
        >
          <span className="text-xl font-medium text-secondary-2">{item}</span>
        </div>
      ))}
    </div>
  )
}
