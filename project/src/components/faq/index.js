import React from 'react'
import './index.scss'

import Question from './question'

const items = [
  {
    question: 'Gostei e quero assinar, como sou cobrado?',
    answer: 'O plano anual tem o melhor custo-benefício do mercado. Como funcionamos por sistema de assinatura, nosso assinante tem acesso a toda biblioteca de vídeo nas carreiras desejadas, sem limite de visualização e tendo um estudo focado para a carreira escolhida. Com isso, você pode estudar para Carreiras Jurídicas podendo estudar para as outras carreiras também, tudo isso, sem custo adicional.   E o mais importante: O nosso conteúdo é frequentemente atualizado e assim que surge algum tipo de novidade em relação aos concursos jurídicos, nós adicionamos.'
  },
  {
    question: 'Como faço para cancelar meu plano?',
    answer: 'O assinante deverá solicitar o cancelamento por escrito pelo chat ou através do e-mail concursos@descomplica.com.br. Se o pedido for feito dentro do prazo de 7 dias corridos após a compra, haverá o estorno integral dentro do prazo de até 60 dias corridos, na fatura do cartão utilizado na compra, segundo as regras do banco emissor do cartão. No caso de pagamento por boleto bancário, o reembolso será feito através de depósito bancário em até 60 dias, como informamos nos Termos de Uso.  Após o prazo de 7 dias corridos, não é possível fazer o cancelamento do plano e ele ficará ativo até seu término.  Lembrando, que se você adquiriu o plano anual, o mesmo não contempla a renovação automática, você terá acesso por um ano. Mas se você adquiriu o plano mensal, sim. Todo mês a recorrência da assinatura é debitada mensalmente em seu cartão de crédito.'
  },
  {
    question: 'Qual o diferencial do curso?',
    answer: 'O plano anual tem o melhor custo-benefício do mercado. Como funcionamos por sistema de assinatura, nosso assinante tem acesso a toda biblioteca de vídeo nas carreiras desejadas, sem limite de visualização e tendo um estudo focado para a carreira escolhida. Com isso, você pode estudar para Carreiras Jurídicas podendo estudar para as outras carreiras também, tudo isso, sem custo adicional.   E o mais importante: O nosso conteúdo é frequentemente atualizado e assim que surge algum tipo de novidade em relação aos concursos jurídicos, nós adicionamos.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: ' o pagamento dos planos podem ser realizados via cartão de crédito (Master, Visa, Hipercard, Dinners e Amex) ou boleto bancário. No pagamento via boleto bancário só está disponível o pagamento do valor integral do produto, enquanto via cartão de crédito está disponível o parcelamento em até 12 vezes sem juros.'
  },
  {
    question: 'Ao que esse plano dá acesso e por quanto tempo?',
    answer: 'Você terá acesso por 12 meses ao conteúdo que ficará disponibilizado após exibição ao vivo e à biblioteca de aulas relacionadas ao tema tratado na Superaula. A proposta é tratarmos um tópico específico de uma matéria em que o aluno possui maior dificuldade, desde a base necessária, passando por diferentes formas de explicação e finalizando com o formato que aparecerá nas principais provas.'
  }
]

export default class Faq extends React.Component {
  render() {
    return (
      <div className='container-faq'>
        <span className='title-faq'>Perguntas frequentes</span>
        <ul className='faq-list'>
          {items.map((item, index) => (
            <li className='single-faq'>
              <Question
                item={item}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}