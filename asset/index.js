const month=["Januari","Febuary","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];



function submit(){
    let {name,email,number,subject,message}="";
    name    = document.getElementById('name').value;
    email   = document.getElementById('email').value;
    number  = document.getElementById('number').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('messege').value;
    
    // console.log(typeof number);

    if(!isNaN(name)){
        window.alert("name should not number");
    }

    if(isNaN(number)){
        window.alert("number phone must be  number");
    }

    let mail = document.createElement('a');
    mail.href=`mailto:${email}?subject=${subject}&body=hay, my name ${name}, ${subject}, ${message}`;
    mail.click();
}



let listProject=[];

if(localStorage.getItem('listProject') != null){
    listProject=JSON.parse(localStorage.getItem('listProject'));
}

function addproject(){
 var textinputs = document.querySelectorAll('input[type=checkbox]:checked'); 
 let checkbox=[];

 let dateStart=new Date(document.getElementById("date-start").value);
 let dateEnd=new Date(document.getElementById("date-end").value);
 let duration =difference(dateStart, dateEnd);
 let date = `${dateStart.getDate()} ${month[dateStart.getMonth()]} ${dateStart.getFullYear()} - ${dateEnd.getDate()} ${month[dateEnd.getMonth()]} ${dateEnd.getFullYear()}`;
//  console.log(date);

  textinputs.forEach(el => {
      checkbox.push(el.value);
  });

    listProject.push({
        title:document.getElementById("title").value,
        image:URL.createObjectURL(document.getElementById("image").files[0]),
        autor:"ivan setiawan",
        duration:duration<30 ? duration+" hari" : parseInt(duration/30)+" bulan",
        date: date,
        checkbox: checkbox,
        content:document.getElementById("content").value
    });

    localStorage.setItem('listProject', JSON.stringify(listProject));
    renderPage();
}

function renderPage(){
    // console.log(listProject);

    let scriptHtml='';
    listProject.forEach((data,index)=>{
        scriptHtml +=`<a href="detailproject.html" onclick="getId(${index})" class="card-grid">
        <img src="${data.image}" alt="">
        <p class="title">${data.title}</p>
        <p class="durasi">Durasi : ${data.duration}</p>
        <p class="deskripsi">${data.content.substring(0, 20)}</p>
        <div class="tech">
            ${data.checkbox.toString().replaceAll(',',' ')}
        </div>
        <div style=" display: flex;">
        <button onclick="edit(${index})" class="butom-action" style="margin-right: 10px;">Edit</button>
        <button onclick="hapus(${index})" class="butom-action">Hapus</button>
        </div>
    </a>`
    });
    // console.log(scriptHtml);
    document.getElementById('grid').innerHTML=scriptHtml;
}

function getId(id){
    localStorage.setItem("id",id);
}

function renderPageDetail(){
 const item =listProject[localStorage.getItem("id")];
 document.getElementById('title').innerHTML =item.title;
//  document.getElementById('image').src =item.image;
document.getElementById('date').innerHTML=item.date;
document.getElementById('duration').innerHTML=item.duration;
document.getElementById('content').innerHTML=item.content;
document.getElementById('teknologi').innerHTML=item.checkbox.toString().replaceAll(',',' ');
}

function edit(index){
console.log(index);
}

function hapus(index){
    console.log(index);
}




function difference(date1, date2) {  
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
      day = 1000*60*60*24;
    return(date2utc - date1utc)/day
}

