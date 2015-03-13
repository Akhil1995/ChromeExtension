		{
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			} 
			else {  // code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
						xmlhttp.onreadystatechange=function() {
						if (xmlhttp.readyState==4 && xmlhttp.status==200) {
							var arr= (xmlhttp.responseText).split("$");
							console.log(xmlhttp.responseText);
							var body=document.getElementsByTagName('body')[0];
							console.log(arr[1]);
							for(var i=0;i<arr.length;i++){
								var div= document.createElement('div');
								div.id= 'posts';
								div.addClass= 'posts';
								var array= arr[i].split('~');
									var para= document.createElement('p');
									para.id= 'title';
									para.addClass='title';
									para.textContent= array[1];
									div.appendChild(para);
									var para1= document.createElement('p');
									para1.id= 'content';
									para1.addClass='content';
									para1.textContent= array[2];
									div.appendChild(para1);
									var para2= document.createElement('p');
									para2.id= 'userDetails';
									para2.addClass='userDetails';
									para2.textContent= "Posted By: "+ array[0] + " , "+ array[3] + " ago ";
									div.appendChild(para2);
								body.appendChild(div);
							}
						}
				}
			xmlhttp.open("GET",("http://localhost/ChromeExtension/php/server.php?q=1"),true);
			xmlhttp.send();
		}