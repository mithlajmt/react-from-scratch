function ListGroup() {
  const items = ['matta', 'sample2', 'sample3', 'sample4'];
  return (
    <>
      <ul className="list-group">
        {items.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;