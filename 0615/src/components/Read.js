import { useParams } from 'react-router-dom';
import { Article } from './Article';

export function Read(props) {
  const topics = props.topics;
  const id = parseInt(useParams().id)

  
  const topic = topics.filter((e) => e.id === id)[0];
  return <Article title={topic.title} body={topic.body}></Article>;
}
