export default function Post({title, summary, content, cover, author}) {
    return (
    <div className="post">
        <div className="image">
            <img src="https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/Mantic-Minotaur.jpg" alt="image" />
        </div>
        <div className="texts">
            <h2>{title} </h2>
            <p className="info">
            <a href="" className="author">author1</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
            </p>
            <p className="summary">{summary}</p>
        </div>
  </div>
)}