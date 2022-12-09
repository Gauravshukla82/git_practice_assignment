let factor=2;
let Num=19;
for(i=0;i<=Num;i++)
{
	if(Num%i==0)
	{
		factor++;
	}
}
if(factor==0)
{
	console.log("It is a prime number")
}
else
{
	console.log("It is not a prime number")
}