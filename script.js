function threeSum(arr, target) {
// write your code here
	let m=0;
	let a=[];
  for(let i=0;i<arr.length;i++){
	  for(let j=i+1;j<arr.length-1;j++){
		  for(let k=j+1;k<arr.length-2;k++){
			  a[m++]=arr[i]+arr[j]+arr[k];
				  
			  
		  }
	  }
  }
	let sum=0;
	for(let i=0;i<a.length;i++){
		if(a[i]-target<=sum){
			sum=arr[i];
		}
	}
	return sum;
}

module.exports = threeSum;
