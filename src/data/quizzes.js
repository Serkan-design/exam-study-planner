export const QUIZ_BANK = {
  // --- 📘 ALGORİTMALAR (1-5, 1-7) ---
  "1-5": [
    { q: "Aşağıdaki karmaşıklıklardan hangisi en hızlıdır?", a: ["O(n)", "O(log n)", "O(1)", "O(n²)"], c: 2 },
    { q: "İç içe 2 for döngüsü barındıran kodun karmaşıklığı nedir?", a: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"], c: 1 },
    { q: "Veri miktarından bağımsız olarak hep aynı sürede biten karmaşıklık hangisidir?", a: ["O(n)", "O(1)", "O(n!)", "O(2^n)"], c: 1 },
    { q: "O(log n) karmaşıklığı hangi arama yöntemiyle özdeşleşmiştir?", a: ["Linear Search", "Binary Search", "Random Search", "Deep Search"], c: 1 },
    { q: "Aşağıdakilerden hangisi en yavaş karmaşıklıktır?", a: ["O(n²)", "O(n!)", "O(n log n)", "O(n)"], c: 1 },
    { q: "Tek döngüden oluşan bir algoritmanın karmaşıklığı nedir?", a: ["O(n)", "O(n²)", "O(1)", "O(log n)"], c: 0 },
    { q: "Algoritma analizinde asimptotik üst sınırı gösteren notasyon hangisidir?", a: ["Big O", "Omega", "Theta", "Alpha"], c: 0 },
    { q: "n elemanlı bir dizide her elemana bir kez erişen kodun hızı nedir?", a: ["O(n)", "O(1)", "O(n²)", "O(log n)"], c: 0 },
    { q: "Karmaşıklık sıralaması hangisinde doğrudur?", a: ["O(1) < O(n) < O(n²)", "O(n²) < O(n) < O(1)", "O(n) < O(log n)", "O(log n) < O(1)"], c: 0 },
    { q: "Big O notasyonu neyi ifade eder?", a: ["En iyi senaryo", "En kötü senaryo", "Ortalama senaryo", "Sabit hız"], c: 1 }
  ],
  "1-7": [
    { q: "Selection Sort algoritmasının temel mantığı nedir?", a: ["Komşuları kıyaslar", "En küçüğü bulur başa koyar", "Rastgele seçer", "İndekslere böler"], c: 1 },
    { q: "Selection Sort'un zaman karmaşıklığı nedir?", a: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"], c: 2 },
    { q: "Bubble Sort'un en yavaş sıralama olmasının sebebi nedir?", a: ["Bellek yetersizliği", "Her adımda komşu kıyaslaması ve yer değiştirmesi", "Karışık olması", "Çok dizi kullanması"], c: 1 },
    { q: "Aşağıdakilerden hangisi bir sıralama (sorting) algoritması değildir?", a: ["Selection Sort", "Bubble Sort", "Quick Sort", "Linear Search"], c: 3 },
    { q: "Veri neredeyse sıralıysa en hızlı hangi sıralama çalışabilir?", a: ["Selection Sort", "Insertion Sort", "Bubble Sort", "Merge Sort"], c: 1 },
    { q: "Quick Sort'un ortalama karmaşıklığı nedir?", a: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], c: 1 },
    { q: "Merge Sort hangi yöntemi kullanır?", a: ["Böl ve Yönet (Divide and Conquer)", "LIFO", "Greedy", "FIFO"], c: 0 },
    { q: "Bubble Sort karmaşıklığı nedir?", a: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], c: 2 },
    { q: "Hangi sıralama algoritması dizi elemanlarını her adımda en küçüğü bularak sıralar?", a: ["Bubble", "Selection", "Merge", "Heap"], c: 1 },
    { q: "En kötü durumda performansı O(n log n) olan kararlı sıralama hangisidir?", a: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"], c: 1 }
  ],

  // --- 💻 İLERİ PROGRAMLAMA (2-2, 2-5) ---
  "2-2": [
    { q: "Managed Code (Yönetilen Kod) kime bağlıdır?", a: ["Windows", "CLR", "CPU", "RAM"], c: 1 },
    { q: "Bütün C# uygulamalarının giriş noktası hangisidir?", a: ["Init()", "Main()", "Start()", "Execute()"], c: 1 },
    { q: "JIT (Just In Time) derleyicisinin görevi nedir?", a: ["Hata bulmak", "MSIL kodu makine diline çevirmek", "Kod yazmak", "Veri silmek"], c: 1 },
    { q: "C# dilinde değişkeni sabit yapmak için ne kullanılır?", a: ["static", "const", "readonly", "fixed"], c: 1 },
    { q: ".NET kodunun platform bağımsız olmasını sağlayan ara dil hangisidir?", a: ["C++", "Assembly", "MSIL (CIL)", "Binary"], c: 2 },
    { q: "CLR nedir?", a: ["Veritabanı motoru", "Kodun yürütülmesini yöneten ortam", "Web sunucusu", "UI aracı"], c: 1 },
    { q: "C# dilinde blokları hiyerarşik gruplandıran yapı hangisidir?", a: ["Namespace", "Class", "Method", "Interface"], c: 0 },
    { q: "Garbage Collector ne yapar?", a: ["Hata ayıklar", "Boştaki belleği temizler", "Dosya saklar", "Virüs siler"], c: 1 },
    { q: "Aşağıdakilerden hangisi referans tipidir?", a: ["int", "bool", "string", "double"], c: 2 },
    { q: "C# ile .NET Core arasındaki ilişki nedir?", a: ["Farklı dillerdir", "C# dil, .NET Core platformdur", "İkisi de aynıdır", "Alakaları yoktur"], c: 1 }
  ],
  "2-5": [
    { q: "Sınıfın ismiyle aynı olan ve nesne oluşunca çalışan metot nedir?", a: ["Main", "Static", "Constructor (Yapıcı)", "Void"], c: 2 },
    { q: "Constructor metotlar değer döndürebilir mi?", a: ["Evet", "Hayır (Sadece void)", "Asla değer döndürmez", "Bazen"], c: 2 },
    { q: "Static bir metodu çağırmak için ne gerekir?", a: ["new anahtar kelimesi", "Class ismi üzerinden doğrudan erişim", "Instance oluşturmak", "Hiçbiri"], c: 1 },
    { q: "Veriyi korumak için get/set blokları kullanmaya ne denir?", a: ["Inheritance", "Encapsulation (Kapsülleme)", "Polymorphism", "Abstraction"], c: 1 },
    { q: "Bir metodun geri dönüş tipi yoksa ne yazılır?", a: ["null", "empty", "void", "none"], c: 2 },
    { q: "Nesne oluşturmak için kullanılan anahtar kelime hangisidir?", a: ["get", "set", "new", "this"], c: 2 },
    { q: "Hangi metotlar 'New' yapmadan çalışmaz?", a: ["Static", "Instance (Örnek) metotlar", "Main", "Constructor"], c: 1 },
    { q: "Method Overloading nedir?", a: ["Metot silmek", "Aynı isimli ama farklı parametreli metotlar", "Metot ismini değiştirmek", "Hata"], c: 1 },
    { q: "C#'ta bir sınıf kaç taneden fazla Interface alabilir?", a: ["0", "1", "Sınırsız", "2"], c: 2 },
    { q: "Property tanımlamak C#'ta ne sağlar?", a: ["Hızı", "Kapsülleme (Encapsulation)", "Beceriyi", "Görünüme"], c: 1 }
  ],

  // --- 🇬🇧 İNGİLİZCE (3-1, 3-2) ---
  "3-1": [
    { q: "'I am a student.' 'Me ____'", a: ["too", "either", "so", "neither"], c: 0 },
    { q: "'I am not tired.' 'Me ____'", a: ["too", "either", "so", "neither"], c: 1 },
    { q: "'Actually' ne zaman kullanılır?", a: ["Vedalaşırken", "Beklenmedik bir bilgi verirken", "Yalan söylerken", "Soru sorarken"], c: 1 },
    { q: "'Me too' olumsuz cümlede kullanılır mı?", a: ["Evet", "Hayır", "Sadece soruysa", "Zorunluysa"], c: 1 },
    { q: "'Would you mind' kalıbından sonra fiil ne alır?", a: ["to", "-ing", "-s", "-ed"], c: 1 },
    { q: "'Me either' Türkçesi nedir?", a: ["Ben de (Olumlu)", "Ben de (Olumsuz)", "Ben değil", "Aslında"], c: 1 },
    { q: "'Are you coming?' '____, I have to work.'", a: ["Too", "Actually", "Either", "Then"], c: 1 },
    { q: "Tanışırken 'How do you do?' diyene ne denir?", a: ["Fine thanks", "How do you do?", "Nice to meet you", "Hello"], c: 1 },
    { q: "'Me too' cümlesi hangi duruma uygundur?", a: ["I am hungry", "I am not hungry", "Are you hungry?", "Hungry"], c: 0 },
    { q: "Aslında/Gerçekten/Doğrusunu istersen anlamına gelen kelime hangisidir?", a: ["So", "Actually", "Either", "Too"], c: 1 }
  ],

  // --- 🗄️ VERİTABANI (4-4, 4-6) ---
  "4-3": [
    { q: "Tablodaki her bir satırı benzersiz yapan alan hangisidir?", a: ["Foreign Key", "Index", "Primary Key", "Attribute"], c: 2 },
    { q: "İlişkisel veri modelinin temel yapı taşı nedir?", a: ["Nesne", "Tablo (Relation)", "Ağaç", "Liste"], c: 1 },
    { q: "Primary Key alanı boş (null) bırakılabilir mi?", a: ["Evet", "Hayır", "Bazen", "Sadece stringse"], c: 1 },
    { q: "İlişkili iki tabloyu birbirine bağlayan alan nedir?", a: ["Primary Key", "Foreign Key", "Super Key", "Candidate Key"], c: 1 },
    { q: "Satırlara (Records) veri tabanı terminolojisinde ne denir?", a: ["Attribute", "Tuple", "Entity", "Relation"], c: 1 },
    { q: "Sütunlara veri tabanı terminolojisinde ne denir?", a: ["Relationship", "Tuple", "Attribute (Nitelik)", "Domain"], c: 2 },
    { q: "Veri tutarlılığını sağlamak için kullanılan anahtar hangisidir?", a: ["Foreign Key", "Index", "Primary Key", "Hepsi"], c: 3 },
    { q: "SQL'de veritabanı silmek için hangisi kullanılır?", a: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], c: 2 },
    { q: "Varlıkları tanımlayan her bir özelliğe (sütuna) ne ad verilir?", a: ["Domain", "Relation", "Attribute", "Key"], c: 2 },
    { q: "Tablo yapısını değiştirmek için hangi SQL komutu kullanılır?", a: ["UPDATE", "ALTER", "CHANGE", "MODIFY"], c: 1 }
  ],
  "4-6": [
    { q: "İki tabloda sadece kesişen/eşleşen kayıtları getiren JOIN hangisidir?", a: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], c: 2 },
    { q: "Sol tablonun tamamını, sağdan ise sadece eşleşenleri getiren JOIN hangisidir?", a: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "OUTER JOIN"], c: 1 },
    { q: "SUM, AVG, COUNT gibi fonksiyonlara ne ad verilir?", a: ["Scalar", "System", "Aggregate", "Logic"], c: 2 },
    { q: "Aggregate fonksiyonlar her zaman hangi komutla birlikte sorulur/kullanılır?", a: ["WHERE", "ORDER BY", "GROUP BY", "ON"], c: 2 },
    { q: "Tablo sorgularken şart belirtmek için ne kullanılır?", a: ["SELECT", "FROM", "WHERE", "GROUP BY"], c: 2 },
    { q: "Sorgu sonucunu küçükten büyüğe sıralamak için hangisi kullanılır?", a: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"], c: 0 },
    { q: "Bir gruptaki satır sayısını bulmak için hangi fonksiyon kullanılır?", a: ["SUM", "AVG", "COUNT", "MAX"], c: 2 },
    { q: "JOIN ile tabloları bağlarken kullanılan anahtar alanlar nerede belirtilir?", a: ["IN", "ON", "WITH", "BY"], c: 1 },
    { q: "Sağ tablonun tamamını getiren JOIN hangisidir?", a: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER"], c: 1 },
    { q: "Filtreleme (Where) vs Gruplama süzmesi (Having) farkı nedir?", a: ["Where gruptan önce, Having gruptan sonra çalışır", "İkisi de aynıdır", "Where sadece sayılara bakır", "Having sadece tablodur"], c: 0 }
  ],

  // --- 🌐 AĞ YÖNETİMİ (5-1, 5-4) ---
  "5-1": [
    { q: "OSI modeli kaç katmanlıdır?", a: ["4", "5", "7", "9"], c: 2 },
    { q: "IP adreslemesi OSI'nin hangi katmanında yapılır?", a: ["Physical", "Data Link", "Network (Ağ)", "Transport"], c: 2 },
    { q: "Kablo ve sinyal gibi fiziksel iletim hangi katmandadır?", a: ["Ağ", "Fiziksel", "Oturum", "Taşıma"], c: 1 },
    { q: "TCP ve UDP protokolleri hangi katmandadır?", a: ["Ağ", "Taşıma (Transport)", "Uygulama", "Sunum"], c: 1 },
    { q: "HTTP ve FTP hangi katmanda çalışır?", a: ["Fiziksel", "Ağ", "Uygulama", "Oturum"], c: 2 },
    { q: "IP adresi vs MAC adresi farkı nedir?", a: ["IP yazılımsal/dinamik, MAC donanımsal/statiktir", "Aynıdır", "MAC daha hızlıdır", "IP sadece internete özeldir"], c: 0 },
    { q: "MAC adresi kaç katmanda çalışır?", a: ["Katman 1", "Katman 2 (Veri Bağlantı)", "Katman 3", "Katman 7"], c: 1 },
    { q: "Verinin 'Segment'lere bölündüğü katman hangisidir?", a: ["Ağ", "Taşıma", "Sunum", "Oturum"], c: 1 },
    { q: "Router'lar hangi katmanda çalışır?", a: ["Katman 1", "Katman 2", "Katman 3 (Ağ)", "Katman 4"], c: 2 },
    { q: "Hata kontrolü ve akış denetimi yapan katman hangisidir?", a: ["Fiziksel", "Veri Bağlantı", "Taşıma", "B ve C"], c: 3 }
  ],
  "5-4": [
    { q: "Aşağıdakilerden hangisi bir ağ yönetimi protokolüdür?", a: ["HTTP", "SNMP", "TCP", "DNS"], c: 1 },
    { q: "SNMP mimarisinde yönetilen cihazlara ne denir?", a: ["Manager", "Agent", "Router", "Switch"], c: 1 },
    { q: "HTTP portu nedir?", a: ["21", "80", "443", "22"], c: 1 },
    { q: "HTTPS portu nedir?", a: ["80", "443", "53", "110"], c: 1 },
    { q: "FTP portu nedir?", a: ["21", "22", "23", "25"], c: 0 },
    { q: "DNS ne yapar?", a: ["Sorgu yapar", "IP adresini alan ismine (domain) çevirir", "Dosya indirir", "Mail gönderir"], c: 1 },
    { q: "SSH (Secure Shell) portu hangisidir?", a: ["21", "22", "23", "25"], c: 1 },
    { q: "SNMP portu hangisidir?", a: ["161", "162", "A ve B", "80"], c: 2 },
    { q: "Portlar hangi katmana aittir?", a: ["Ağ", "Taşıma (Transport)", "Fiziksel", "Sunum"], c: 1 },
    { q: "A sınıfı IP aralığı hangi sayı ile başlar?", a: ["1-126", "128-191", "192-223", "224-239"], c: 0 }
  ],

  // --- 🇹🇷 TARİH (9-1, 9-6) ---
  "9-1": [
    { q: "Lozan Konferansı'na gönderilen Türk delegasyonu başkanı kimdir?", a: ["Mustafa Kemal", "İsmet İnönü", "Rauf Orbay", "Fevzi Çakmak"], c: 1 },
    { q: "Lozan'da taviz verilmeyen ana konu hangisidir?", a: ["Borçlar", "Kapitülasyonlar", "Adalar", "Hatay"], c: 1 },
    { q: "Lozan Antlaşması hangi tarihte imzalanmıştır?", a: ["24 Temmuz 1923", "1922", "1924", "1920"], c: 0 },
    { q: "Lozan'da sınır dışı bırakılan tek mesele (Hatay hariç) hangisidir?", a: ["Azınlıklar", "Musul", "Boğazlar", "Borçlar"], c: 1 },
    { q: "Lozan'da bütün azınlıklar ne sayılmıştır?", a: ["Ayrıcalıklı", "Türk vatandaşı", "Mülteci", "Sürgün"], c: 1 },
    { q: "Boğazlar sorunu Lozan'da nasıl çözüldü?", a: ["Türkiye'ye verildi", "İşgal edildi", "Komisyona bırakıldı", "Kapatıldı"], c: 2 },
    { q: "Osmanlı borçları Lozan'da nasıl ödenecektir?", a: ["Tek seferde", "Paylara bölünerek (Kağıt para ile)", "Altın ile", "Dolar ile"], c: 1 },
    { q: "Kapitülasyonlar ne oldu?", a: ["Kaldırıldı", "Zaman verildi", "Devam etti", "Fransa'ya özel kaldı"], c: 0 },
    { q: "Nüfus Mübadelesi kimlerle yapıldı?", a: ["Rusya", "İtalya", "Yunanistan", "Bulgaristan"], c: 2 },
    { q: "Lozan Barış Konferansı nerede toplanmıştır?", a: ["Türkiye", "İsviçre", "İngiltere", "Fransa"], c: 1 }
  ],
  "9-6": [
    { q: "Soru kökünde 'yenilik' veya 'çağdaşlaşma' varsa cevap hangisidir?", a: ["Cumhuriyetçilik", "İnkılapçılık", "Laiklik", "Milliyetçilik"], c: 1 },
    { q: "Laiklik ilkesinin dayanağı nedir?", a: ["Din", "Akıl ve Bilim", "Gelenek", "Siyaset"], c: 1 },
    { q: "Cumhuriyetçilik neyi temel alır?", a: ["Tek kişi yönetimini", "Meclis ve Halk iradesini", "İnancı", "Savaşı"], c: 1 },
    { q: "Halkçılık ilkesi neyi savunur?", a: ["Sınıf mücadelesini", "Fırsat eşitliği ve yasalar önünde eşitliği", "Yabancı sermayeyi", "Kapitülasyonları"], c: 1 },
    { q: "Milliyetçilik ilkesine göre kim 'Türk'tür?", a: ["Sadece belirli bir ırk", "T.C. vatandaşı olan ve kendini Türk hisseden herkes", "Asyalılar", "Müslümanlar"], c: 1 },
    { q: "Devletçilik ilkesi neden uygulanmıştır?", a: ["Savaş için", "Zorunluluktan (Sermaye yetersizliğinden)", "Moda olduğu için", "Hiçbiri"], c: 1 },
    { q: "Hangi ilke statükoyu reddeder ve sürekli değişimi savunur?", a: ["Halkçılık", "İnkılapçılık", "Milliyetçilik", "Laiklik"], c: 1 },
    { q: "Şapka İnkılabı hangi ilkeyle en çok bağlantılıdır?", a: ["İnkılapçılık", "Halkçılık", "Laiklik", "Hepsi"], c: 3 },
    { q: "Ölçü ve tartı birimlerinin değiştirilmesi hangi alandaki inkılaptır?", a: ["Hukuk", "Siyasi", "Sosyal/Ekonomik", "Askeri"], c: 2 },
    { q: "Millet mekteplerinin açılması hangi ilkeyle alakalıdır?", a: ["Halkçılık", "Milliyetçilik", "İnkılapçılık", "Hepsi"], c: 3 }
  ],

  // --- ✍️ TÜRK DİLİ (10-2, 10-6) ---
  "10-2": [
    { q: "Resmi yazışmalarda üst makama yazılan dilekçe sonu nasıl biter?", a: ["Rica ederim", "Gereğini bilgilerinize arz ederim", "Selamlar", "Saygılar"], c: 1 },
    { q: "Resmi yazışmalarda alt makama yazılan yazı sonu nasıl biter?", a: ["Arz ederim", "Rica ederim", "Gereğini rica ederim", "B ve C"], c: 3 },
    { q: "Dilekçede isim ve imza nereye atılır?", a: ["Üst tarafa", "Sağ alt köşeye", "Sol alt köşeye", "Ortaya"], c: 1 },
    { q: "İmza mı önce atılır, isim mi önce yazılır?", a: ["İsim-İmza", "İmza üste, isim alta", "Rastgele", "İsim yeterli"], c: 1 },
    { q: "Anlatım bozukluklarında 'gereksiz sözcük kullanımı' neye girer?", a: ["Yapısal", "Anlamsal", "Mantıksal", "Geleneksel"], c: 1 }
  ],

  "default": [
    { q: "AÖF vize ve final sınavları genellikle kaç soru olur?", a: ["10", "20", "30", "50"], c: 1 },
    { q: "Dersi geçmek için gereken harf notu sınırı (CC) genellikle kaçtır?", a: ["30", "35", "50", "60"], c: 1 },
    { q: "Mezuniyet için genel not ortalaması (GNO) en az kaç olmalıdır?", a: ["1.50", "2.00", "2.50", "3.00"], c: 1 }
  ]
};
