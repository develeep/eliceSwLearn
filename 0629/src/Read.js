import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Read() {
  const params = useParams();
  const id = Number(params.id);
  const [topic, setTopic] = useState({ title: null, body: null });
  useEffect(() => {
    async function getTopic() {
      const res = await fetch('/topics/' + id);
      const data = await res.json();
      setTopic(data);
    }
    getTopic();
  }, [id]);
  return (
    <article>
      <h2>{topic.title}</h2>
      {topic.body}
    </article>
  );
}
