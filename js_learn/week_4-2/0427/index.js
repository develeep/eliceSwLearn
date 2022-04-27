response = await fetch('http://localhost:3000/topics')
topics = await response.json();
res = await fetch('http://localhost::3000/topics/'+topics[0].id)
topic = await res.json();
console.log(topics,topic)