import React from "react";
import Alunos from "../../data/alunos";

const ListaAluno = () => {
    const alunosLi = Alunos.map((Alunos) => {
        return (
            <li key={Alunos.id}>
                 {Alunos.name} = {Alunos.grade}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "name" }}>{alunosLi}</ul>
        </div>
    )
}

export default ListaAluno;