import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center'>Question and Answer</h3>
            <div className='w-75 mx-auto'>
                    <div>
                        <h3> Question: What is Different JavaScript and Nodejs?</h3>
                        <p>JavaScript is programming languages and writing scripts on the website. Nodejs is a JavaScript runtime environment.JavaScript used on the client side,frontend development and nodeJs used on the server side development.javascript is the upgraded version of ECMA script engine written in C++.NodeJs written c, c++ and javascript. </p>
                    </div>
                    <div>
                    <h3> Question: When used Nodejs or Mongodb?</h3>
                        <p> Nodejs is a JavaScript runtime environment.Actually nodejs used when we develop server site. And Mongodb doing work store data. So, mongodb used for data store. </p>
                    </div>
                    <div>
                    <h3> Question: What is Different SQL and NoSQL?</h3>
                        <p>SQL Data structure is relational or NoSQL is no relational data structure.SQL databases defines and manipulates data based structured query language.NoSQL is database dynamic schema for unstructured data.SQL vertically scalable , NoSQL is horizontally scalable.NoSQL is follows CAP,SQL follows ACID property.   </p>
                    </div>
            </div>
        </div>
    );
};

export default Blog;