//// Calculate fomula written in Reverse Pollish Notation

//// Judging input fomula
function judgeFomula(fomula){
    let fomula_items = fomula.split(' ');
    let nums_of_nums = 0;
    let nums_of_operater = 0;

    // Return splited fomula items if fomula is correct, if not, return null array
    for (let i=0; i < fomula_items.length; i++){
        if (fomula_items[i].match(/[0-9]/) ){
            nums_of_nums = nums_of_nums + 1;
        }else if (fomula_items[i].match(/[\+\-\*\/]/)) {
            nums_of_operater = nums_of_operater + 1;
            if (nums_of_nums > nums_of_operater == false) {
                return [];
            }
            ////under code was comparing nums_of_nums and nums_of operater before nums_of_operater is plused. It cause error
            // if (nums_of_nums > nums_of_operater != true) {
            //     // return [(nums_of_nums > nums_of_operater == false)];
            //     return [];
            // }else{
            //     nums_of_operater = nums_of_operater + 1;
            // }
        }else{
            return [];
        }
    }
    if (nums_of_nums == nums_of_operater +1){
        return fomula_items;
    }else{
        return [];
    }
}

//// Calculating fomula
function calcRevPol(fomula){
    // Judging fomula
    let fomula_items = judgeFomula(fomula);
    if (fomula_items[0]) ;
    else return false;

    let stack = [];

    // Calculate 
    for (let i=0; i < fomula_items.length; i++){
        if (fomula_items[i].match(/[0-9]/) ){
            stack.push(Number(fomula_items[i]));
        }else{
            if(fomula_items[i]=='+'){
                let [left_num,right_num] = stack.slice(-2)
                var calced_num = left_num + right_num;
            }else if(fomula_items[i]=='-'){
                let [left_num,right_num] = stack.slice(-2)
                var calced_num = left_num - right_num;
            }else if(fomula_items[i]=='*'){
                let [left_num,right_num] = stack.slice(-2)
                var calced_num = left_num * right_num;
            }else if(fomula_items[i]=='/'){
                let [left_num,right_num] = stack.slice(-2)
                var calced_num = left_num / right_num;
            }else{
                ;
            }
            stack.pop();
            stack.pop();
            stack.push(calced_num);
        }
    }
    return stack[0];
}

//// Test calRevPoll() and judgeFomula()
var fomulaes = ['1 2 +','+ 1','1 ++','1 +','1 2 $ +','1 3 4 + - 10 * 9 +','1 3 4 + / 7 * 10 * 9 3 - +','10 14 27 0 * + 7 / +','10 15 + 5 / 2 * 3 6 + -','11 6 3 / 10 * +','1 2 3 5 * - + 2 4 / +','1 2 3 5 * - + 2 4 / + 2 2 / +','15 17.5 24 8 - 4 / * + 10 -','51 15 24 8 4 / - 10 6 3 / - * * +','51 15 24 8 4 / - 10 6 3 / - * 4 / * + 12 3 * + 10 2 3 * + -']; 
var answer = [3,false,false,false,false,-51,16,12,1,31,-11.5,-10.5,75,2691,731];

//console.log(calcRevPol(fomulaes[0]))
for (let i=0; i < fomulaes.length; i++){
    console.log(fomulaes[i]);
    if (calcRevPol(fomulaes[i])){
        console.log('='+calcRevPol(fomulaes[i]));
        console.log(calcRevPol(fomulaes[i])==answer[i]);
    }else{
        console.log(calcRevPol(fomulaes[i]))
        console.log('Unexpected Fomula')
    }
}

//// Calculate fomula written in Reverse Pollish Notation

// //// Judging input fomula
// function judgeFomula(fomula){
//     let fomula_items = fomula.split(' ');
//     let nums_of_nums = 0;
//     let nums_of_operater = 0;

//     // Return splited fomula items if fomula is correct, if not, return null array
//     for (let i=0; i < fomula_items.length; i++){
//         if (fomula_items[i].match(/[0-9]/) ){
//             nums_of_nums = nums_of_nums + 1;
//         }else if (fomula_items[i].match(/[\+\-\*\/]/)) {
//             nums_of_operater = nums_of_operater + 1;
//         }else{
//             return [];
//         }
//     }
//     if (nums_of_nums == nums_of_operater +1){
//         return fomula_items;
//     }else{
//         return [];
//     }
// }

// //// Calculating fomula
// function calcRevPol(fomula){
//     // Judging fomula
//     let fomula_items = judgeFomula(fomula);
//     if (fomula_items[0] == true) ;
//     else return false;

//     let stack = [];

//     // Calculate 
//     for (let i=0; i < fomula_items.length; i++){
//         if (fomula_items[i].match(/[0-9]/) ){
//             stack.push(Number(fomula_items[i]));
//         }else{
//             if(fomula_items[i]=='+'){
//                 let [left_num,right_num] = stack.slice(-2)
//                 var calced_num = left_num + right_num;
//             }else if(fomula_items[i]=='-'){
//                 let [left_num,right_num] = stack.slice(-2)
//                 var calced_num = left_num - right_num;
//             }else if(fomula_items[i]=='*'){
//                 let [left_num,right_num] = stack.slice(-2)
//                 var calced_num = left_num * right_num;
//             }else if(fomula_items[i]=='/'){
//                 let [left_num,right_num] = stack.slice(-2)
//                 var calced_num = left_num / right_num;
//             }else{
//                 ;
//             }
//             stack.pop();
//             stack.pop();
//             stack.push(calced_num);
//         }
//     }
//     return stack[0];
// }

// //// Test calRevPoll() and judgeFomula()
// var fomulaes = ['1 ++','1 +','1 2 $ +','1 3 4 + - 10 * 9 +','1 3 4 + / 7 * 10 * 9 3 - +','10 14 27 0 * + 7 / +','10 15 + 5 / 2 * 3 6 + -','11 6 3 / 10 * +','1 2 3 5 * - + 2 4 / +','1 2 3 5 * - + 2 4 / + 2 2 / +','15 17.5 24 8 - 4 / * + 10 -','51 15 24 8 4 / - 10 6 3 / - * * +','51 15 24 8 4 / - 10 6 3 / - * 4 / * + 12 3 * + 10 2 3 * + -']; 
// var answer = [false,false,false,-51,16,12,1,31,-11.5,-10.5,75,2691,731];

// for (let i=0; i < fomulaes.length; i++){
//     console.log(fomulaes[i]);
//     if (calcRevPol(fomulaes[i]) != false){
//         console.log('='+calcRevPol(fomulaes[i]));
//         console.log(calcRevPol(fomulaes[i])==answer[i]);
//     }else{
//         console.log('Unexpected Fomula')
//     }
// }

//// able to catch not regular fomula but waste memory 

// function judgeFomula(fomula){
//     let fomula_items = fomula.split(' ');
//     let nums_of_nums = 0;
//     let nums_of_operater = 0;
//     for (let i=0; i < fomula_items.length; i++){
//         if (fomula_items[i].match(/[0-9]/) ){
//             nums_of_nums = nums_of_nums + 1;
//         }else if (fomula_items[i].match(/[\+\-\*\/]/)) {
//             nums_of_operater = nums_of_operater + 1;
//         }
//     }
//     if (nums_of_nums == nums_of_operater +1){
//         return true;
//     }else{
//         return false;
//     }
// }
// // let judged = judgeFomula('1 2 +')
// // console.log(judged);

// function calcRevPol(fomula){
//     if (judgeFomula(fomula)) ;
//     else return false;

//     let fomula_items = fomula.split(' ');
//     let stack = [];

//     for (let i=0; i < fomula_items.length; i++){
//         if (fomula_items[i].match(/[0-9]/) ){
//             stack.push(Number(fomula_items[i]));
//         }else{
//             if(fomula_items[i]=='+'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 + item2;
//             }else if(fomula_items[i]=='-'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 - item2;
//             }else if(fomula_items[i]=='*'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 * item2;
//             }else if(fomula_items[i]=='/'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 / item2;
//             }else{
//                 ;
//             }
//             stack.pop();
//             stack.pop();
//             stack.push(calced_num);
//         }
//     }
//     return stack[0];
// }


// var fomulaes = ['1 +','1 3 4 + - 10 * 9 +','1 3 4 + / 7 * 10 * 9 3 - +','10 14 27 0 * + 7 / +','10 15 + 5 / 2 * 3 6 + -','11 6 3 / 10 * +','1 2 3 5 * - + 2 4 / +','1 2 3 5 * - + 2 4 / + 2 2 / +','15 17.5 24 8 - 4 / * + 10 -','51 15 24 8 4 / - 10 6 3 / - * * +','51 15 24 8 4 / - 10 6 3 / - * 4 / * + 12 3 * + 10 2 3 * + -']; 
// var answer = [false,-51,16,12,1,31,-11.5,-10.5,75,2691,731];

// for (let i=0; i < fomulaes.length; i++){
//     console.log(fomulaes[i]);
//     if (calcRevPol(fomulaes[i]) != false){
//         console.log(calcRevPol(fomulaes[i]));
//         console.log(calcRevPol(fomulaes[i])==answer[i]);
//     }else{
//         console.log('Unexpected Fomula')
//     }
// }
////

//// i is changed because not used let

// function revPolCalc(fomula){
//     var fomula_items = fomula.split(' ');
//     var stack = [];
//     for (i=0; i < fomula_items.length; i++){
//         if (fomula_items[i].match(/[0-9]/) ){
//             stack.push(Number(fomula_items[i]));
//         }else{
//             if(fomula_items[i]=='+'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 + item2;
//             }else if(fomula_items[i]=='-'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 - item2;
//             }else if(fomula_items[i]=='*'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 * item2;
//             }else if(fomula_items[i]=='/'){
//                 let [item1,item2] = stack.slice(-2)
//                 var calced_num = item1 / item2;
//             }else{
//                 ;
//             }
//             stack.pop();
//             stack.pop();
//             stack.push(calced_num);
//         }
//     }
//     return stack[0];
// }


// var fomulaes = ['1 3 4 + - 10 1 + * 9 +','1 3 4 + / 7 * 10 * 9 3 - +','10 14 27 0 * + 7 / +','10 15 + 5 / 2 * 3 6 + -','11 6 3 / 10 * +','1 2 3 5 * - + 2 4 / +','1 2 3 5 * - + 2 4 / + 2 2 / +','15 17.5 24 8 - 4 / * + 10 -','51 15 24 8 4 / - 10 6 3 / - * * +','51 15 24 8 4 / - 10 6 3 / - * 4 / * + 12 3 * + 10 2 3 * + -']; 
// // var answer = [-51,16,12,1,31,-11.5,-10.5,75,2691];

// for (i=0; i < fomulaes.length; i++){
//     console.log(fomulaes[i]);
//     console.log(i)
//     console.log(revPolCalc(fomulaes[i]));
// }
////

// function getCalcItem(array){
//     let [item1,item2] = array.slice(-2)
//     return item1,item2;
// }

//console.log(revPolCalc(fomulaes[0])== -51);

// array= ['a','2','1'];
// console.log(array.slice(-2));

/*
function judgeOperater(operater){
    if(operater == '+'){
        return +;
    }
}

function revPolCalc(fomula){
    var fomula_items = fomula.split(' ');
    //return stack;
    // var last = 0;
    // last = stack.pop();
    // return stack,last;
    var stack = [];
    for (i=0; i < fomula_items.length; i++){
        if (Number(fomula_items[1])==true){
            stack.push(fomula_items[i]);
        }else{
            calced_num = stack[-2] judgeOperater(fomula_items[i]) stack[-1];
        }
    }
   return stack[0];
}
*/



// if (stack.pop()=='+'){
//     calced_num = Number(marked_item1) + Number(marked_item2);
//     stack.push(calced_num);
// }else {
//     num = stack.pop();
// }
// function getCalcItem(item1,item2){
//     return item1,item2;
// }

/*
function revPolCalc(fomula){
    var fomula_items = fomula.split(' ');
    var stack = [];
    for (i=0; i < fomula_items.length; i++){
        if (fomula_items[i].match(/[0-9]/) ){
            stack.push(Number(fomula_items[i]));
            //console.log(Number(fomula_items[i]));
        }else{
            if(fomula_items[i]=='+'){
                calced_num = stack[i-2]+stack[i-1];
            }else if(fomula_items[i]=='-'){
                calced_num = stack[i-2]-stack[i-1];
            }else if(fomula_items[i]=='*'){
                calced_num = stack[i-2]*stack[i-1];
            }else if(fomula_items[i]=='/'){
                calced_num = stack[i-2]/stack[i-1];
            }else{
                ;
            }
            //console.log(Number(fomula_items[i])==NaN);
            stack.pop();
            stack.pop();
            stack.push(calced_num);
        }
        //console.log(stack);
    }
   //return stack[0];
   //console.log(fomula_items);
   //console.log(stack[0]);
    return stack[0];
}

var fomulaes = ['1 3 4 + - 10 * 9 +','1 3 4 + / 7 * 10 * 9 3 - +','10 14 27 0 * + 7 / +','10 15 + 5 / 2 * 3 6 + -','11 6 3 / 10 * +','1 2 3 5 * - + 2 4 / +','1 2 3 5 * - + 2 4 / + 2 2 / +','15 17.5 24 8 - 4 / * + 10 -','51 15 24 8 4 / - 10 6 3 / - * * +','51 15 24 8 4 / - 10 6 3 / - * 4 / * + 12 3 * + 10 2 3 * + -']; 
var answer = [-51,16,12,1,31,-11.5,-10.5,75,2691]
for (i=0; i <= fomulaes; i++){
    console.log(revPolCalc(fomulaes[i]==answer[i]))
}*/
//console.log(revPolCalc(fomula))
//console.log(revPolCalc('a b c'));

// var stack=[1,2,3];
// stack.push(4);
// var last =0;
// last = stack.pop();
// console.log(last);

// var str = 'a b c d';
// console.log(str.split(' '));
// var ab = str.split(' ');
// console.log(ab);
