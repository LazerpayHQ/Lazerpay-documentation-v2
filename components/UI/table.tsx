export interface ITable {
  body: string[]
  head: string[]
}

const LzTable = ({ head, body }) => {
  if (!head || !body) return null;

  return (
    <div className="w-full overflow-hidden drop-shadow-subtle">
      <div className="w-full overflow-x-auto border border-neu-200 rounded-8">
        <table className="w-full text-left bg-white shadow-sm">
          <thead className="w-full">
            <tr>
              {
                head.map((h: string) => (
                  <th
                    key={h}
                    dangerouslySetInnerHTML={{ __html: h }}
                    className="px-8 py-6 border-neu-200 heading-6-s-sm text-pri-500" />
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              body.map((row: string[], i: number) => (
                <tr key={i} className="odd:bg-neu-50 border-neu-200">
                  {row.map((c: string) => (
                    <td
                      key={c}
                      dangerouslySetInnerHTML={{ __html: c }}
                      className="px-8 py-8 text-neu-900 first:text-neu-900 paragraph-1" />
                  ))}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default LzTable;
