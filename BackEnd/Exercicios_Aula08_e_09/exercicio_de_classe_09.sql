//1. Quais as categorias distintas e quantidade de personalidades em cada categoria são listadas?

select distinct
	category, COUNT( category )
from 
    times
group by 
    category;

//2.Quantas honras foram dadas para nascidos entre 1920 e 1965 mas que não estejam entre o
intervalo de nascidos entre 1945 a 1955? Dica: Utilize BETWEEN ; Resposta (apenas 5 primeiras
linhas, 3 primeiras colunas):

select distinct
	honor , "name" ,"year" 
from 
	times
where year between '1920' and '1965' and year not between '1945' and '1955'

order by year asc;

//3.Qual é a personalidade ainda viva hoje que possui data de nascimento listada mais antiga e não
nula? Resposta sem subquery; Resposta (apenas 3 primeiras colunas):

select
	honor,
	name,
	year 
from 
	times	
where death_year is null 
order by Birth_Year asc 
limit 1
;

//4.Assumindo a questão anterior, como você responderia essa questão utilizando subqueries? Dica:
tente utilizar a subquery no WHERE . Resposta igual à anterior

select
	honor,
	name,
	year 
from 
	times	
where birth_year = (

select 
    min (Birth_Year) 
from 
    times
where death_year  is null  and birth_year  is not null
)
order by Birth_Year asc 
limit 1
;


//5. Quantos registros estão dentro das categorias: Revolution, Technology e Science? Não utilize o
operador IN ; Resposta:

select 
    category, COUNT (category)
from 
	times
where category= 'Technology' or category ='Science' or category ='Revolution' 

group by category 
;

//6. A partir da questão 5, reescreva a consulta utilizando o operador IN . Resposta igual à anterior

select 
	count (category)
from 
	times
where category in ('Technology','Science','Revolution')
;

//7.[Responda em uma só consulta com subqueries] Para o ano de nascimento que teve a maior
quantidade de celebridades como personalidade do ano, quem são as personalidades nascidas
no mesmo? (Desconsidere a data nula com birth_year IS NOT NULL );



//8. [Extra] Até 1998, a honra (honor) poderia ter vários nomes, Man of the Year, Woman of the Year e
até mesmo Honor of the Year. Após essa data, o nome unificou-se e passou se chamar 'Person of
the Year'.
i. Quais os nomes das honras dadas até 1998 (incluindo este ano).
ii. Com base na resposta anterior, quais honras foram destinadas puramente às mulheres e
quantas foram destinadas a homens?
iii. Após a alteração de nome, quantas mulheres foram honradas? (você vai precisar contar
individualmente e não no código)
iv. Tendo respondido a última pergunta, por que você considera que temos esses números?


