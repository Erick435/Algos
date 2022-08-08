/* example:
    Input: arr[] = {1, 3, 5, 7, 8, 9}
    x = 5
    Output: Element found!

    Input: arr[] = {1, 3, 5, 7, 8, 9} 
    x = 6
    Output: Element not found! */

    const arr1 = [1, 3, 5, 7, 9];
    const findNum = 8;

    const arr2 = [2, 4, 6, 8, 10];
    const findNum2 = 6;

    const arr3 = [1, 2, 3, 6, 7, 8, 9];
    const findNum3 = 5;

    const arr4 = []; 
    const findNum4 = 10;

    const SearchBinary = (arr, num) => {
        if (arr.length < 1){
            console.log("There are no numbers to search for");
            
        }
        else{
            for (i = 0; i < arr.length; i++){
                if (num == arr[i]){
                    console.log("Element found! -- " + arr[i])
                    break;
                }
                else if (num != arr[i] && i == arr.length - 1){
                    console.log("Element not found! -- searching for: " + num)
                }
            }
        }
    }

    // SearchBinary(arr1, findNum);
    // SearchBinary(arr2, findNum2);
    // SearchBinary(arr3, findNum3);
    SearchBinary(arr4, findNum4);
