import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { CalculatorService } from 'src/app/services/calculator.service';
import { FbserveService } from 'src/app/services/fbserve.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-profinf',
  templateUrl: './profinf.component.html',
  styleUrls: ['./profinf.component.css']
})
export class ProfinfComponent implements OnInit {
  id_inf:any
  item:any={}
  condition:any
  myForm:any
  list:any=[]
  number:any
  list2:any=[]
  id:any
  listprod:any=[]
  listlove:any=[]
  listinteretforlove:any=[]
  listlike:any=[]
  all:any
  test:any
  pubids:any=[]
  p: number = 1;
  fbid:any
  image:any
  fullname:any
  email:any
  listinteretforlike:any=[]
  totalinteret:Number=0
  accpted:any
  managers:any=[{}]
  isman:boolean=false
  managernumber:Number=0
  constructor(private auth:AuthoInfService,
    private formbuilder:FormBuilder,
    private route:ActivatedRoute,
    private aut:AuthoManService,
    private fbs:FbserveService,
    private share:ShareserviceService,
    private router:Router,
    private authadmin:AuthoAdminService,
    private calcul:CalculatorService
    ) { this.isman=this.aut.IsloggedIn()
      if(this.aut.IsloggedIn()){
        this.id= this.aut.getprof().id
        this.products(this.id)
    }
    if (this.auth.IsloggedIn()){
      this.id_inf=this.auth.getprof().id
      console.log(this.id_inf)
      //  this.auth.getmansofinf(this.id_inf).subscribe((data:any)=>{
      //    this.managernumber=data.length})
      }else{
        this.route.params.subscribe((res)=>{
          this.id_inf=res.id
          console.log(this.id_inf)
        })
      }
      this.auth.getinf(this.id_inf).subscribe((doc:any)=>{this.item=doc;
      this.image=this.item.image
      this.fullname=this.item.fullname
      this.email=this.item.email
      this.fbid=doc.facebookId
      console.log(this.aut.IsloggedIn())
      if(this.aut.IsloggedIn()&&this.fbid){  
      this.fbs.getposts(doc.facebookId,doc.accesstoken).subscribe((res:any)=>{
        this.all=res.posts.data
        let j=0
         for(let i in this.all){
           for(let l in this.listprod){
             if(this.all[i].message){
              this.test=this.all[i].message
              console.log(this.test)
              if(this.test.indexOf(`#${this.listprod[l].tag}`)!==-1){ 
                this.auth.isaccpub(this.all[i].id,this.listprod[l].id_manager,this.all[i].full_picture).subscribe((resultat:any)=>{
                  this.accpted=resultat
                  if(this.accpted){
                    this.list[j]=this.listprod[l]
                    this.pubids[j]=this.all[i].id
                    this.reactioncount(this.all[i].id,doc.accesstoken,j)
                    this.lovecount(this.all[i].id,doc.accesstoken,j,this.listprod[l].id_manager)
                    this.likecount(this.all[i].id,doc.accesstoken,j,this.listprod[l].id_manager)
                    j=j+1
                  }
                })
              
             }
             
             }
           }
         }
        //  this.auth.getmansofinf(this.id_inf).subscribe((data:any)=>{
        //   this.managernumber=data.length})
         console.log(this.listinteretforlove)
      })
      this.fbs.numberoffriend(doc.facebookId,doc.accesstoken).subscribe((result:any)=>{
        this.number=result.friends.summary.total_count
        
      })
      }
      if(!this.aut.IsloggedIn()){
        this.producttoin(this.id_inf)
        this.fbs.getposts(this.fbid,doc.accesstoken).subscribe((res:any)=>{
          this.all=res.posts.data
           let j=0
           for(let i in this.all){
             for(let l in this.listprod){
               if(this.all[i].message){
                this.test=this.all[i].message
                if(this.test.indexOf(`#${this.listprod[l].tag}`)!==-1){ 
                this.auth.isaccpub(this.all[i].id,this.listprod[l].id_manager,this.all[i].full_picture).subscribe((resultat:any)=>{
                  this.accpted=resultat
                  if(this.accpted){
                    this.list[j]=this.listprod[l]
                    this.pubids[j]=this.all[i].id
                    console.log(j)
                    this.reactioncount(this.all[i].id,doc.accesstoken,j)
                    this.lovecount(this.all[i].id,doc.accesstoken,j,this.listprod[l].id_manager)
                    this.likecount(this.all[i].id,doc.accesstoken,j,this.listprod[l].id_manager)
                    this.managerofprod(this.listprod[l].id_manager,j)
                    j=j+1
                  }
                  
                })
              }
               }
              
             }
             
           }
           console.log(this.listlove)
           
        })    
    
        this.fbs.numberoffriend(doc.facebookId,doc.accesstoken).subscribe((result:any)=>{
          this.number=result.friends.summary.total_count
          
        })

      }
      })
     this.condition=this.auth.IsloggedIn()
     this.myForm=this.formbuilder.group({
       image:[null]
     })
    
     this.auth.getmansofinf(this.id_inf).subscribe((data:any)=>{
      this.managernumber=data.length})
  }

  ngOnInit(): void {
  }
  selectImage(event:any){
    if(event.target.files.length >0){
      const file =event.target.files[0]
      this.myForm.patchValue({
        image:file
      });
      this.myForm.get('image')?.updateValueAndValidity()
    }
  }
  change(){
    const formData:any =new FormData();
    formData.append('image', this.myForm.get('image').value)
    this.auth.upavatar(this.id_inf,formData).subscribe(doc=>{console.log(doc)
      this.auth.getinf(this.id_inf).subscribe((res:any)=>{this.item=res;
        this.image=this.item.image})
    })
    
  }
  reactioncount(postid:any,accesstoken:any,i:any){
    this.fbs.getreaction(postid,accesstoken).subscribe((doc:any)=>{
      this.list2[i]=doc.reactions.summary.total_count
    })
    console.log(this.list2)
  }
  lovecount(postid:any,accesstoken:any,i:any,id:any){
    this.fbs.numberoflove(postid,accesstoken).subscribe((doc:any)=>{
      this.listlove[i]=doc.reactions.summary.total_count
      this.intertofprod(id,i)
    })
  }
  likecount(postid:any,accesstoken:any,i:any,id:any){
    this.fbs.numberofLike(postid,accesstoken).subscribe((doc:any)=>{
      this.listlike[i]=doc.reactions.summary.total_count
      this.intertofprodlikes(id,i)
    })
  }
   products(id:any){
     this.share.getprodman(id).subscribe((doc:any)=>{
       this.listprod=doc
       console.log(this.listprod)
     })
   }
   detail(id:any){
    if(this.aut.IsloggedIn()){
      this.router.navigate(['manager/pub'],{queryParams:{idpub:id,id_inf:this.id_inf}})}
    else{
      this.router.navigate(['admin/pub'],{queryParams:{idpub:id,id_inf:this.id_inf}})
    } 
  }
  producttoin(id:any){
    this.auth.getmansofinf(id).subscribe((data:any)=>{
      let j=0
      for( let i in data ){
        this.share.getprodman(data[i]._id).subscribe((doc:any)=>{
          for(let d in doc){
            this.listprod[j]=doc[d]
            j=j+1
          }
          })

      }
    })
    
  }
  intertofprod(id:any,i:any){
   this.aut.getman(id).subscribe((data:any)=>{
    this.listinteretforlove[i]=this.calcul.calculinteretlove(data.standard,this.listlove[i],data.foreachmultilove)
    // this.listinteretforlove[i]=this.calcul.calculinteretlove(12,this.listlove[i],data.foreachmultilove)
    console.log(this.listinteretforlove[i])
    this.totalinteret=this.totalinteret+this.listinteretforlove[i]
    console.log(this.totalinteret)
    })
  }
  intertofprodlikes(id:any,i:any){
    this.aut.getman(id).subscribe((data:any)=>{
      this.listinteretforlike[i]=this.calcul.calculinteretlove(data.standard,this.listlike[i],data.foreachmultilike)
      // this.listinteretforlove[i]=this.calcul.calculinteretlove(12,this.listlove[i],data.foreachmultilove)
      this.totalinteret=this.totalinteret+this.listinteretforlike[i]
      console.log(this.totalinteret)
      })
  }
  managerofprod(id:any,i:any){
    this.aut.getman(id).subscribe(doc=>{
      this.managers[i]=doc
      console.log( this.managers[i])
    })
  }
}
