console.log("1-masala");
//Imtihon natijasini aniqlash
//O‘quvchining bali score o‘zgaruvchisida berilgan.
//• 90–100 oralig‘ida: “A’lo”.
//• 70–89 oralig‘ida: “Yaxshi”.
//• 60–69 oralig‘ida: “Qoniqarli”.
//• 0–59 oralig‘ida: “Yiqildingiz”.
//• 0 dan kichik yoki 100 dan katta bo‘lsa: “Noto‘g‘ri ball kiritildi”.
let ball = 89;
if (ball < 0 || ball > 100) {
    console.log("Notogri ball kiritildi");
} else if(ball >=90) {
    console.log("Natija : A'lo");
}else if(ball >=70){
    console.log("Natija : Yaxshi");
}else if(ball >=60){
    console.log("Natija : Qoniqarli");
}else{
    console.log("Siz yiqildingiz");
}

console.log("2-masala");
//Quyidagi o‘zgaruvchilar berilgan:
//• Foydalanuvchi bloklangan bo‘lsa: “Hisobingiz bloklangan”.
//• Login va parol to‘g‘ri hamda foydalanuvchi bloklanmagan bo‘lsa: “Xush kelibsiz!”.
//• Login noto‘g‘ri bo‘lsa: “Login noto‘g‘ri”.
//• Login to‘g‘ri, parol noto‘g‘ri bo‘lsa: “Parol noto‘g‘ri”.
let login = "admin";
let password = "12345";
let isBlocked = true;

let tekshiruvlogin = "admin";
let tekshiruvpassword = "123456";

if (isBlocked == false) {
    console.log("Hisobingiz bloklangan");
} else if(login !== tekshiruvlogin) {
    console.log("Loginni hato kiritdingiz");
}else if(password !== tekshiruvpassword){
    console.log("Parol notog'ri");
}

console.log("3-masala");
//Do‘konda xaridorning xarid summasi va mijozlik maqomi berilgan:
let isMember = true;
let summ = 250000;
//• Xarid summasi 1 000 000 so‘m yoki undan ko‘p bo‘lsa, 20% chegirma.
//• Xarid summasi 500 000 so‘m yoki undan ko‘p va mijoz a’zo bo‘lsa, 15% chegirma.
//• Xarid summasi 500 000 so‘m yoki undan ko‘p, lekin mijoz a’zo bo‘lmasa, 10% chegirma.
//• Xarid summasi 200 000 so‘m yoki undan ko‘p bo‘lsa, 5% chegirma.
//• Boshqa holatlarda chegirma berilmaydi.
if ( summ <200000) {
    console.log(`"xarid summasi" ${summ}`);
} else if(summ >= 1000000){
    summ = (summ - (summ/100) * 20 );
    console.log(`Xarid summasi :${summ}`);
}else if (summ >=500000 && isMember == true){
   summ = (summ - (summ/100) * 15 ); 
   console.log(`"Xarid summasi" ${summ}`);
}else if(summ >= 500000){
    summ = (summ - (summ/100) * 10 );
    console.log(`"Xarid summasi :"${summ}`);
}else if(summ >=200000){
    summ = (summ - (summ/100) * 5);
    console.log(`"Xarid summasi" ${summ}`);
}


//console.log("4-masala");
//Uchburchak mavjudligini tekshirish
//Uchta tomon berilgan:
//let a = 3;
//let b = 4;
//let c = 5;
//• Tomonlardan biri 0 yoki manfiy bo‘lsa: “Tomonlar noto‘g‘ri”.
//• Uchta tomon uchburchak hosil qila olsa: “Uchburchak mavjud”.
//• Aks holda: “Uchburchak mavjud emas”.
//if (a <= 0 || b <= 0 || c <= 0) {
 //   console.log("Tomonlari noto'g'ri");  
//} else if (a + b > c && b+c > a && c+a > b) {
//    console.log("Uchburchak mavjud");  
//}else{
  //  console.log("Uchburchak bola olmaydi");   
//}

console.log("5-masala");
//Buyurtma summasi va yetkazib berish hududi berilgan:
let orderPrice = 200000;
let region = "fergana";
let isExpress = true;
//• Toshkentda buyurtma 200 000 so‘m yoki undan ko‘p bo‘lsa, oddiy yetkazib berish bepul.
//• Toshkentda 200 000 so‘mdan kam bo‘lsa, oddiy yetkazib berish 15 000 so‘m.
//• Boshqa hududlarda oddiy yetkazib berish 25 000 so‘m.
//• Tezkor yetkazib berish (isExpress = true) tanlansa, asosiy yetkazib berish narxiga qo‘shimcha
//20 000 so‘m qo‘shiladi.
if (orderPrice >= 200000 && region === "tashkent" ) {
    console.log(`Bepul yetkazib berish`);
} else if (region ==="tashkent" && orderPrice < 200000){
    orderPrice= orderPrice + 15000;
    console.log(`"Buyurtma narxi: "${orderPricec}`);
}else if(region !== "tashkent"){
    orderPrice = orderPrice + 25000;
    console.log(`"buyurtma narxi"${orderPrice}`);
}



console.log("6-masala");

//Nomzodning ma’lumotlari berilgan:
let age = 22;
let tajriba= 1;
let englishLevel = "B1";
let hasCertificate = true;
//• Yoshi 18 dan kichik bo‘lsa: “Yosh talabiga mos emas”.
//• Yoshi kamida 18, tajribasi kamida 2 yil va ingliz tili darajasi B2 yoki C1 bo‘lsa: “Suhbatga taklifqilindi”.
//• Tajribasi kamida 1 yil va sertifikati mavjud bo‘lsa: “Qo‘shimcha ko‘rib chiqiladi”.
// • Qolgan holatlarda: “Talablarga mos emas”.
if (age < 18) {
    console.log("Talabga mos emas");
} else if(age >= 18 && tajriba >= 2 && englishLevel === "B2" ||englishLevel === "C1" ) {
    console.log("Suhbatga taklif qilindi"); 
}else if(tajriba == 1 && hasCertificate === true){
    console.log("Qoshimcha korib chiqiladi");
}else{
    console.log("Talablarga mos emas"); 
}

console.log("7-masala");

//Bank hisobidagi mablag‘, yechmoqchi bo‘lgan summa va karta holati berilgan:
let balance = 850000;
let amount = 300000;
let cardBlocked = true;
//• Karta bloklangan bo‘lsa: “Karta bloklangan”.
//• Yechiladigan summa 0 yoki undan kichik bo‘lsa: “Summa noto‘g‘ri”.
//• Summa 1 000 000 so‘mdan katta bo‘lsa: “Kunlik limitdan oshdi”.
//• Hisobdagi mablag‘ yetarli bo‘lmasa: “Mablag‘ yetarli emas”.
//• Barcha shartlar bajarilsa, pul yechilsin va qolgan balans chiqarilsin.
//Shart: holatlarni to‘g‘ri ketma-ketlikda yozing.
if (cardBlocked == false) {
    console.log("Karta bloklangan");
    
} else if(amount <=0){
    console.log("Summa noto'g'ri");
    
}else if(amount >= 1000000){
    console.log("Kunlik limitdan oshdi");
    
}else if(balance - amount < 0){
    console.log("Mablag yetarli emas");
    
}else{
    balance = balance-amount;
    console.log(`sizdan ${amount} summa yechildi`);
    
    console.log(`Sizda ${balance} summa qoldi`);
}

console.log("8-masala");
//Uchta son berilgan:
let a = -25;
let b = 5;
let c = 15;
//• Uchala son teng bo‘lsa: “Barcha sonlar teng”.
//• Faqat ikkita son teng bo‘lsa: “Ikkita son teng”.
//• Uchala son har xil bo‘lsa: “Barcha sonlar har xil”.
//• Agar kamida bittasi manfiy bo‘lsa, “Manfiy son mavjud” holatini ham hisobga oling.
if (a == b == c) {
    console.log("Barcha sonlar teng");
 
} else if( a == b || a == c || c == b ) {
    console.log("Ikkita son teng"); 
}else if (a < 0 || b < 0 || c < 0){
    console.log("Manfiy son mavjud");
}else{
    console.log("Barcha sonlar har xil");
    
}

console.log("9-masala");


//• O‘rtacha bali 90 yoki undan yuqori, davomati kamida 90% va ogohlantirishi bo‘lmasa: “Yuqori stipendiya”.
//O‘rtacha bali 75 yoki undan yuqori, davomati kamida 80% va ogohlantirishi bo‘lmasa: “Oddiy stipendiya”.
//• Davomati 60% dan past bo‘lsa yoki intizomiy ogohlantirish mavjud bo‘lsa: “Stipendiya berilmaydi”.
//• Boshqa holatlarda: “Talablar bajarilmadi”.
let ortabal= 95;
let davomat = 80;
let ogohlantirish = false;
if (ortabal>=90 && davomat >=90 && ogohlantirish == false) {
    console.log("Yuqori stipendiya");
    
} else if(ortabal >=75 && davomat >=80 && ogohlantirish == false){
    console.log("Oddiy stipendiya");
}else if(davomat < 60 || ogohlantirish == true){
    console.log("Stipendiya berilmaydi");
}else{
    console.log("Talablar bajarilmadi");
}


console.log("10-masala");

//O‘quvchining imtihonga kirish ma’lumotlari berilgan:
let isRegistered = true;
let hasPaid = true;
let isBanned = false;
let examScore = 45;
//• Ro‘yxatdan o‘tmagan bo‘lsa: “Avval ro‘yxatdan o‘ting”.
//• To‘lov qilinmagan bo‘lsa: “To‘lovni amalga oshiring”.
//• Bloklangan bo‘lsa: “Imtihonga kirish taqiqlangan”.
//• Yuqoridagi talablar bajarilgan va imtihon bali hali 0 bo‘lsa: “Imtihonni boshlashingiz mumkin”.
//• Bali 0 dan katta va 60 dan kichik bo‘lsa: “Imtihondan o‘tmadingiz”.
//• Bali 60 yoki undan yuqori bo‘lsa: “Imtihondan muvaffaqiyatli o‘tdingiz”.
//• Bali 100 dan katta yoki manfiy bo‘lsa: “Noto‘g‘ri natija”.
if (isRegistered == false) {
    console.log("Avval royxatdan oting");
    
} else if(hasPaid == false ) {
    console.log("Tolovni amalga oshiring");   
}else if(isBanned == true){
    console.log("Imtihonga kirish taqiqlangan");
}else if(examScore == 0){
    console.log("Imtihon boshlashingiz mumkun");
    
}else if(examScore > 0 || examScore < 60){
    console.log("Yiqilding");
    
}else if(examScore >= 60){
    console.log("Tabriklashilar mumkun");
}else if(examScore > 100 || examScore <0){
    console.log("Noto'g'ri natija");
}else{
    console.log("Yuqoling");
    
}






