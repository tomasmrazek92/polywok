"use strict";(()=>{$(document).ready(()=>{gsap.registerPlugin(ScrollTrigger),$("img").each(function(){$(this).removeAttr("loading"),ScrollTrigger.refresh()});let j=$(".hp-flow_visual-block"),z=$(".hp-flow_visual-phone"),r=$(".hp-flow_visual-card"),G=$(".hp-flow_tags"),J=$(".hp-flow_stats"),K=$(".hp-flow_clients"),Q=$(".hp-flow_avatar-intro"),W=$(".hp-flow_avatar-action"),X=$(".hp-flow_visual-button"),l=".hp-flow_pattern",w=!1,le=(e,t,a,o={})=>gsap.timeline({scrollTrigger:{trigger:$(e),start:t,end:a,markers:!0,invalidateOnRefresh:!0,yoyo:!0,...o}}),E=e=>{w=e},h=e=>{let t=gsap.timeline(),a=r.index(e),o=["-15em","-10em","10em","5em"];return t.fromTo(e,{opacity:0,x:o[a]},{x:0,opacity:1,duration:.75}),t},C=e=>{let t=gsap.timeline();return r=$(e).find(r),t.add(h($(e).find(r).eq(0)),"<"),t.add(h($(e).find(r).eq(1)),"<"),t.add(h($(e).find(r).eq(2)),"<"),t.add(h($(e).find(r).eq(3)),"<"),t},k=e=>{let t=gsap.timeline();return t.to($(e).find(r),{opacity:0,scale:.8,stagger:{each:.02},duration:.75}),t.fromTo(`${e} ${l}._1`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([`${e} ${l}._2`,`${e} ${l}._4`],{scale:.5,opacity:0},{scale:1,opacity:1},"<"),t.fromTo(`${e} ${l}._3`,{xPercent:50,yPercent:-50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([$(e).find(G),$(e).find(J),$(e).find(K)],{opacity:0,x:"-5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<0.5"),t.fromTo([$(e).find(Q),$(e).find(W)],{opacity:0,x:"5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<"),t},I=e=>{let t=gsap.timeline();return t.to(`${e} ${l}._1`,{xPercent:-50,yPercent:50,opacity:0}),t.to(`${e} ${l}._2`,{scale:.5,opacity:0},"<"),t.to(`${e} ${l}._3`,{xPercent:50,yPercent:-50,opacity:0},"<"),t.fromTo(`${e} ${l}._5`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo(`${e} ${l}._6`,{xPercent:-50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(X),{opacity:0,scale:.8},{opacity:1,scale:1,onComplete:()=>{E(!0)},onReverseComplete:()=>{E(!1),x(!0,e)}},"<"),t},Y=e=>{let t=gsap.timeline();return t.fromTo($(e).find(j),{display:"block",opacity:1,yPercent:0},{display:"none",opacity:0,yPercent:-10,duration:.3}),t.fromTo($(e).find(z),{display:"none",opacity:0,yPercent:10},{display:"block",opacity:1,yPercent:0,duration:.3}),t},A=e=>{let t=gsap.timeline();return t.fromTo(`${e} ${l}._7`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1}),t.fromTo(`${e} ${l}._8`,{xPercent:50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(".hp-flow_visual-phone_card-button").eq(1),{scale:1},{scale:.9,delay:.5}),t.fromTo($(e).find(".hp-flow_visual-phone_card"),{rotate:0,xPercent:0},{rotate:"7deg",xPercent:120}),t.fromTo($(e).find(".hp-flow_visual-phone_check"),{opacity:0,scale:.8},{opacity:1,scale:1}),t.fromTo($(e).find(".hp-flow_visual-phone_check-icon"),{opacity:0,scale:2},{opacity:1,scale:1},"<0.1"),t};ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.timeline(),t=".hp-flow_visual.desktop";e.addLabel("Step 1 Starts"),e.add(C(t),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(k(t)),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(I(t)),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(A(t)),e.addLabel("Step 4 Ends");let a=document.querySelectorAll(".hp-flow_content-inner");a.forEach((i,f)=>{let s=`Step ${f+1} Starts`,L=`Step ${f+1} Ends`;ScrollTrigger.create({animation:e,trigger:i,start:"bottom bottom",onEnter:({progress:q,direction:y,isActive:oe})=>{y===1&&e.tweenFromTo(s,L)},onLeaveBack:({progress:q,direction:y,isActive:oe})=>{y===-1&&e.tweenFromTo(L,s)}})});let o=gsap.timeline({paused:!0,scrollTrigger:{trigger:a[3],start:"bottom bottom",onEnter:()=>{o.play()},onLeaveBack:()=>{o.reverse()}}});o.add(Y(t))},"(max-width: 991px)":function(){let e=gsap.timeline();e.addLabel("Step 1 Starts"),e.add(C(".hp-flow_content-visual._1"),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(k(".hp-flow_content-visual")),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(I(".hp-flow_content-visual._3")),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(A(".hp-flow_content-visual._4")),e.addLabel("Step 4 Ends");let t=document.querySelectorAll(".hp-flow_content-inner"),a=[!1,!1,!1,!1];t.forEach((o,i)=>{let f=`Step ${i+1} Starts`,s=`Step ${i+1} Ends`;ScrollTrigger.create({animation:e,trigger:o,start:"top bottom",onEnter:({progress:L,direction:q,isActive:y})=>{q===1&&!a[i]&&(e.tweenFromTo(f,s),a[i]=!0)}})})}});let u,c=0,v=$(".hp_hero-container-wrap .hp-flow_visual-button"),d=$(".hp_hero-template"),F=$(".hp_hero-container-wrap .hp-flow_styles-bg"),_=$("[hero-template]"),S;function B(){u||(v.addClass("disabled"),c=(c+1)%$(d).length,d.add(F).stop().fadeOut("fast").promise().then(()=>{let e=c===0?d.length-1:c-1;return d.eq(e).find(_).trigger("click").promise()}).then(()=>Promise.all([F.eq(c).fadeIn("fast").promise(),d.eq(c).fadeIn("fast").promise()])).then(()=>d.eq(c).find(_).trigger("click").promise()).then(()=>v.removeClass("disabled")).catch(e=>{console.log("An error occurred: ",e)}))}function M(){S&&(clearInterval(S),B()),S=setInterval(function(){B()},4e3)}d.eq(0).find(_).trigger("click"),M(),v.on("click",()=>{M()});let p=0,Z=$(".hp-flow_visual .hp-flow_visual-button"),O=$(".hp-flow_col.visual"),V=$(".hp-flow_content-visual._3"),b;function x(e,t){if(!u){let a=$(t).find(".hp-flow_visual-static"),o=$(t).find(".hp-flow_styles-bg");if(e===!0){if(p===0)return;p=0}else w&&(p=(p+1)%$(a).length);(w||e===!0)&&a.add(o).stop().fadeOut("fast").promise().done(function(){a.eq(p).fadeIn(),o.eq(p).fadeIn()})}}function g(e){b&&(clearInterval(b),x(!1,e)),b=setInterval(function(){x(!1,e)},3e3)}Z.on("click",()=>{window.matchMedia("(max-width: 991px)").matches?g(V):g(O)}),window.matchMedia("(max-width: 991px)").matches?g(V):g(O);let H;function ee(){u=!1,console.log("Scrolling has stopped.")}window.addEventListener("scroll",function(){u||(console.log("Scrolling..."),u=!0),clearTimeout(H),H=setTimeout(ee,500)},!1);let T=$("[card1-card]"),m=T.find("p"),te=$(".hp-feature-1_dot"),ae=$(".hp-feature-1_text-dot"),ie=new SplitType(m,{types:"words, chars"}),n=gsap.timeline({scrollTrigger:{trigger:"[card-1]",start:"20% bottom"},defaults:{ease:Expo.easeOut}});n.set(m,{opacity:0}),n.fromTo(T.eq(0),{x:"-2.4rem",scale:.85,opacity:0},{x:0,scale:1,opacity:1,duration:.5}),n.fromTo(te,{scale:.85,opacity:0},{scale:1,opacity:1},"<"),n.set(m,{opacity:1},"<"),n.to($(m).eq(0).find(".char"),{visibility:"visible",stagger:{each:.025}},"<"),n.fromTo(T.eq(1),{x:"-2.4rem",scale:.85,opacity:0},{x:0,scale:1,opacity:1,duration:.5},">-0.4"),n.to($(m).eq(1).find(".char"),{visibility:"visible",stagger:{each:.025}},">-0.5"),n.fromTo(ae,{scale:0},{scale:1,duration:.2},">-0.5");let N=e=>{$(e).each(function(){let t={val:1},a=$(this).text(),o=parseFloat(a),i=(a.split(".")[1]||[]).length;if(!isNaN(o)){$(this).css("visibility","hidden");let f=()=>{let s;Math.abs(o-t.val)<=.01?s=parseFloat(o.toFixed(i)):s=parseFloat(t.val.toFixed(i)),$(this).text(s)};TweenLite.to(t,3,{val:o,onUpdate:f,onStart:()=>$(this).css("visibility","visible")})}})};gsap.timeline({scrollTrigger:{trigger:"[card-3]",start:"20% bottom"},defaults:{ease:Expo.easeOut}}).call(()=>{N($(".hp-feature-3_value")),N($(".hp-feature-3_date"))});let R=["www.google.com","www.youtube.com","www.tesla.com","www.apple.com","www.webflow.com"],P=0,ne,U=document.querySelector(".hp-feature-4_address-inner");function D(){P>=R.length&&(P=0);let e=R[P++],t=document.createElement("div");t.textContent=e,U.innerHTML="",U.appendChild(t);let a=new SplitType(t,{types:"chars"});gsap.timeline().fromTo($(a.chars),{display:"none"},{display:"inline-block",visibility:"visible",ease:"power2",stagger:.05,onComplete:()=>{gsap.delayedCall(1,D)}})}D()});})();
