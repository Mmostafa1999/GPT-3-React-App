import React from 'react'
import "./blog.css"
import Article from './../../components/article/Article';
import {
  blog01,
  blog02, 
  blog03,
  blog04,
  blog05
} from "../../components/article/import"
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>

        <div className='gpt3__blog-container-groupA'>
        <Article image={blog01} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

        <div className='gpt3__blog-container-groupB'>
        <Article image={blog02} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog03} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog04} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog05} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
