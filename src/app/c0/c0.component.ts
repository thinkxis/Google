
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { SeoService } from '../services/seo.service';
import { mapModel } from '../universal.model';

import { Meta } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-c0',
  templateUrl: './c0.component.html',
  styleUrls: ['./c0.component.scss']
})
export class C0Component implements OnInit {

  pageTitle = "";
  map$:Observable<string> = of();


  fs:any;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    public seo: SeoService,
    public meta: Meta,
    public auth:AuthService,
    ) {
    }
    

ngOnInit(){
      const id = "94dMymEZmVb6h1ksbJrU";

      if( this.auth.isBrowser ){
        console.log("KOOoooooooo")
        this.auth.getData(id).then((x) => {
          let ref:mapModel|any = x.exists() ? x.data() : null;
          if(!ref){
            console.log("BOOoooooooo", ref)
            // this.router.navigate([''])
            return;
          }else{
            console.log("COOoooooooo", ref)
            this.meta.addTags([
              { name: 'keywords', content: 'Angular Universal, SSR,HTML Tags, Meta tags, Angular Universal' },
              { name: 'robots', content: 'index, follow' },
              { name: 'description', content: 'This is universal desciption here!' },
              { name: 'author', content: 'Akash Chauhan' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'date', content: '2021-05-06', scheme: 'YYYY-MM-DD' },
              { charset: 'UTF-8' }
            ]);
            this.map$ = of(ref.id);
            return;
          }
        });
      }
      
      if( this.auth.isServer ){
        console.log("SOOoooooooo")
        // Get a reference to the Firestore database'
        this.auth.getDataServer(id).then(x => {
            let ref:mapModel|any = x.exists ? x.data() : null;
            console.log("AOOoooooooo" )

            if(!ref){
              console.log("BOOoooooooo", ref)
            // this.router.navigate([''])
              return;
            }else{
              console.log("COOoooooooo", ref)
            this.meta.addTags([
              { name: 'keywords', content: 'Angular Universal, SSR,HTML Tags, Meta tags, Angular Universal' },
              { name: 'robots', content: 'index, follow' },
              { name: 'description', content: 'This is universal desciption here!' },
              { name: 'author', content: 'Akash Chauhan' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'date', content: '2021-05-06', scheme: 'YYYY-MM-DD' },
              { charset: 'UTF-8' }
            ]);
            this.map$ = of(ref.id);
            return;
            }
        })
    
      }

    }
  
  //   execute(ref:mapModel){
  //     // console.log(ref)
  //   // this.map$ = of(ref)
  //   let name = ref.name;
  //   this.pageTitle = name;
  //   let st = !ref.prime ? "Free Download ":"Download ";

  //   let xTitle = st + name + " svg, jpeg, png, webp";
  //   let xDescription = "Create your own custom " + name + " showing all" +
  //   ((ref.info=='Mercator' || ref.info=='MercatorPacific' || ref.info=='PeirceQuincuncial' || ref.info=='Continent' || ref.info=='Region') ? ' countries ':'') + 
  //   (ref.info=='Nation' ? ' states ':'') + 
  //   (ref.info=='State' ? ' districts ':'') + 
  //   (ref.info=='City' ? ' wards ':'') + 
  //   ((ref.info=='History'||ref.info=='Geography') ? ' dominions ':'') + 
  //   "of " + name + ". Color an editable map, and download it for use in your project.";
  //   let xURL = "https://mapwale.com/edit-map/" + ref.id;
  //   let xImage = "";
  //   let xKeywords = "maps, free download, " + name + ", svg map, jpeg map, png map, webp map";

  //   this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
    

  //   // this.map$ = ref
  //   if(isPlatformBrowser(this._platformId)){
  //   }
  // }

}
