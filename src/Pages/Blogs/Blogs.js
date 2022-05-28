import React from 'react';
import findImg from '../../assets/images/find.png';
const Blogs = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-full">
                        <h1 className="text-5xl text-primary font-bold my-5">1. How will you improve the performance of a React Application?</h1>
                        <h4 className='text-2xl'>1. Keeping component state local where necessary</h4>
                        <p className="py-6">We’ve learned that a state update in a parent component re-renders the parent and its child components.

                            So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.

                        </p>
                        <h4 className='text-2xl'>2. Memoizing React components to prevent unnecessary</h4>
                        <p>Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                            In essence, if a child component receives a prop, a memoized component shallowly compares the prop by default and skips re-rendering the child component if the prop hasn’t changed:</p>
                        <h4 className='text-2xl'>3.Using the useMemo Hook</h4>
                        <p>
                            When the prop we pass down to a child component is an array or object, we can use a useMemo Hook to memoize the value between renders. As we’ve learned above, these values point to different spaces in memory and are entirely new values.

                            You can also use the useMemo Hook to avoid re-computing the same expensive value in a component. It allows us to memoize these values and only re-compute them if the dependencies change.

                            Similar to useCallback, the useMemo Hook also expects a function and an array of dependencies:</p>
                    </div>

                </div>

            </div>
            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-full">
                        <h1 className="text-5xl text-primary font-bold my-5"> 2. What are the different ways to manage a state in a React application?</h1>
                        <p>
                            React applications are built using components and they manage their state internally and it works well for applications with few components, but when the application grows bigger, the complexity of managing states shared across components becomes difficult.

                            Here is a simple example of an e-commerce application, in which the status of multiple components will change when purchasing a product.

                            Add that product to the shopping list
                            Add product to customer history
                            trigger count of purchased products
                            If developers do not have scalability in mind then it is really hard to find out what is happening when something goes wrong. This is why you need state management in your application.


                        </p>
                    </div>
                </div>
            </div>

            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-primary font-bold my-5">3.How does prototypical inheritance work?</h1>
                        <p class="py-6">he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object</p>

                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-full">
                        <h1 className="text-5xl text-primary font-bold my-5"> 4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                        <p>
                            setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

                            Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. In the rare case that you need to force the DOM update to be applied synchronously, you may wrap it in flushSync, but this may hurt performance.
                            setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, read about the updater argument below.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-full">
                        <h1 className="text-5xl text-primary font-bold my-5"> 5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                        <img src={findImg} alt="" />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Blogs;