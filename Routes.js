import {Route} from 'react-router'
import Root from 'modules/Root'
import Index from 'modules/Repo'
import About from 'modules/About'

export default
    <Route path="/" component ={Root} >
        <Route path="Index" component={Index} />
        <Route path="about" component={About} />
    </Route>
