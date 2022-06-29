export function Create(props) {
  function submitHandler(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    props.onCreate(title, body);
  }
  return (
    <article>
      <h1>Create</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="title" name="title" />
        <br />
        <textarea name="body" placeholder="body" />
        <br />
        <input type="submit" value="create" />
      </form>
    </article>
  );
}
