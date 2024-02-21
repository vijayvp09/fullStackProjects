import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
export default function Editor({value, onChange}) {
    return( 
        <div>
        <ReactQuill modules={modules} formats={formats} value={value} onChange={onChange} />
        </div>
    )
}