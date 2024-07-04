const arr = ["Aarav","Vivaan","Aditya","Vihaan","Arjun","Sai","Reyansh","Ayaan","Krishna","Ishaan","Shaurya","Atharv","Dhruv","Rishi","Om","Rudra","Anay","Karthik","Aaryan","Kabir","Arnav","Moksh","Laksh","Ira","Anvi","Anika","Diya","Aadhya","Ishita","Myra","Anaya","Advika","Saanvi","Siya","Aarohi","Priya","Nitya","Sara","Aarya","Nandini","Riya","Anjali","Shruti","Tanvi","Kavya","Aisha","Meera","Vanya","Veda","Navya","kunal",];


   function print(arr) {
  var clutter = "";
  arr.forEach(function (val) {
    clutter += `<h2>${val}</h2>`;
  });
  var box = document.querySelector("#box");
  box.innerHTML = clutter;
}
print(arr);
var input = document.querySelector("input");
 input.addEventListener("input",function(){
   var ans = arr.filter(function(name){
  return name.toLowerCase().startWith(input.value.toLowerCase())
   })
    print(ans);
 })