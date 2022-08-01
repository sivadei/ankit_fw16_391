function ListItem({title,status,handleDelete}) {

  const style = { display: "flex", gap: 8, justifyContent: "center" };
  return (
    <div data-testid="list-container" style={style}>
      <p data-testid="list-item">
        <b data-testid="list-item-title">{title}-</b>
        <span data-testid="list-item-status">{status ? "Done":"Not done"}</span>
      </p>
      <button data-testid="delete-btn" onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default ListItem;
