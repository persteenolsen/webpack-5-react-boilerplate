
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ListPosts() {
    
	const [totalPosts, setTotalPosts] = useState(null);
	
	let partofroute = "/selectedpost";
	let partofrouteedit = "/editpost";

    useEffect(() => {
        
		    // GET request using fetch inside useEffect React hook
            fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
           
		    .then(response => response.json())
            .then(data => setTotalPosts(data));
			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
           
		   <div>
		   
             <h2>The result of a GET Request towards a test Web API</h2>
			 <br />
			 			 
			 <Link to="/createpost" >Create a new Post</Link>
			 <br /><br />
		   
               <div className="table-responsive">
           
				
		       <table className="table table-striped">
                  <thead>
                    <tr>
                        
                        <th style={{ width: '10%' }}>Id</th>
						<th style={{ width: '10%' }}></th>
                        <th style={{ width: '80%' }}>Title</th>
                        
                    </tr>
                  </thead>
                  <tbody>
				
				 { totalPosts && totalPosts.map(post =>
                        
						
						<tr key={post.id}>
                            <td>{post.id}</td>
							<td> <Link to={`${partofrouteedit}/${post.id}`} className="nav-item nav-link">Edit</Link></td>
                            <td> <Link to={`${partofroute}/${post.id}`} className="nav-item nav-link">{post.title}</Link></td>
                           
                        </tr>
                    )}
					
					</tbody>
				</table>
				
              </div>
          </div>
    );
}

export { ListPosts };