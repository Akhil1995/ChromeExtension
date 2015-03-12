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
							var body=document.getElementsByTagName('body')[0];
							var tbl=document.createElement('table');
							tbl.style.width='100%';
							tbl.setAttribute('border','1');
							var tbdy=document.createElement('tbody');
							for(var i=0;i<arr.length;i++){
								var tr=document.createElement('tr');
								var array= arr[i].split('~');
								for(var j=0;j<array.length;j++){
									if(i==arr.length-1 && j==array.length){
											break
											 } else {
									var td=document.createElement('td');
									td.appendChild(document.createTextNode(array[j]))
									tr.appendChild(td)
									}
								}
								tbdy.appendChild(tr);
							}
							tbl.appendChild(tbdy);
							body.appendChild(tbl);
						}
				}
			xmlhttp.open("GET",("http://localhost/ChromeExtension/server.php?q=1"),true);
			xmlhttp.send();
			function tableCreate(xxx){
				var arr= xxx.split("$");
				var array= arr[i].split('~');
				var body=document.getElementsByTagName('body')[0];
				var tbl=document.createElement('table');
				tbl.style.width='100%';
				tbl.setAttribute('border','1');
				var tbdy=document.createElement('tbody');
				for(var i=0;i<arr.length;i++){
					var tr=document.createElement('tr');
					for(var j=0;j<array.length;j++){
						if(i==arr.length-1 && j==array.length-1){
								break
								 } else {
						var td=document.createElement('td');
						td.appendChild(document.createTextNode(array[j]))
						tr.appendChild(td)
						}
					}
					tbdy.appendChild(tr);
				}
				tbl.appendChild(tbdy);
				body.appendChild(tbl);
			}
		}