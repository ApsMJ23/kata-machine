export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let hi = haystack.length;
    do{
        const mid = Math.floor(low+(hi-low)/2);
        if(haystack[mid]===needle)return true;
        if(haystack[mid]<needle){
            low=mid+1;
        }
        else{
            hi=mid;
        }

    }while(low<hi);
    return false;

}