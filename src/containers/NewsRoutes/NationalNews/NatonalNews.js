import React ,{Component} from 'react';
import axios from 'axios';
import NewsSection from '../../../components/NewsSection/NewsSection';

class NationalNews extends Component{
    state = {
        API_KEY: "494c83d04f7a4c86ba00d6064e8a153b",
        posts: null
      };
    
      componentDidMount() {
        let post = null;
        let url =
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=494c83d04f7a4c86ba00d6064e8a153b';
    
          
        axios.get(url).then(Response => {
          console.log(Response);
          post = [...Response.data.articles];
          this.setState({
            posts: post
          });
          
        });
        
      }
      render() {
        let post = null;
        if (this.state.posts !== null) {
          
          post = this.state.posts.map((item, index) => {
            
            if(item.description!==null && item.content!==null){
              
              return <NewsSection item={item} key={index} />;
            }
            else{
              return null
            }
            
          });
        }

        return(
            <div>
                {post}
            </div>
        );
      }

}

export default NationalNews;