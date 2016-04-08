import React from 'react'

export default React.createClass({
    render(){
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
            </head>
            <body>
            <RouteHandler {...this.props} />
            </body>
            </html>
        )
    }
})