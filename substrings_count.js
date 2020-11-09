<script>

function substr_count(arr, substr)
{
	var count = 0;
	for(i=0;i<arr.length;i++)
    {
    	if(arr[i].includes(substr))
        {
        	count++;
        }
    }
    return count;
}

var arr = ["first element","second element"];

alert(substr_count(arr,"first"));
alert(substr_count(arr,"second"));
alert(substr_count(arr,"element"));


</script>
