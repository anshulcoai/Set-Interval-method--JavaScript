setInterval(myclock,1000)
        function myclock()
        {
            t=new Date()
            document.getElementById("demo1").innerHTML= t.toLocaleTimeString()
        }

function go()
{
    a1=document.getElementById("loading_bar")
    a2=document.getElementById("para1")
    width=0
    setInterval(Bar, 10)
    function Bar()
    {
      if (width==100){
        clearInterval();
        a1.style.backgroundColor="red"
        a2.textContent="The Bar is full Now"
      }
      else{
        width++;
        a1.style.width= width + '%'
      }
    }
}        
        
function decrease()
{
  count=10
  d1=document.getElementById("para2")
  setInterval(dec,1000)
  function dec()
  {
    if(count==0)
    {
      document.getElementById('para2').innerHTML="Time's Up"
    }
    else{
    d1.innerHTML=count
    count--
    }
  }
}

function update()
{
  x1=document.getElementById("span1")
  setInterval(upd,2000)
  function upd()
  {
     z=parseInt(Math.random()*100+1)
     document.getElementById("span1").innerHTML=z
  }
}


function change()
{
  letters='0123456789ABCDEF'
  color = '#'
  for (i=0; i<6;i++){
    color +=letters[Math.floor(Math.random()*16)];
  }
  return color
}

function change_color()
{
  s2=document.getElementById("div2")
  s2.style.backgroundColor = change();
}
setInterval(change_color,500)
//


 count=0
function  message()
{
  if (count < 10)
  {
    document.getElementById("para3").innerHTML +="hello"
    count++
  }
  else{
    clearInterval(v)
  }
}
v=setInterval(message,1000)


setInterval(clock,1000)
function clock()
{
  d= new Date()
  document.getElementById("clock").innerHTML = d.toLocaleTimeString()
  document.getElementById("clock").style.fontSize="100px"
}
