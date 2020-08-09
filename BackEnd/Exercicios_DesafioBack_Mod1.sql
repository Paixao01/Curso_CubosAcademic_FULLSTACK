--1)Quantos bruxos nascidos-trouxa (Muggle-born) ou mestiços (Half-blood) existem em cada casa (house)? Ordene-os decrescentemente e limite a busca em quatro (4) registros. Observe que não temos certeza sobre blood_status de alguns bruxos.
-- Mas, nós estamos buscando aqui nessa questão pelos bruxos que são Muggle-born, Half-blood ou Muggle-born or Half-blood.

select house, count(blood_status)
from 
	harry_potter
where house is not null and (blood_status = 'Muggle-born' or blood_status = 'Half-blood')
group by house
order by count(blood_status) desc
limit 4;


--2) Qual é a casa que tem a menor quantidade de sangues-puro (Pure-blood), assumindo apenas aqueles que têm-se certeza? Remova, também, aqueles casos que a casa (House) seja nula e o (Blood Status) seja nula.

select house, count(blood_status)
from 
	harry_potter
where house is not null and (blood_status = 'Pure-blood')
group by house
order by count(blood_status) asc
limit 1;

--3)Quantas pessoas existem na família Weasley (assuma pessoas com algum nome de Weasley)?

select count(name)
from 
	harry_potter
where name like '%Weasley%';

--4)Existe alguém na família Weasley que não seja ruivo (Red)?

select count(name)
from 
	harry_potter
where name like '%Weasley%' and hair_colour like '%red%';

--5)Todo bruxo consegue aprender o feitiço do patrono, um feitiço de proteção que toma forma de um animal. É um feitiço complexo e nem todos os bruxos possuem um patrono. Existem pessoas que possuem o mesmo animal patrono (patronus)? Remova os casos em que os valores sejam Unknown (do inglês, desconhecido), Non-corporeal (Não possui forma animal) ou None (nenhum) e ordene-os pela quantidade decrescentemente, limitando nos 3 maiores resultados.

select distinct patronus, count(*) 
from harry_potter
where patronus <> 'Unknown' and patronus <> 'Non-corporeal' and patronus <> 'None'
group by patronus
order by count(*) desc
limit 3;

--6)Utilizando apenas uma consulta com possibilidade de subqueries, responda: busque pelos quatro bruxas ou bruxos que possuem nomes que deram origem ao nome das casas de Hogwarts (House). Remova aqueles que sejam da espécie fantasma (Ghost). A resposta deve conter o sobrenome, o nome e a espécie.


select *
	from (select split_part(name, ' ', 2) as sobrenome, name, species 
			from harry_potter
			where species <> 'Ghost'
				and birth is not null) as fundadores
where (sobrenome = 'Gryffindor' 
	or sobrenome = 'Ravenclaw' 
	or sobrenome = 'Slytherin' 
	or sobrenome ='Hufflepuff')
;

--7)Existiam bruxos que não eram da casa (house) Sonserina (Slytherin) que eram leais ao Lord Voldemort? Se existiram, qual são seus nomes? Desconsidere aqueles que não estão associados a nenhuma casa. A Resposta deve conter apenas o nome desses bruxos.

select 
	name
from 
	harry_potter
where 
	house <>'Slytherin' and loyalty  like '%Lord Voldemort%'


-- GRUPO 02
--1)A Batalha de Hogwarts foi uma intensa batalha em que vários bruxos morreram. Esta batalha ocorreu no dia 2 de maio (2 May) de 1998. Busque pelas quantidade de mortos nesta batalha entre aqueles que lutavam por Albus Dumbledore (Dumbledore’s Army ou Albus Dumbledore) ou a Ordem da Fênix (Order of the Phoenix) versus aqueles que lutavam a favor de Lord Voldemort ou eram comensais da morte (Death Eaters), inclui-se também o nome Tom Marvolo Riddle que é o verdadeiro nome de Lord Voldemort. A resposta deve conter apenas os nomes, as casas e as lealdades. Dica: a busca por Dumbledore’s Army pode ser feita da seguinte forma Dumbledore’'s Army, ou seja com duas aspas simples ao pesquisar usando LIKE ou =.

select
	name, house, loyalty
from
	harry_potter
where
	death = '2 May, 1998'
	and loyalty like '%Dumbledore''s Army%'
	or (loyalty like '%Albus Dumbledore%' or loyalty like '%Order of the Phoenix%'
	or loyalty like '%Lord Voldemort%' or loyalty like '%Death Eaters%'
	or loyalty like '%Tom Marvolo Riddle%')
	limit 2;

--2)A primeira profecia de Sibila Trelawney é uma famosa profecia que colocou em dúvida quem seria o herói que teria poder para derrotar o grande vilão, Lord Voldemort. Provavelmente os bruxos não tinham um banco de dados tão interessante quanto o nosso mas a profecia tinha alguns requisitos que curiosamente alguns destes podem ser validados pelo dataset, a profecia dizia que um menino teria as seguintes características:
--ser do gênero masculino. seus pais tinham desafiado Voldemort três vezes e sobreviveram. ele teria um poder que Voldemort era incapaz ou não queria compreender.
--nascido nos últimos dias de julho de 1980, ano em que a profecia foi feita (possivelmente 29, 30 ou 31). se mais de uma pessoa nascesse que satisfizer os requisitos, o próprio Voldemort iria escolher a quem acabaria por se referir.
--Sua meta é encontrar nomes que poderiam satisfazer nossa vontade de descobrir quem poderia ser o herói. Observação: Bom, como dizia o ditado: O inimigo do meu inimigo é meu amigo. Podemos assumir que aliados a Albus Dumbledore ou a Order of the Phoenix (Ordem da Fênix) eram também inimigos de Voldemort. Então isso pode ser um bom indicativo para tentar identificar nosso(s) herói(s).
--Com base nesses requisitos quem são os possíveis heróis? A resposta deve conter apenas o nome do bruxo.

select
	name
from
	harry_potter
where
	gender = 'Male' and (loyalty like '%Albus Dumbledore%'
	or loyalty like '%Order of the Phoenix%'
	or loyalty like '%Order of the Phoenix%')
	and ( birth = '29 July, 1980' or birth = '30 July, 1980' or birth = '31 July, 1980');

--3) Busque por todos os trabalhos (job) e separe-os individualmente e por fim, ordene-os por quantidade descrecente, além disso, filtre-os por aqueles que possuem acima de 2. Lembre-se um personagem pode ter zero ou mais trabalhos e àqueles maiores que 1 são separados por | (barra vertical entre espaços); Cuidado: existe uma armadilha nessa pergunta: na resposta deve existir apenas trabalhos distintos.

select * from(
select distinct 
	unnest (string_to_array(job, ' | ')) as tr, count(job) 
from
	harry_potter
group by tr
order by count(job) desc 
) as tabela
where tabela.count >2;

--Grupo 3
--1.A. Busque por todos os nomes de bruxos e quebre as palavras a fim de encontrarmos cada palavra usada como nome; Primeiros 5 registros (podem não ser os mesmos registros)

select
	unnest(string_to_array(name, ' ')) as nome
from
	harry_potter
limit 5;

--1.B. Agora, agrupe os nomes a fim de encontrar a quantidade de vezes que o certo nome é repetido. (Lembre-se, existem pessoas com famílias, então espera-se repetição de nomes (que apareçam número maior do que 1));

select name, count(*)
	from (select unnest(string_to_array(name, ' ')) as name 
			from harry_potter
			) as nome
	group by name
	limit 5
;

--1.C. Ordene-as palavras usadas como nome pela quantidade de repetições;

select name, count(*)
	from (select unnest(string_to_array(name, ' ')) as name 
			from harry_potter
			) as nome1
	group by name
	order by count desc 
	limit 5
;
--1.D. Filtre por todos aqueles nomes que tiveram 4 ou mais repetições;


--1.E. Agora utilizando o recurso de JOIN, encontre todos os personagens que possuem nome que esteja no grupo encontrado na questão anterior (1.D);


--1.F. Agora, filtre apenas por aqueles que estejam vinculados a casa de magia (house sejam IS NOT NULL);


--1.G. Agora, encontre a quantidade de pessoas por casa de magia (house).


--2.A Entre todas as habilidades, quebre-as e busque por aquelas que falem sobre as posições do Quadribol citadas anteriormente no enunciado.

select * 
	from (select unnest(string_to_array(skills, ' | ')) as nome
			from harry_potter
			) as habilidade
	where nome = 'Seeker' 
		or nome = 'Chaser' 
		or nome = 'Beater' 
		or nome = 'Keeper'
	limit 5
;

--2.B. Sabendo das informações da questão anterior (2.A), liste a quantidade de jogadores por posição;

select nome, count(*) 
	from (select  unnest(string_to_array(skills, ' | ')) as nome
			from harry_potter) as habilidade
	where nome = 'Seeker' 
		or nome = 'Chaser' 
		or nome = 'Beater' 
		or nome = 'Keeper'
	group by nome
	order by nome  
	;

--2.C. Sabendo das informações da questão anterior (2.B), ordene-os os registros encontrados e busque pela posição que possui MENOR quantidade de jogadores;

select nome, count(*) 
	from (select  unnest(string_to_array(skills, ' | ')) as nome
			from harry_potter) as habilidade
	where nome = 'Seeker' 
	or nome = 'Chaser' 
	or nome = 'Beater' 
	or nome = 'Keeper'
	group by nome
	order by count(*) 
	limit 1
;

--2.D. Sabendo das informações da questão anterior (2.C), busque por todos os jogadores que são da posição encontrada.

--3. Para aqueles bruxos possuam patrono e que esses patronos não sejam Unknown, None e Non-corporeal nem NULL, busque pelos bruxos ou bruxas que possuem o mesmo animal. Por fim, ordene-os alfabeticamente e traga a informação de nome e o patrono.

select donos.name, animal.patronus
	from (select name, patronus
			from harry_potter
			) as donos
inner join (select * 
			from (select patronus, count(*) 
					from harry_potter
					where patronus is not null
						and patronus <> 'None'
						and patronus <> 'Non-corporeal'
						and patronus <> 'Unknown'
					group by patronus 
					order by count(*) desc
					) as patronus 
			where count >= 2) as animal
on donos.patronus = animal.patronus
order by donos.patronus
;

--4.A. Busque por todas possibilidades individuais de lealdade (Loyalty). Dica: os valores estão listados separando cada valor por | (barra vertical entre espaços);

select unnest(string_to_array(loyalty, '|')) as nome
	from harry_potter
	limit 5
;
--4.B. Após saber da informação (4.A), busque por estas mesmas lealdades e suas respectivas quantidades;

select nome, count(*) from (select  unnest(string_to_array(loyalty, ' | ')) as nome
	from harry_potter) as leal
	group by nome
	order by count(*) desc 
	;

--4.C. Após saber da informação (4.B), busque por aquela lealdade que possui quantidade igual a 4 e que não seja igual ao ministro da magia (Minister of Magic).
select *
	from (select nome, count(*) from (select  unnest(string_to_array(loyalty, ' | ')) as nome
			from harry_potter) as leal
			group by nome
			order by count(*) desc) as leal2
	where nome <> 'Minister of Magic'
		and count = 4
;
--4.D. Após saber da informação (4.C), busque pelo nome das pessoas que possuem lealdade ao indíviduo ou organização encontrada na ©.

