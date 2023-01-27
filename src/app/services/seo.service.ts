import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  constructor(
    private title: Title, 
    public meta: Meta
    ) { }

  setSEO(ztitle: string, zdescription: string, zURL: string, zimage :string, zkeywords: string){
    let xURL = zURL || "https://mapwale.com/";
    let xTitle = ztitle || "MapWale - Create high-quality Custom maps Starting free";
    let xDescription = zdescription || "A diverse library of interactive maps with over 1200+ customisable maps for the World, United States, India, Europe, and 195 nations at your fingertips.";
    let xImage = zimage || "https://mapwale.com/assets/open_graph_logo.png";
    let xKeywords = zkeywords || "mapwale, maps, free download, Dipesh Bhoir";

    // this.meta.addTags([
    //   { name: 'keywords', content: 'Angular Universal, SSR,HTML Tags, Meta tags, Angular Universal' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'description', content: 'This is universal desciption here!' },
    //   { name: 'author', content: 'Akash Chauhan' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'date', content: '2021-05-06', scheme: 'YYYY-MM-DD' },
    //   { charset: 'UTF-8' }
    // ]);
    // this.updateOgUrl(xURL);
    // this.updateTitle(xTitle);
    // this.updateDescription(xDescription);
    // this.updateOgImage(xImage);
    // this.updateKeywords(xKeywords);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ property: 'og:url', content: url })
    this.meta.updateTag({ property: 'twitter:url', content: url })
  }
  updateTitle(title: string) {
    this.title.setTitle(title)
    this.meta.updateTag({ name: 'title', content: title })
    this.meta.updateTag({ property: 'og:title', content: title })
    this.meta.updateTag({ property: 'twitter:title', content: title })
    //let bodyX = <HTMLDivElement> document.getElementById("title");
    //try{bodyX.innerText = title;}catch(e){console.error("error: " + e);}
  }
  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ property: 'og:description', content: desc })
    this.meta.updateTag({ property: 'twitter:description', content: desc })
    //let bodyX = <HTMLDivElement> document.getElementById("about");
    //try{bodyX.innerText = desc;}catch(e){console.error("error: " + e);}
  }
  updateOgImage(image: string) {
    this.meta.updateTag({ property: 'og:image', content: image })
    this.meta.updateTag({ name: 'twitter:image', content: image })
    //let bodyX = <HTMLImageElement> document.getElementById("avatar");
    //try{bodyX.src = image;}catch(e){console.error("error: " + e);}
  }
  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords })
  }

}