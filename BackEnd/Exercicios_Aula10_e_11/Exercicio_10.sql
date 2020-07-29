//A. Pelas categorias que tiveram mais honras, liste as 5 mais honradas;
Resposta:

category
select category, count (category)
from 
	times 
group by category
order by count desc
limit 5
;

//B. Busque pelas categorias que tiveram entre 3 e 6 honras;
Resposta:

select * from (
	select category, count (category)
	from 
	times  
	group by category
) as honor

where count  between 3 and 6;
;

// Com os dados da resposta anterior 3.B, busque as honras que sejam as duas mais premiadas (baseando na resposta anterior).
