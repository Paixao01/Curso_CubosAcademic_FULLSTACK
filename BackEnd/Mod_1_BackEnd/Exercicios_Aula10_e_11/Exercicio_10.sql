--A. Pelas categorias que tiveram mais honras, liste as 5 mais honradas;
--Resposta:

category
select category, count (category)
from 
	times 
group by category
order by count desc
limit 5
;

--B. Busque pelas categorias que tiveram entre 3 e 6 honras;
--Resposta:

select * from (
	select category, count (category)
	from 
	times  
	group by category
) as honor

where count  between 3 and 6;
;

-- Com os dados da resposta anterior 3.B, busque as honras que sejam as duas mais premiadas (baseando na resposta anterior).
select * 
from
	times
where category in(

	select category from (
		select category, count (category)
		from times 
		group by category	
) as honras
	
where count  between 3 and 6
order by count desc 
limit 2
)
;
--1. No dataset de nobel, busque por: A. Para os países que mais tiveram honras (assume-se o país de nascimento), busque por aqueles que tiveram entre 10 e 50 honras; Dica: Subquery no FROM;
--Resposta:

select * from (
select birth_country, count (birth_country)
from 
	nobel
group by birth_country

)as honras

where count between 10 and 50
order by count desc;

--B. Existem divisões no prêmio, a coluna prize_share refere-se a a divisão, ex: 1/1 significa que o prêmio não foi dividido, 1/2 significa que duas pessoas dividiram a premiaçao, 1/3 significa 3 pessoas, e 1/4, 4 pessoas. Quais divisões são as menos comuns?
--Resposta:

select * from (

	select Prize_Share, count (Prize_Share)
	from nobel
	group by (Prize_Share)

) as divisao

order by count asc;

--C. Utilizando a consulta da resposta anterior como base, busque por todas as premiações que 
--entram na restrição de ser a menos comum em relação a divisão. Utilize subqueries para responder essa pergunta!
--Resposta:

select 
	prize, 
	full_name,
	category,
	year
	
from 
	nobel 
where Prize_share in (
	select Prize_share
	from nobel
	group by Prize_share
	order by count (Prize_share) asc 
	limit 1	
) 
limit 5
; 


--D. Com base nos resultados da 1.C como base, obtenha a quantidade de premiações por categoria.
-- Ordene-as por quantidade de premiações.

select 
category, count(category) 

from 
	nobel	
where Prize_share in (  select Prize_share
						from nobel
						group by Prize_share
						order by count (Prize_share) asc 
						limit 1) 
group by category
order by count (category) desc
;

--E. Utilizando a consulta da resposta anterior como base, busque pela categoria que 
--obteve acima de 30 honras; Utilize subquery para responder essa pergunta!

--2. Nos datasets de cervejas e cervejarias, busque por:
--A. Quais palavras mais comuns para nomes de cervejarias? Liste as mais comuns e limite a quantidade em 4 itens;

