		{
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			} 
			else {  // code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
						xmlhttp.onreadystatechange=function() {
						if (xmlhttp.readyState==4 && xmlhttp.status==200){
							var arr= (xmlhttp.responseText).split("$");
							var body=document.getElementsByTagName('body')[0];
							var divlarge= document.createElement('div');
							divlarge.id= 'bigpost';
							divlarge.className= 'bigpost';
							body.appendChild(divlarge);
							var min= 0;
							var max= 5;
							insertdivs(arr,min,max,divlarge);
							var div= document.createElement('div');
							div.id='loadMore';
							div.href='#';
							var para= document.createElement('p');
							para.id= 'content';
							para.textContent= 'Load More';
							div.appendChild(para);
							body.appendChild(div);
							div.addEventListener('click',function insertmoredivs(){
							if(Math.abs(max-arr.length)>=5)
							{
								min= min+5;
								max= max+5;
								insertdivs(arr,min,max,divlarge);
								console.log(min);
								console.log(arr.length);
							}
							else
							{
								insertdivs(arr,min,arr.length,divlarge);
								div.style.display= 'none';
							}
							},false);
							document.addEventListener('click', function(e) {
									e = e || window.event;
									var target = e.target || e.srcElement;
									var target0= target.nextElementSibling;
									var target_0= target0.id;
									target_0= '#'+ target_0;
									var target1= target0.nextElementSibling;
									var target_1= target1.id;
									target_1= '#'+ target_1;
									$(target_0).slideDown();
									$(target_1).slideDown();
								}, false);
							/*for(i=0;i<max;i++)
								{
									
									var uid= "posts"+i;
									console.log(uid);
									var div1= document.getElementById(uid); 
									console.log(div1);
									div1.addEventListener('click',function insertmoredivs2(){
										var x= "content" + i;
										var para= document.getElementById(x);
										para.style.display='block';
										var y= "userDetails"+ i;
										var para1= document.getElementById(y);
										para1.style.display='block';
									},false);
								}*/	
						}
				}
			xmlhttp.open("GET",("http://localhost/ChromeExtension/php/server.php?q=1"),true);
			xmlhttp.send();
			function insertdivs(arr,min,max,divlarge)
			{
						for(var i= min;i<max ;i++)
						{
							var div= document.createElement('div');
							div.id= 'posts'+ i ;
							div.className= 'posts';
							console.log(div);
							var array= arr[i].split('~');
							var para= document.createElement('p');
							para.id= 'title'+ i;
							para.className='title';
							para.textContent= array[1];
							div.appendChild(para);
							var para1= document.createElement('p');
							para1.id= 'content' + i;
							para1.className='content';
							para1.textContent= array[2];
							para1.style.display='none';
							div.appendChild(para1);
							var para2= document.createElement('p');
							if(array[4]==1)
							{
								array[0]= "Anonymous";
							}
							para2.id= 'userDetails' + i;
							para2.className='userDetails';
							para2.textContent= "Posted By: "+ array[0] + " , "+ array[3] + " ago ";
							para2.style.display='none';
							div.appendChild(para2);
							divlarge.appendChild(div);
						}
			}
		}