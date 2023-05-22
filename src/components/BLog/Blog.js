import React from 'react';
import"./Blog.css"
const Blog = () => {
    return (
        <div className='blog'>
            <h1>Some important topics you must know...</h1>
            <div className='important-topic'>
            <h3>Question:How does the React Router differ from conventional Routing?</h3>
            <p>Answer:
               <li> URL Changes : A HTTP request is sent to a server for receiving a corresponding HTML page in conventional routing whereas, React routing necessitates only for a change in the History attribute.</li>
              <li>  Navigation : In React routing, the users feel like they are navigating across distinct webpages while in actuality they are not. But, in case of conventional routing, the user actually navigates across different web pages for each individual view.</li>
              <li> Pages :Whereas in React routing only a single HTML page is involved, each view corresponds to a new file in conventional routing.</li></p>
            </div>
            <div className="important-topic">
                <h3>Question:How do you implement react routing?</h3>
                <p>Answer:
                    <li>Step 1 — Installing React Router</li> 
                    <li>Step 2 — Adding Routes</li> 
                    <li> Step 3 — Accessing Route Data with Hooks </li>
                    <li>Step 4 — Nesting Routes</li>
                    </p>
            </div>
            <div className="important-topic">
                <h3>Question:What is the purpose of context api in react?</h3>
                <p>Answer: <br /> Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components</p>
            </div>
            <div className="important-topic">
            <h3>Question:Can you explain how the provider works with the React context API?</h3>
            <p>Answer: <br />Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers</p>
            </div>
            <div className="important-topic">
            <h3>Question:What is custom hooks in react?</h3>
            <p>Answer: <br />A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function</p>
            </div>
            <div className="important-topic">
            <h3>Question:How many ways can we implement conditional rendering in react?</h3>
            <p>Answer:
                <span>Many ways to Implement Conditional Rendering in React Applications such as:</span>
                <li>If-else condition</li>
                <li>ternary operator</li>
                <li>AND operator</li>
                <li>OR operator</li>
            </p>
            </div>
            <div className="important-topic">
            <h3>Question:What is useref in react js?</h3>
            <p>Answer: <br />It create a mutable variable wchich will not re-render the components.It is used to access a DOM directly</p>
            </div>
            
        </div>
    );
};

export default Blog;