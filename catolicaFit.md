# Projeto Catolica Fit
---
# Equipe = Fabricio Nathan, Pedro Ayrlex, Sydney, DiogoCoffe, Stenio

## 1. Contexto do negócio
Ideia: Facilitar a inscrição  de um aluno em uma academia.

---

## 2. Regras de negócio
- Um professor pode ter um ou muitos alunos.
- Um aluno pode se cadastrar em uma aula com um ou varios professores.
- uma aula pode ter varios alunos e é ministrada por um professor.
---

## 3. Modelo lógico (EER)
![Diagrama do Modelo Lógico](public/image.png)

- Figura 1 – Diagrama Entidade-Relacionamento da Academia.
---

## 4. Relacionamentos e cardinalidades do diagrama

- Professor:  1.. N (alunos).
- Professor: 1.. N (aulas).
- Aluno: 1.. N (aulas).
- Aulas: 1.. N (alunos).
---

## 5. Modelagem física (PostgreSQL)
```SQL
CREATE DATABASE catolica_fit;

-- 1) Tabelas
CREATE TABLE tb_professor(
id INT PRIMARY KEY,
nome VARCHAR(250) NOT NULL,
especialidade VARCHAR(250) NOT NULL,
salario FLOAT
);

CREATE TABLE tb_aluno(
id INT PRIMARY KEY,
nome VARCHAR(250) NOT NULL,
contato INT NOT NULL,
cpf INT NOT NULL,
idade INT NOT NULL,
sexo CHAR not null
);

CREATE TABLE tb_aula(
id INT PRIMARY KEY,
turno INT NOT NULL,
diaDaSemana INT NOT NULL,
nomeAula VARCHAR(250),
cod_professor INT NOT NULL,
cod_aluno INT NOT NULL
);

CREATE TABLE tb_recepcao(
id INT PRIMARY KEY,
funcionario VARCHAR(250),
contato VARCHAR(250)
);


-- 2) Carga inicial de dados (mínima)
INSERT INTO tb_professor(id,nome,especialidade,salario) VALUES(1,'DIDI','MUSCULACAO',2000);
INSERT INTO tb_professor(id,nome,especialidade,salario) VALUES(2,'Sydney','Danca',10000);
INSERT INTO tb_professor(id,nome,especialidade,salario) VALUES(3,'Fabricio','natacao',7000);
INSERT INTO tb_professor(id,nome,especialidade,salario) VALUES(4,'joao','crossfit',5000);

INSERT INTO tb_aluno(id,nome,contato,cpf,idade,sexo) VALUES(1,'arroz',83-0000000,1982773827-90,20,'M');
INSERT INTO tb_aluno(id,nome,contato,cpf,idade,sexo) VALUES(2,'diogo',83-1111111,1982773827-90,30,'M');
INSERT INTO tb_aluno(id,nome,contato,cpf,idade,sexo) VALUES(3,'ze',83-2222222,1982773827-90,40,'M');

INSERT INTO tb_aula(id,turno,diadasemana,nomeaula,cod_professor,cod_aluno) VALUES (1,'noite','quarta-feira','musculacao',1,1);
INSERT INTO tb_aula(id,turno,diadasemana,nomeaula,cod_professor,cod_aluno) VALUES (2,'noite','sexta-feira','danca',2,1);

INSERT INTO tb_recepcao(id,funcionario,contato,aulaaluno,cod_aluno) VALUES (1,'julia',830000000,'muculacao',2);