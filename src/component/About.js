import React from 'react';
import {useRouteMatch,Link,Switch,Route} from 'react-router-dom'
import About1 from './About1'

const About = () => {
    const {path,url} = useRouteMatch()
    console.log(path,url)
    return (
        <div>
            <h1>About</h1>
            <Link to={`${url}/about1`}>About 1</Link>
            <Link to={`${url}/about2`}>About 2</Link>
            <Switch>
                <Route path={`${path}/about1`} component={About1} />
                <Route path={`${path}/about2`} component={about2} />
            </Switch>
        </div>
    )
}

// const about = () => {
//     const {path,url} = useRouteMatch()
//     return(
//         <div>
//             <h1>About1</h1>
//             <Link to={`${url}/about1`}>About 1</Link>
//             <Link to={`${url}/about2`}>About 2</Link>
//             <Switch>
//                 <Route path={`${path}/about1`} component={about3} />
//                 <Route path={`${path}/about2`} component={about4} />
//             </Switch>
//         </div>
//     )
// }
const about2 = () => {
    return(
        <div>
            <h1>About2</h1>
        </div>
    )
}

const about3 = () => {
    return(
        <div>
            <h1>About3</h1>
        </div>
    )
}
const about4 = () => {
    return(
        <div>
            <h1>About4</h1>
        </div>
    )
}
export default About;