const TableDataSkeleton = () => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full text-left">
        <thead className="border-b-2 border-borders">
          <tr>
            <th className="px-8 py-4">
              <div className="h-4 w-12 rounded bg-gray-200" />
            </th>
            <th className="px-8 py-4">
              <div className="h-4 w-20 rounded bg-gray-200" />
            </th>
            <th className="px-8 py-4">
              <div className="h-4 w-20 rounded bg-gray-200" />
            </th>
            <th className="px-8 py-4">
              <div className="h-4 w-20 rounded bg-gray-200" />
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-borders">
          {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index}>
              <td className="px-8 py-5">
                <div className="h-4 w-10 rounded bg-gray-200" />
              </td>

              <td className="px-8 py-5">
                <div className="h-4 w-full max-w-64 rounded bg-gray-200" />
              </td>

              <td className="px-8 py-5">
                <div className="h-4 w-28 rounded bg-gray-200" />
              </td>

              <td className="px-8 py-5">
                <div className="h-6 w-24 rounded-2xl bg-gray-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataSkeleton;
