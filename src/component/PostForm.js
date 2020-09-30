import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userid:'',
              title:'',
              body:''
         }
     }
     changeHandler=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     submitHandler=(e)=>{
                    e.preventDefault()
                console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({posts:response})
        })
        .catch(error=>{
           console.log(error)
           this.setState({errormsg:"Error retriving data"})
       })

     }
        
     
     
    render() {
        const {userid,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userid" value={userid} 
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title}   onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body}   onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
