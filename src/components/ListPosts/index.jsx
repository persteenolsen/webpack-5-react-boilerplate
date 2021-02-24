
import React, { useState, useEffect } from 'react';

function ListPosts() {

    const [totalPosts, setTotalPosts] = useState(null);

    useEffect(() => {
        
		    // GET request using fetch inside useEffect React hook
            fetch('https://jsonplaceholder.typicode.com/posts??_start=0&_limit=10')
           
		    .then(response => response.json())
            .then(data => setTotalPosts(data));
			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
           
		   <div className="card text-center m-3">
             <h5 className="card-header">Receiving the first 10 posts from jsonplaceholder Web API by a GET Request</h5>
               <div className="table-responsive">
           
		       <table className="table table-striped">
                  <thead>
                    <tr>
                        
                        <th style={{ width: '25%' }}>Id</th>
                        <th style={{ width: '75%' }}>Title</th>
                        
                    </tr>
                  </thead>
                  <tbody>
				
				 { totalPosts && totalPosts.map(post =>
                        
						<tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>

                        </tr>
                    )}
					
					</tbody>
				</table>
				
              </div>
          </div>
    );
}

export { ListPosts };