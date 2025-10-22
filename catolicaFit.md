# Projeto Mais Fitness
---

## 1. Contexto do negócio
Ideia: Facilitar a inscrição  de um aluno em uma academia.

---

## 2. Regras de negócio
- Um professor pode ter um ou muitos alunos.
- Um aluno pode se cadastrar em uma aula com um ou varios professores.
- uma aula pode ter varios alunos e é ministrada por um professor.
---

## 3. Modelo lógico (EER)
![Diagrama do Modelo Lógico](image.png)

- Figura 1 – Diagrama Entidade-Relacionamento da Academia.
---

## 4. Relacionamentos e cardinalidades do diagrama

- Professor:  1.. N (alunos).
- Professor: 1.. N (aulas).
- Aluno: 1.. N (aulas).
- Aulas: 1.. N (alunos).
---

## 5. Modelagem física (PostgreSQL)
