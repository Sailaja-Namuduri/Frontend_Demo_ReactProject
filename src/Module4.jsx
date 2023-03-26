export const Module4=()=>{
    const fnMobileMenu=()=>{
        var menu_div=document.createElement('div');
        menu_div.setAttribute('id','mobilemenudisplayed')
        menu_div.setAttribute('style','top:0;right:0;position:absolute;height:100%;width:50%;background:white;')
        document.body.appendChild(menu_div);
  
        var imgNode=document.createElement('a');
        menu_div.appendChild(imgNode);
        var imgClose=document.createElement('img');
        imgClose.src="./assets/images/icon-menu-close.svg";
        imgClose.setAttribute('height','30px');
        imgClose.setAttribute('width','30px');
        imgNode.appendChild(imgClose);
        
  
        var linksContainer=document.createElement('div');
        linksContainer.setAttribute('style','border:1px solid blue,top:80px');
        menu_div.appendChild(linksContainer);
  
  
        var node=document.createElement('a');
        var textnode=document.createTextNode('Home');
        node.appendChild(textnode);
        node.setAttribute('style','display:block');
        //node.setAttribute('href','http://www.goolge.com');
        menu_div.appendChild(node);
  
        var node=document.createElement('a');
        var textnode=document.createTextNode('New');
        node.appendChild(textnode);
        node.setAttribute('style','display:block');
        //node.setAttribute('href','http://www.goolge.com');
        menu_div.appendChild(node);
  
        var node=document.createElement('a');
        var textnode=document.createTextNode('Popular');
        node.appendChild(textnode);
        node.setAttribute('style','display:block');
        //node.setAttribute('href','http://www.goolge.com');
        menu_div.appendChild(node);
  
        var node=document.createElement('a');
        var textnode=document.createTextNode('Trending');
        node.appendChild(textnode);
        node.setAttribute('style','display:block');
        //node.setAttribute('href','http://www.goolge.com');
        menu_div.appendChild(node);
  
        var node=document.createElement('a');
        var textnode=document.createTextNode('Categories');
        node.appendChild(textnode);
        node.setAttribute('style','display:block');
        //node.setAttribute('href','http://www.goolge.com');
        menu_div.appendChild(node);
      }
    return(
        <div>
            <div style="display: flex;margin-top: 26px;position: relative;" >
                <div><img src="./assets/images/logo.svg"/></div>
                <div class="nav-items" style="align-self: center;position: absolute;right: 0;">
                    <a href="#">Home</a>
                    <a href="#">New</a>
                    <a href="#">Popular</a>
                    <a href="#">Trending</a>
                    <a href="#">Categories</a>
                </div>
                <div class="menu-mobile" style="position: absolute;right: 0;align-self: center;" onclick={fnMobileMenu}>
                    <img src="./assets/images/icon-menu.svg"/>
                </div>
            </div>
            <div class="row">    
                <div class="col-9">      
                    <div class="row-two">
                        <div>
                            The Bright Future of Web 3.0?
                        </div>
                        <div>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?

                            <button>Read more</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    New 
                    <div>
                        Hydrogen VS Electric Cars
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </div>
                    <div>
                        The Downsides of AI Artistry
                        What are the possible adverse effects of on-demand AI image generation?
                    </div>
                    <div>
                        Is VC Funding Drying Up?
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                  </div>
                </div>
                <div class="col-12">
                    <div class="last-flex">
                        <div>
                            01
                            Reviving Retro PCs
                            What happens when old PCs are given modern upgrades?
                        </div>
                        <div>
      
                            02
                            Top 10 Laptops of 2022
                            Our best picks for various needs and budgets.
                        </div>
                        <div>
                            03
                            The Growth of Gaming
                            How the pandemic has sparked fresh opportunities.
                        </div>
                    </div>
                </div>
      
            </div>
  
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Sailaja</a>.
            </div>
        </div>
    )
}