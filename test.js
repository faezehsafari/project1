var A = [1,2,3];
var B = ["a","b","c"];
var AB= [];
let k =0;
let j = 0;
for (let i = 0; i < 6; i++){
    if ( i % 2 ==0 ) {
      AB[i] = A[j]; 	
      j++;	    
    }
    else {	 
     AB[i] = B[k];
     k++;	    
    }
}
console.log(AB);

