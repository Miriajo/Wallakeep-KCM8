import React from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { error: null }
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error)
        console.log(errorInfo)
        this.setState({ error })
    }

    render()
    {
        if(this.state.error)
        {
            return (
                <div className={`error-boundary`}>
                    <h2>Oooppss!! Algo ha ido mal.</h2>
                    <p>Trabajaremos lo mejor posible para que no vuelva a ocurrir. Lo sentimos.</p>
                </div> 
            )
        }
        else
        {
            return this.props.children
        }
    }
}