<script>

function str_from_num(num)
{
	return new Intl.NumberFormat('ru-RU',{maximumFractionDigits: 2}).format(num);
}

alert(str_from_num(Number(prompt("введите число"," "))));

</script>
