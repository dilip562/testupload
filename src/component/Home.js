import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom'

const Home = () => {
   const {url,path}= useRouteMatch()
   console.log(url,path)
    return (
        <div>
            {/* <Link to={`${url}/home1`}>Home1</Link> */}
            <Link>Home1</Link>
            <Link>Home1</Link>
            {/* <Switch>
                <Route to={`${path}/home1`} exact  component={home1} />
            </Switch> */}
        </div>
    )
}


export default Home;