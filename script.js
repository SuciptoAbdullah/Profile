const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

var json_data = {};

async function getData(){
    const json_path = 'data/data.json';
    const response = await fetch(json_path);
    const data = await response.json();
    json_data = data;
}

function setPendidikan(){
    const list_pendidikan = json_data['pendidikan'];

    $(".pendidikan").html(`<h2>Pendidikan</h2>`);

    for( let i=0; i < list_pendidikan.length; i++){
        const nama = list_pendidikan[i]['nama_pendidikan'];
        const jurusan = list_pendidikan[i]['jurusan'];
        const tahun_mulai = list_pendidikan[i]['tahun_mulai'];
        const tahun_selesai = list_pendidikan[i]['tahun_selesai'];

        const deskripsi = list_pendidikan[i]['deskripsi'];
        const pencapaian = list_pendidikan[i]['pencapaian'];

        const new_card =    `<div class="card pink">
                                <h3>${nama}</h3>
                                <p>${jurusan} (${tahun_mulai} - ${tahun_selesai})</p>
                            </div>`;
        
        $(".pendidikan").append(new_card);
    }
    
}

async function setData() {
    if(json_data == {}){
        console.log("failed to fetch data");
        throw error("failed to fetch data");
    }

    $(".nama").html(json_data['nama']);
    $(".rincian-info").html(json_data['rincian_info']);
    setPendidikan();
}

function main(){
    getData().then(response => setData());
    // setData();
}

main();
