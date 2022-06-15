import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from './Article';

export function Read(props) {
  const [topic, setTopic] = useState({ title: null, body: null });
  const id = parseInt(useParams().id);
  
  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3333/topics/' + id);
      const data = await req.json();
      setTopic(data);
    })();
  }, [id]);

  return <Article title={topic.title} body={topic.body}></Article>;
}
