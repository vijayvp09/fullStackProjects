import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const modules = {
    toolbar: [
    ['bold', 'italic', 'underline', 'strike'],

    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ indent: '-1'}, { indent: '+1' }],

    [{ header: [1, 2, false] }],
    ['link', 'image', 'video'],
    ['clean'],
  ]};

const formats = [
    "header","font","size","bold","italic",
    "underline","strike","blockquote","list","bullet","indent",
    "link","image"
];

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    function createNewPost(e) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
        fetch("http://localhost:4000/post", {
            method: 'POST',
            body: data,
        })
    }
    return(
        <form onSubmit={createNewPost}>
            <input type="title" placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder={'Summary'} value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" onChange={(e => setFiles(e.target.files))} />
            <ReactQuill modules={modules} formats={formats} value={content} onChange={newValue => setContent(newValue)} />
            <button style={{marginTop:'5px'}}>Create Post</button>
        </form>
    )
}