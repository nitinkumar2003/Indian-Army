import React,{Component} from 'react';
import Axios from 'axios';
export class Newsapi extends Component{
	state={newData:[]}
	componentDidMount(){
		const URL="https://newsapi.org/v2/everything?q=tesla&from=2021-12-11&sortBy=publishedAt&apiKey=579b1393689f4ef192f9e0f7f539da11";
		Axios.get(URL)
		.then(res=>{
			this.setState({newData:res.data.articles});
		});
	}
	render(){
		return(


<>
{this.state.newData.map(news=>

<div>
	<h1>{news.title}</h1>

</div>


	)}
</>
			)
	}
}
export default Newsapi;