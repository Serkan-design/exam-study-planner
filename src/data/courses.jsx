import React from 'react';
import { Code, Languages, ShieldCheck, Shield, Database, Cpu, BarChart, History, FileText, Network } from 'lucide-react';

export const UNIVERSITY = "ANADOLU ÜNİVERSİTESİ";
export const DEPARTMENT = "Bilgisayar Programcılığı - AÖF";
export const VIZE_DATE = "2026-04-04T09:00:00";

export const TOTAL_UNITS = 14;
export const VIZE_UNITS = 7;

export const ALL_COURSES = [
  { id: 1, name: "ALGORİTMALAR VE PROGRAMLAMA", icon: <Cpu size={22}/>, color: "blue" },
  { id: 2, name: "İLERİ PROGRAMLAMA I", icon: <Code size={22}/>, color: "indigo" },
  { id: 3, name: "İNGİLİZCE II", icon: <Languages size={22}/>, color: "emerald" },
  { id: 4, name: "VERİTABANI SİSTEMLERİ", icon: <Database size={22}/>, color: "cyan" },
  { id: 5, name: "AĞ YÖNETİMİ VE BİLGİ GÜVENLİĞİ", icon: <Shield size={22}/>, color: "red" },
  { id: 6, name: "VERİTABANI PROGRAMLAMA", icon: <Database size={22}/>, color: "orange" },
  { id: 7, name: "VERİ MADENCİLIĞİ", icon: <BarChart size={22}/>, color: "purple" },
  { id: 8, name: "WEB'DE TELİF HAKLARI VE ETİK", icon: <ShieldCheck size={22}/>, color: "teal" },
  { id: 9, name: "ATATÜRK İLKELERİ VE İNKILAP TARİHİ II", icon: <History size={22}/>, color: "amber" },
  { id: 10, name: "TÜRK DİLİ II", icon: <FileText size={22}/>, color: "rose" }
];

export const UNIT_TITLES = {
  // 1: ALGORİTMALAR
  "1-1": "Algoritma Kavramı ve Programlama Temelleri",
  "1-2": "Diziler, Bağlı Listeler, Kuyruklar ve Yığınlar",
  "1-3": "Diziler, Bağlı Listeler, Kuyruklar ve Yığınlar II",
  "1-4": "Algoritma Analizi I",
  "1-5": "Algoritma Analizi II (Big O)",
  "1-6": "Arama Algoritmaları",
  "1-7": "Sıralama Algoritmaları",

  // 2: İLERİ PROGRAMLAMA I
  "2-1": "Algoritma ve Programlamaya Giriş",
  "2-2": ".NET Core ve C# Programlama",
  "2-3": "Değişkenler ve Veri Türleri",
  "2-4": "Operatörler, Akış Kontrol ve Diziler",
  "2-5": "Metotlar ve Matematik Sınıfı",
  "2-6": "Collection ve String Sınıfları",
  "2-7": "Dosya Giriş ve Çıkış İşlemleri",

  // 3: İNGİLİZCE II
  "3-1": "Making Friends",
  "3-2": "Interests",
  "3-3": "Health",
  "3-4": "Celebrations",
  "3-5": "Growing Up",
  "3-6": "Around Town",
  "3-7": "Going Away",

  // 4: VERİTABANI SİSTEMLERİ
  "4-1": "Veritabanı Sistemlerinin Temelleri",
  "4-2": "Veritabanı Tasarımı",
  "4-3": "İlişkisel Veritabanı Modeli",
  "4-4": "Masaüstü Veritabanı Sistemleri",
  "4-5": "SQL İle Veritabanı Tasarımı (DDL)",
  "4-6": "SQL İle Veritabanı Sorgulama (DML)",
  "4-7": "Veri İşleme ve Modeller",

  // 5: AĞ YÖNETİMİ
  "5-1": "Bilgisayar Ağlarına Genel Bakış I",
  "5-2": "Bilgisayar Ağlarına Genel Bakış II",
  "5-3": "Ağ Yönetimi ve SNMP I",
  "5-4": "Ağ Yönetimi ve SNMP II",
  "5-5": "Simetrik Şifreleme ve Mesaj Gizliliği I",
  "5-6": "Simetrik Şifreleme ve Mesaj Gizliliği II",
  "5-7": "Açık Anahtar Şifreleme ve Mesaj Doğrulama",

  // 6: VERİTABANI PROGRAMLAMA
  "6-1": "Veritabanı Programlamaya Giriş",
  "6-2": "T-SQL Programlama I",
  "6-3": "T-SQL Programlama II",
  "6-4": "Saklı Yordam ve Fonksiyon Kullanımı I",
  "6-5": "Saklı Yordam ve Fonksiyon Kullanımı II",
  "6-6": "Kısıtlayıcı ve Tetikleyiciler",
  "6-7": "Görünüm (View) ve Gelişmiş T-SQL",

  // 7: VERİ MADENCİLIĞI
  "7-1": "Veri Madenciliğine Giriş ve Temel Kavramlar",
  "7-2": "R Yazılımı İle Veri Madenciliği",
  "7-3": "Veri Ön İşleme ve Hazırlama",
  "7-4": "Benzerlik ve Uzaklık Ölçüleri",
  "7-5": "Sınıflandırma Algoritmaları - Karar Ağaçları",
  "7-6": "Birliktelik Kuralları ve Apriori",
  "7-7": "Kümeleme Analizi - k-Means",

  // 8: WEB ETİK
  "8-1": "Fikri Mülkiyet Haklarının Genel Esasları",
  "8-2": "Telif Hakkı Korumasının Tanımı ve Sınırları",
  "8-3": "Web'de Telif Hakları",
  "8-4": "Bilişim Suçları ve İnternet Etiği",
  "8-5": "Kişisel Verilerin Korunması ve Mahremiyet",
  "8-6": "Siber Suçlarla Mücadele",
  "8-7": "Dijital Hak Yönetimi (DRM)",

  // 9: TARİH
  "9-1": "Lozan Barış Antlaşması ve Cumhuriyet",
  "9-2": "Siyasi Alanda İnkılaplar",
  "9-3": "Cumhuriyet Döneminde Temel Politikalar",
  "9-4": "Siyasi İnkılaplara Yapılan Muhalefet",
  "9-5": "Halkevleri ve Kültür Çalışmaları",
  "9-6": "Atatürk İlkeleri (Laiklik, Devletçilik...)",
  "9-7": "Atatürk Dönemi Türk Dış Politikası",

  // 10: TÜRK DİLİ
  "10-1": "Yazılı ve Sözlü Anlatım Türlerine Giriş",
  "10-2": "Resmî Yazışma Kuralları (Dilekçe, Arz-Rica)",
  "10-3": "Bilimsel Araştırma Süreci ve Kaynak Gösterme",
  "10-4": "Nesnel-Eleştirel Yazılı Anlatım Türleri",
  "10-5": "Yazılı Anlatım Türleri I (Makale, Fıkra)",
  "10-6": "Yazılı Anlatım Türleri II (Anı, Gezi Yazısı)",
  "10-7": "Anlatım Bozuklukları ve Giderilmesi"
};

export const UNIT_DETAILS = {};

// DATA SOURCE FOR UNIT SUMMARIES
const COURSE_CONTENT = {
  1: { // ALGORİTMALAR
    1: "- **Algoritma:** Bir problemi çözmek için izlenen mantıksal yol.\n- **Sözde Kod (Pseudo-code):** Programlama dili olmayan, insan diline yakın anlatım.\n- **Akış Diyagramı:** Algoritmanın görselleştirilmesi (Elips: Başla/Bitir, Dikdörtgen: İşlem, Baklava Dilimi: Karar).",
    2: "- **Dizi (Array):** Aynı tip verilerin bellekte ardışık tutulması.\n- **Bağlı Liste (Linked List):** Bellekte dağınık tutulan, işaretçilerle (pointer) birbirine bağlanan veri yapısı.\n- **Kuyruk (Queue):** FIFO (İlk giren ilk çıkar) prensibi.",
    3: "- **Yığın (Stack):** LIFO (Son giren ilk çıkar) prensibi.\n- **Push & Pop:** Yığına ekleme ve çıkarma işlemleri.\n- **Uygulama Alanları:** Fonksiyon çağrıları, geri al (undo) işlemleri.",
    4: "- **Zaman Karmaşıklığı:** Algoritmanın çalışma süresinin giriş verisi (n) boyutuna göre değişimi.\n- **Alan Karmaşıklığı:** Algoritmanın ihtiyaç duyduğu bellek miktarı.\n- **En İyi, Ortalama ve En Kötü Durum Analizi.**",
    5: "- **Big O Notasyonu:** $O(1)$ Sabit, $O(n)$ Doğrusal, $O(n^2)$ Karesel zaman.\n- **Sıralama Karşılaştırması:** $O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2)$.\n- **Örnek:** Tek döngü $O(n)$, iç içe iki döngü $O(n^2)$.",
    6: "- **Sıralı Arama (Linear Search):** Tüm elemanlara sırayla bakılır ($O(n)$).\n- **İkili Arama (Binary Search):** Liste sıralı olmalıdır. Her adımda arama alanı yarıya indirilir ($O(\log n)$).",
    7: "- **Bubble Sort:** Komşu elemanlar kıyaslanır, yer değiştirilir.\n- **Insertion Sort:** Her eleman uygun yerine yerleştirilir.\n- **Quick Sort:** Pivot elemana göre bölme işlemi yapılır ($O(n \log n)$)."
  },
  2: { // İLERİ PROGRAMLAMA I
    1: "- **C# ve .NET:** Microsoft tarafından geliştirilen nesne yönelimli platform.\n- **Derleme Süreci:** Kod -> MSIL (Ara Dil) -> CLR (Çalışma Zamanı) -> Makine Kodu.\n- **Özellikler:** Tip güvenliği, otomatik bellek yönetimi (Garbage Collection).",
    2: "- **Namespace:** Sınıfları gruplandırmak için kullanılır.\n- **Main Metodu:** Programın giriş noktasıdır.\n- **using:** İlgili kütüphaneleri projeye dahil eder.",
    3: "- **Değer Tipleri:** int, double, bool, char (Stack'te tutulur).\n- **Referans Tipleri:** string, class, array (Heap'te tutulur).\n- **Boxing & Unboxing:** Değer tipinin referans tipine dönüştürülmesi ve tersi.",
    4: "- **Kontrol Yapıları:** if-else, switch-case.\n- **Döngüler:** for, while, do-while, foreach.\n- **Diziler:** `int[] sayilar = new int[5];` şeklinde tanımlanır.",
    5: "- **Sınıf (Class):** Nesnenin taslağıdır.\n- **Nesne (Object):** Sınıftan türetilen canlı örnektir.\n- **Erişim Belirleyiciler:** public, private, protected, internal.",
    6: "- **Kapsülleme (Encapsulation):** Veriyi koruma, property (get/set) kullanımı.\n- **Kalıtım (Inheritance):** Bir sınıfın özelliklerini başka bir sınıfa aktarması.",
    7: "- **Çok Biçimlilik (Polymorphism):** Aynı metodun farklı sınıflarda farklı davranması.\n- **Soyutlama (Abstraction):** Interface ve Abstract class kullanımı."
  },
  3: { // İNGİLİZCE II
    1: "- **Meeting People:** Greeting expressions (How is it going?, Long time no see).\n- **Auxiliary Verbs:** Do/Does in simple present questions.\n- **Vocabulary:** Personality adjectives (outgoing, shy, creative).",
    2: "- **Interests:** Expressing likes and dislikes (I'm into..., I can't stand...).\n- **Verb + -ing:** Enjoy, like, hate often take gerunds.\n- **Frequency Adverbs:** Always, usually, sometimes, never.",
    3: "- **Health:** Giving advice with 'Should/Shouldn't'.\n- **Symptoms:** Headache, sore throat, fever.\n- **Modal Verbs:** Can/May for permission and possibility.",
    4: "- **Celebrations:** Special days (Anniversary, Graduation, Wedding).\n- **Quantifiers:** Some, any, a lot of, much, many.\n- **Invitations:** 'Would you like to...?', 'How about...?'",
    5: "- **Growing Up:** Past tense (was/were, regular/irregular verbs).\n- **Used To:** Talking about past habits that no longer exist.\n- **Milestones:** Born, started school, graduated.",
    6: "- **Around Town:** Prepositions of place (next to, opposite, between).\n- **Giving Directions:** Go straight, turn left, take the second exit.\n- **Public Places:** Library, pharmacy, post office.",
    7: "- **Going Away:** Future plans with 'Be going to'.\n- **Travel Vocabulary:** Passport, ticket, baggage, departure.\n- **Predictions:** Using 'Will' for spontaneous decisions or guesses."
  },
  4: { // VERİTABANI SİSTEMLERİ
    1: "- **Veritabanı (DB):** Yapılandırılmış veriler topluluğu.\n- **VTYS (DBMS):** Veritabanını yöneten yazılım (SQL Server, Oracle).\n- **Veri Modelleri:** Hiyerarşik, Ağ ve İlişkisel model.",
    2: "- **Varlık-İlişki Modeli (ER):** Varlıklar (Entities), Nitelikler (Attributes) ve İlişkiler (Relationships).\n- **Anahtarlar:** Primary Key (Birincil), Foreign Key (Yabancı).",
    3: "- **İlişkisel Cebir:** Seçme, İzdüşüm, Birleştirme (Join) işlemleri.\n- **Kısıtlamalar:** Not Null, Unique, Check, Default.",
    4: "- **Normalizasyon:** Veri tekrarını önleme (1NF, 2NF, 3NF).\n- **Veri Bütünlüğü:** Nesne, Referans ve Alan bütünlüğü.",
    5: "- **SQL (DDL):** Veri Tanımlama Dili (CREATE, ALTER, DROP).\n- **Veritabanı Oluşturma:** Dosya grupları ve log dosyası mantığı.",
    6: "- **SQL (DML):** Veri İşleme Dili (SELECT, INSERT, UPDATE, DELETE).\n- **Sorgulama:** WHERE, ORDER BY, GROUP BY kullanımı.",
    7: "- **Birleştirmeler (JOINS):** INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN farkları."
  },
  5: { // AĞ YÖNETİMİ
    1: "- **OSI Modeli:** 7 katman (Fiziksel, Veri Bağı, Ağ, İletim, Oturum, Sunum, Uygulama).\n- **Topolojiler:** Yıldız, Bus, Ring, Mesh.",
    2: "- **TCP/IP:** İnternetin temel protokol takımı.\n- **Protokoller:** HTTP (80), FTP (21), SSH (22), SMTP (25).",
    3: "- **Ağ Yönetimi:** Performans, Hata, Güvenlik ve Konfigürasyon yönetimi.\n- **SNMP:** Basit Ağ Yönetim Protokolü. Agent ve Manager yapısı.",
    4: "- **IP Adresleme:** IPv4 (32 bit) ve IPv6 (128 bit) farkları.\n- **Alt Ağ Maskesi (Subnetting):** Ağları bölme işlemi.",
    5: "- **Bilgi Güvenliği Temelleri:** Gizlilik (Confidentiality), Bütünlük (Integrity), Erişilebilirlik (Availability) - G-B-E üçlüsü.",
    6: "- **Şifreleme:** Simetrik (AES, DES) ve Asimetrik (RSA, ECC) şifreleme.\n- **Hash Fonksiyonları:** Veri bütünlüğü doğrulama (MD5, SHA).",
    7: "- **Güvenlik Sistemleri:** Güvenlik Duvarı (Firewall), Saldırı Tespit Sistemi (IDS/IPS), VPN."
  },
  6: { // VERİTABANI PROGRAMLAMA
    1: "- **T-SQL:** Microsoft SQL Server'a özgü SQL genişletmesi.\n- **Değişken Tanımlama:** `DECLARE @Degisken ADI INT;` şeklinde yapılır.\n- **Atama:** `SET` veya `SELECT` ile yapılır.",
    2: "- **Akış Kontrolü:** BEGIN-END, IF-ELSE, WHILE döngüsü.\n- **CASE Yapısı:** Sorgu içinde mantıksal kontrol.",
    3: "- **Fonksiyonlar:** Skaler ve Tablo döndüren fonksiyonlar.\n- **Dahili Fonksiyonlar:** Metinsel, Tarihsel ve Matematiksel fonksiyonlar.",
    4: "- **Saklı Yordamlar (Stored Procedures):** Sunucuda saklanan, parametre alabilen kod blokları.\n- **Avantajlar:** Performans artışı, trafik azalması ve güvenlik.",
    5: "- **Hata Yönetimi:** TRY-CATCH blokları ile SQL hatalarını yakalama.\n- **@@ERROR:** Son komutun hata kodunu döner.",
    6: "- **Tetikleyiciler (Triggers):** INSERT, UPDATE, DELETE gibi işlemler sonrası otomatik çalışan kodlar.\n- **Inserted & Deleted Tabloları:** Tetikleyici içinde otomatik oluşan geçici tablolar.",
    7: "- **Görünümler (Views):** Karmaşık SELECT sorgularını tek bir isim altında toplama (Sanal Tablo)."
  },
  7: { // VERİ MADENCİLIĞI
    1: "- **KDD Süreci:** Veri Temizleme, Entegrasyon, Seçme, Dönüştürme, Madencilik ve Değerlendirme.\n- **Veri Tipleri:** Nominal, Ordinal, Interval, Ratio.",
    2: "- **Veri Ön İşleme:** Gürültülü veriyi düzeltme, eksik verileri tamamlama.\n- **Normalizasyon:** Veriyi belirli bir aralığa (örn. 0-1) çekme.",
    3: "- **Boyut İndirgeme:** Öznitelik seçimi ve Temel Bileşen Analizi (PCA).\n- **Aykırı Değer Analizi:** Box plot ve Z-skoru kullanımı.",
    4: "- **Benzerlik Ölçüleri:** Öklid Uzaklığı, Manhattan Uzaklığı ve Kosinüs Benzerliği.",
    5: "- **Sınıflandırma:** Karar Ağaçları (Decision Trees), Naive Bayes, k-NN.\n- **Eğitim ve Test Seti:** Modelin doğruluğunu ölçme.",
    6: "- **Birliktelik Kuralları:** Market Sepeti Analizi. Destek (Support) ve Güven (Confidence) metrikleri.\n- **Apriori Algoritması.**",
    7: "- **Kümeleme (Clustering):** k-Means (k-Ortalamalar) algoritması. Verileri benzerliklerine göre gruplama."
  },
  8: { // WEB ETİK
    1: "- **Fikri Mülkiyet:** İnsan zekasının ürünü olan eserler üzerindeki haklar.\n- **Telif Hakları:** Edibi, sanatsal ve bilimsel eserleri korur.\n- **Sınai Haklar:** Patent, Marka, Tasarım.",
    2: "- **5846 Sayılı Kanun:** Fikir ve Sanat Eserleri Kanunu (FSEK).\n- **Manevi Haklar:** Umuma arz, adın belirtilmesi, eserde değişiklik yapılmasını men etme (Devredilemez).",
    3: "- **Ekonomik Haklar:** İşleme, çoğaltma, yayma, temsil, iletim (Devredilebilir). \n- **Koruma Süreleri:** Eser sahibi yaşadığı sürece + öldükten sonra 70 yıl.",
    4: "- **İnternet Etiği:** Netiket (Netiquette). Siber zorbalık ve anonimlik.\n- **Creative Commons (CC):** Yazarların haklarını saklı tutarak paylaşım modelleri.",
    5: "- **KVKK:** Kişisel Verilerin Korunması Kanunu.\n- **Açık Rıza:** Verilerin işlenmesi için kişinin bilgilendirilmiş onayı.",
    6: "- **Bilişim Suçları:** Sisteme hukuka aykırı girme, verileri bozma/değiştirme.\n- **5651 Sayılı Kanun:** Yer sağlayıcı ve erişim sağlayıcı yükümlülükleri.",
    7: "- **Dijital Hak Yönetimi (DRM):** İçeriğin izinsiz kopyalanmasını teknik yöntemlerle engelleme."
  },
  9: { // TARİH
    1: "- **Lozan Barış Antlaşması:** 24 Temmuz 1923. Türkiye'nin tapusu. Kapitülasyonların kaldırılması.",
    2: "- **Saltanatın Kaldırılması:** 1 Kasım 1922. Milli egemenliğin önündeki engelin kalkması.\n- **Cumhuriyetin İlanı:** 29 Ekim 1923. Devletin rejiminin belirlenmesi.",
    3: "- **Halifeliğin Kaldırılması:** 3 Mart 1924. Laikliğin en önemli aşaması.\n- **Eğitim ve Kültür İnkılapları:** Tevhid-i Tedrisat, Harf İnkılabı.",
    4: "- **Çok Partili Hayata Geçiş Denemeleri:** Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası.\n- **Şeyh Sait İsyanı:** Rejime yönelik ilk büyük tehdit.",
    5: "- **Hukuk İnkılabı:** Türk Medeni Kanunu (1926). Kadın-erkek eşitliği (miras, velayet).\n- **Ekonomi Alanında Gelişmeler:** İzmir İktisat Kongresi, Aşar vergisinin kalkması.",
    6: "- **Atatürk İlkeleri:** Cumhuriyetçilik, Milliyetçilik, Halkçılık, Laiklik, Devletçilik, İnkılapçılık.",
    7: "- **Dış Politika:** Milletler Cemiyeti üyeliği (1932), Balkan Antantı, Sadabat Paktı, Hatay'ın Anavatana katılması."
  },
  10: { // TÜRK DİLİ
    1: "- **Dil Nedir:** İnsanlar arası iletişimi sağlayan gizli antlaşmalar sistemi.\n- **Dil-Kültür İlişkisi:** Dil, kültürün taşıyıcısı ve aynasıdır.\n- **Dilin İşlevleri:** Göndergesel, heyecana bağlı, alıcıyı harekete geçirme.",
    2: "- **Yazılı Anlatım Türleri:** Makale (Bilimsel), Fıkra (Güncel), Deneme (Özgür), Eleştiri.\n- **Resmi Yazışmalar:** Dilekçe, Tutanak, Karar, İş Mektupları.",
    3: "- **Sözlü Anlatım:** Konferans, Panel, Forum, Sempozyum, Açık Oturum.\n- **Hazırlıklı Konuşma:** Amacın belirlenmesi, dinleyici kitlesinin analizi.",
    4: "- **Noktalama İşaretleri:** Nokta, virgül, noktalı virgül, iki nokta kullanım kuralları.\n- **Yazım Kuralları:** Büyük harfler, sayıların yazımı, de/da ve ki'nin yazımı.",
    5: "- **Cümlenin Öğeleri:** Özne, Yüklem, Nesne (Belirtili/Belirtisiz), Tümleçler (Dolaylı/Zarf).",
    6: "- **Cümle Türleri:** Kurallı/Devrik, Olumlu/Olumsuz, Basit/Birleşik/Sıralı/Bağlı cümleler.",
    7: "- **Anlatım Bozuklukları:** Gereksiz sözcük kullanımı, mantık hataları, öğe eksikliklerinden kaynaklanan bozukluklar."
  }
};

// POPULATE ALL 70 UNITS
Object.keys(UNIT_TITLES).forEach(key => {
  const [cIdx, uIdx] = key.split('-').map(Number);
  const courseContent = COURSE_CONTENT[cIdx]?.[uIdx] || "Bu ünite için içerik akademik kaynaklara göre güncelleniyor.";
  
  UNIT_DETAILS[key] = {
    title: UNIT_TITLES[key],
    summary: "AÖF Bahar Dönemi Vize Sorumluluk Ünitesi",
    content: `### ${UNIT_TITLES[key]}\n\n${courseContent}\n\nbu özet AÖF e-Kampüs ve Açıköğretim PDF materyallerine göre akademik formatta hazırlanmıştır. Konuyu pekiştirmek için 'Test Çöz' butonuna tıklayınız.`
  };
});


export const WEEKLY_SCHEDULE = [
  { id: 1, week: "1. Hafta: Başlangıç", tasks: [ {c: 1, u: 1}, {c: 2, u: 2}, {c: 3, u: 1}, {c: 4, u: 1}, {c: 9, u: 1}, {c: 10, u: 2} ] },
  { id: 2, week: "2. Hafta: Analiz", tasks: [ {c: 4, u: 6}, {c: 5, u: 5}, {c: 1, u: 5}, {c: 2, u: 5}, {c: 3, u: 2}, {c: 7, u: 3} ] }
];
