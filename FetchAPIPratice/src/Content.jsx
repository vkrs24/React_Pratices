import React from 'react';

function Content({ data }) {
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id}>
              {JSON.stringify(item)}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default Content;
