import React, { Component } from "react"

export default class NewsNewForm extends Component {

    state = {
        newsTitle: "",
        newsSynopsis: "",
        newsUrl: ""
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewNews = evt => {
        evt.preventDefault();
        if (this.state.newsTitle === "") {
          window.alert("Please include a title");
        } else {
          const news = {
            newsTitle: this.state.newsTitle,
            newsSynopsis: this.state.newsSynopsis,
            newsUrl: this.state.newsUrl
          };
    
          this.props
            .addNews(news)
            .then(() => this.props.history.push("/news"));
        }
      };

    render() {
        return (
            <React.Fragment>
            <form className="NewsForm">
                <div className="form-group">
                <label htmlFor="NewsTitle">Title</label>
                <input type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="newsTitle"
                placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="NewsSynopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="newsSynopsis"
              placeholder="Synopsis"
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="NewsUrl">News Url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="NewsUrl"
              placeholder="News Url"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewNews}
            className="btn btn-primary">
            Submit
          </button>
          </form>
        </React.Fragment>
        )
    }
}