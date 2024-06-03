function ListGroup() {
  let items = ['matta', 'sample2', 'sample3', 'sample4'];
  items = []
  if(items.length === 0 ){
    return <p>no items found</p>
  }
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