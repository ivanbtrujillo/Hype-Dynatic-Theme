import React from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import collection from '../../../../../data/__collection.json';



export default class Posts extends React.Component {

  rawMarkup(text) {
    var rawMarkup = marked(text, {sanitize: true});
    rawMarkup = rawMarkup.replace(/(<([^>]+)>)/igm, "");
    rawMarkup = rawMarkup.substring(0, 280);
    rawMarkup += '...';
    return { __html: rawMarkup };
  }


  render() {

    var old_header = 0;
    var html = "&nbsp;";
    collection.filter(data => data.layout == 'Post').reverse().map((data, index) => {
      if(index%3 === 0 && index!=0){
        html += `</div></div>&nbsp;`;
      }

      if(index % 3 === 0){
        old_header = index;
        html += `<div class="card-deck-wrapper">
                  <div class="card-deck">
                `;
      }

      html += `
        <div class="card" >
          <img class="card-img-top" style="width: 100%; height: 30vh" src=${data.cover} alt="Main image"/>
          <div class="card-block">
            <h4 class="card-title"><a class="gradient-color" style="text-decoration:none" href=${data.slug}>${data.title}</a></h4>
            <p class="card-text">${this.rawMarkup(data.content).__html}</p>
            <p class="card-text">
              <div class="text-muted">
                <img class="img-circle m-r-1" style="width: 15%" src="https://pbs.twimg.com/profile_images/697078453158481920/MYmoKTis.jpg" alt="..." />
                ${data.author} · ${data.date}
              </div>
            </p>
          </div>
        </div>
      `
    });
    html += `</div></div>`;

    return (
      <div dangerouslySetInnerHTML={{__html: html}}>
      </div>

    );
  }
}
