// App.js

import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

function Test() {
    const file_name = 'jQuery.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../img/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    console.log(post)

    return (
        <div className='markdown-body'>
            <Markdown>{post}</Markdown>
        </div>
    );
}

export default Test;