import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Update(props) {
  const [topic, setTopic] = useState({ title: null, body: null });
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    async function getTopic() {
      const res = await fetch('/topics/' + id);
      const data = await res.json();
      setTopic(data);
    }
    getTopic();
  }, [id]);
  function submitHandler(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    props.onUpdate(title, body, id);
  }
  return (
    <article>
      <h1>Update</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={topic.title}
          onChange={(e) => {
            setTopic((current) => {
              return { ...current, title: e.target.value };
            });
          }} />
        <br />
        <textarea
          name="body"
          placeholder="body"
          value={topic.body}
          onChange={(e) => {
            setTopic((current) => {
              return { ...current, body: e.target.value };
            });
          }} />
        <br />
        <input type="submit" value="update" />
      </form>
    </article>
  );
}
