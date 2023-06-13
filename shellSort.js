// module.exports = (arr) => {
//         let n = arr.length; 
//         let cont = 0;
//         //Start with a really large gap, and then reduce the gap until there isn't any
//         //With this, the gap starts as half of the array length, and then half of that every time
//         for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
//         {
//             cont++
//             //Do a insertion sort for each of the section the gap ends up dividing
//             for (let i = gap; i < n; i += 1)
//             {
//                 cont++
//                 //We store the current varible
//                 let temp = arr[i];
                
//                 //This is the insection sort to sort the section into order
//                 let j;
//                 for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
//                 {
//                     arr[j] = arr[j-gap];
//                     cont++
//                 }
    
//                 arr[j] = temp;
//             }
//         }
    
//         return {list:arr, cont};

// } 



module.exports = (arr) => {
    inicio = performance.now();
    let cont = 0;
    var increment = arr.length / 2;
    while (increment > 0) {
        cont++
        for (i = increment; i < arr.length; i++) {
            cont++
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                cont++
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    console.log(cont, "time:" + (performance.now() - inicio));
  return {list:arr, cont};
}



// module.exports = (arr) => {
//     let customGap = [700, 300, 132, 57, 23, 10, 4 , 1]
// 	let n = arr.length;
//     let cont = 0;

// 	//Start with a really large gap, and then reduce the gap until there isn't any
// 	//This is to use a custom gap array that you setup beforehand.
// 	for (let gapIndex = 0; gapIndex < customGap.length; gapIndex++)
// 	{
//         cont++
// 		let gap = customGap[gapIndex];
// 		//Do a insertion sort for each of the section the gap ends up dividing
// 		for (let i = gap; i < n; i += 1)
// 		{
//             cont++
// 			//We store the current varible
// 			let temp = arr[i];
			
// 			//This is the insection sort to sort the section into order
// 			let j;
// 			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
// 			{
//                 cont++
// 				arr[j] = arr[j-gap];
// 			}

// 			arr[j] = temp;
// 		}
// 	}

// 	return {list:arr, cont};
// }