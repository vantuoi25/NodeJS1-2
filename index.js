// Question1:Sắp xếp mảng theo thứ tự tuổi giảm dần
const array_question1 = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name4', age: 27 }
  ]
let array_sort = array_question1.sort((a,b) => a.age-b.age);
//console.log(array_rs);

//Question2:Chuyền mảng thành 1 mảng tên
let array_sorted = array_sort.map(person => person.name) ;
//console.log(array_sorted);

// Question 3:
// Tạo mảng bao gồm 100 phần tử 0
let array = new Array(100).fill(0);
//console.log(array);

// Chuyển thành mảng mới có giá trị các phần tử từ 0 đến 99 
let array_1 = array.map((_, index) => index);
//console.log(array_1);

// Lọc ra các phần tử trong mảng chia hết cho 5 
let array_2 = array_1.filter( index => index % 5 === 0);
//console.log(array_2);

// Tính tổng các phần tử cìn lại 
let array_3 = array_1.filter( index => index % 5 !== 0).reduce((a , b) => a + b );
//console.log(array_3);


// Question: 3 - Nhóm các user cùng tên và cộng tổng các count thành mảng mới  
let array_question3 = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
]
let result = array_question3.reduce(( a, b ) => {
    let finding = a.find(person => person.name === b.name);
    if (finding){
        finding.count += b.count;
    }else {
        a.push({name: b.name, count: b.count});
    }
    return a;
},[]);
console.log(result);


  