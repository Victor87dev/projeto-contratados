const f_experiencia = document.querySelector("#f_experiencia") // caixa de texto Blindagem
const f_area = document.querySelector("#f_area") // caixa de texto Munição
const f_nome = document.querySelector("#f_nome") // caixa de texto Nome
const f_idade = document.querySelector("#f_idade") // caixa de texto Portas
const candidatos = document.querySelector("#candidatos") // caixa que será criada
const btn_addCandidato = document.querySelector("#btn_addCandidato")  // botao para adicionar 
const mover = document.querySelector("#mover")

let p_candidato = []

const removerPessoa=(quem)=>{
  p_candidato = p_candidato.filter((el)=>{
    return el.nome!=quem
  })
}

const gerenciarExibicaoCandidatos=()=>{
  candidatos.innerHTML = ""
  p_candidato.forEach((p)=>{
      const div = document.createElement("div")
      const btn = document.createElement("button")
      btn.innerHTML = "Contratar"
      btn.addEventListener("click",(evt)=>{
        const quemRemover = evt.target.parentNode.dataset.nome
        removerPessoa(quemRemover)
        mover.appendChild(evt.target.parentNode)
        gerenciarExibicaoCandidatos()
        alert(p.nome + " foi contratado")
      })
    div.setAttribute("class","pessoa")
    div.setAttribute("data-nome",p.nome)
    div.innerHTML = `Nome: ${p.nome}<br/>`
    div.innerHTML += `Idade: ${p.idade}<br/>`
    div.innerHTML += `Experiência: ${p.experiencia}<br/>`
    div.innerHTML += `Área: ${p.area}<br/>`
    div.appendChild(btn)
    candidatos.appendChild(div)
  })
}

btn_addCandidato.addEventListener("click",(evt)=>{
  const p = new Pessoa(f_nome.value,f_idade.value,f_experiencia.value,f_area.value)
  p_candidato.push(p)
  gerenciarExibicaoCandidatos()
  f_nome.value = ""
  f_idade.value = ""
  f_experiencia.value = ""
  f_area.value = ""
})

class Pessoa { // Classe pai / classe base
  constructor(nome,idade,experiencia,area){
    this.nome = nome 
    this.idade = idade 
    this.experiencia = experiencia
    this.area = area
  }
}