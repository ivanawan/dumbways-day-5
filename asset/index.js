
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

let dataProject=[];
function addproject(){

  console.log(document.getElementsByName("techno"));

    dataProject.push({
        title:document.getElementById("title").value,
        image:URL.createObjectURL(document.getElementById("image").files[0]),
        autor:"ivan setiawan",
        date:new Date(),
        content:document.getElementById("content").value
    });

    // console.log(dataProject);
    renderPage();
}

function renderPage(){
    let blogContainer = document.getElementById('grid');

    blogContainer.innerHTML = '';

    dataProject.forEach((data,index)=>{
        blogContainer.innerHTML+=`<a href="detailproject.html" class="card-grid">
        <img src="${data.image}" alt="">
        <p class="title">${data.title}</p>
        <p class="durasi">Durasi : 3 bulan</p>
        <p class="deskripsi">${data.content}</p>
        <div class="tech">
            <i class="ri-attachment-2"></i>
            <i class="ri-attachment-2"></i>
            <i class="ri-attachment-2"></i>
        </div>
        <div style=" display: flex;">
        <button onclick="edit(${index})" class="butom-action" style="margin-right: 10px;">Edit</button>
        <button onclick="hapus(${index})" class="butom-action">Hapus</button>
        </div>
    </a>`
    })
  
}

function edit(index){
console.log(index);
}

function hapus(index){
    console.log(index);
}