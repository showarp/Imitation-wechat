ssk=document.getElementById('ssk')
rt3=document.getElementById('rt3')
ssk.onfocus=function(){
	fdj.style.background='white'
	ssk.placeholder=''
	ssk.style.background='white'
	ssk.style.borderRadius='1px solid red'
}
ssk.onblur=function(){
	ssk.placeholder='搜索'
	fdj.style.background='#DBD9D8'
	ssk.style.background='#DBD9D8'
	
}
text=document.getElementById('text')
text.onfocus=function(){
	rt3.style.background='white'
}
text.onblur=function(){
	rt3.style.background='#F5F5F5'
}
//焦点事件
