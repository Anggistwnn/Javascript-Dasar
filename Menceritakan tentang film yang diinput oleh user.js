var item = prompt('Masukan Film / Series favotitmu!(cth: Breaking Bad, Better Call Saul, Blank Mirror, Interstellar)');

switch (item) {

    case 'Breaking Bad':
        alert('Breaking Bad adalah serial TV Amerika bertema drama kejahatan, ditulis dan diproduksi oleh Vince Gilligan. Acara ini disiarkan AMC selama 5 musim, dari 20 Januari 2008 sampai 29 September 2013. Src:Wikipedia');
        break;

    case 'Better Call Saul':
        alert('Better Call Saul adalah seri drama televisi Amerika Serikat yang dibuat oleh Vince Gilligan dan Peter Gould. Seri ini merupakan turunan dari Breaking Bad yang juga dibuat oleh Gilligan.[1] Berlatar tahun 2002, Better Call Saul berkisah tentang seorang pengacara bernama James "Jimmy" McGill (Bob Odenkirk) enam tahun sebelum tampil di Breaking Bad; seri ini juga menjelajahi peristiwa selama dan sesudah era Breaking Bad. Src:Wikipedia');
        break;

    case 'Black Mirror':
        alert('Black Mirror adalah seri antologi televisi Britania Raya besutan Charlie Brooker yang menceritakan kisah fiksi spekulatif dengan tema gelap dan satir mengenai masyarakat modern, terutama dampak buruk teknologi canggih. Seri ini diproduksi oleh Zeppotron untuk Endemol. Src:Wikipedia')
        break;

    case 'Interstellar':
        alert('Interstellar adalah film fiksi ilmiah epos tahun 2014 yang disutradarai oleh Christopher Nolan dan diproduseri oleh Emma Thomas, Christopher Nolan dan Lynda Obst. Naskah film ini ditulis oleh Jonathan Nolan dan Christopher Nolan. Film ini dibintangi Matthew McConaughey, Anne Hathaway, Jessica Chastain dan Michael Caine. Filmnya bercerita tentang sekelompok astronaut yang menuju lubang cacing dekat Saturnus untuk mencari planet baru yang mampu merumahi manusia, ditengah era distopia. Src:Wikipedia')
        break;

    default:
        alert('Anda memasukan nama Film / Series yang salah!')
        break;
}