import React from 'react';

const Loading = (props) => (
    <>
        {props.loading ? <img className='d-block mx-auto' src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='loader' /> : null }
    </>
)

export default Loading;
