import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <p className='questions'>Frequently asked questions: </p>
            <h2>Difference Between State and Props in React.js</h2>
            <p>Major comparisons of state between props: <br />
                State can used to display changes with the component and Props are used to communicate between components.
                State can be changed(mutable) But Props are read only and cannot be changed (immutable).
                State is managed within the component	 and Props gets passed to the component.</p>

            <h2>How does useState work?</h2>
            <p>useState gives an array containing two values:
                One state variable that store value .Others state set function which can update the state variable. <br />
                <code>const [sum, setSum] = useState(0);</code> <br />
                Here initial value 0 store in sum veriable and updating the value by setSum funtion.
            </p>

            <h2>What is the purpose of useEffect other than fetching data?</h2>
            <p>useEffect can state change: validating input field ,live filtering , trigger animation on new array value.
                useEffect can props change: update paragraph list on fetched API data update, updating fetched API data to get BTC updated price.</p>

            <h2>How Does React work?</h2>
            <p>ReactJS allow to reusable part of code known as components. React components work similarly to JavaScript functions as they accept value of attributes of a tag called properties or props.
                When develop a applications we can creating reusable components. These components are individual part's of a final interface, which, when assembled, form the application’s entire user interface.
                React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>

        </div>
    );
};

export default Question;