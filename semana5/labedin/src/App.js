import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

function App() {
  return (
    <div>
      <AppContainer>
        <GlobalStyle />
        <PageSectionContainer>
        <h2>Dados pessoais</h2>

       
          <CardGrande
            imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFP2xIFrIZbhg/profile-displayphoto-shrink_400_400/0/1597533101193?e=1625702400&v=beta&t=KWAc4AizVQxh4rfLJ9mW2fCC_sQCEdbeTXXWm5jn_IM"
            nome="Bruna Nunciato"
            descricao="Olá, eu sou a Bruna, estou em transição para área de Tecnologia &hearts;, atualmente estudo programação na Labenu, antes disso trabalhei na area administrativa, mas também já atuei em diversas áreas. Adoro estar sempre aprendendo e me desenvolvendo."
          />
      
        <h2>Contato</h2>
        
          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
          </PageSectionContainer>
          <PageSectionContainer>

        
          <CardPequeno
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFakiEY_0nordHE00jzVXmbwU7FEYXv8GafHX5TqE&usqp=CAU"
            info="Telefone: "
            contato="(19) 93618 - ****"
          />
      

        
          <CardPequeno
            imagem="https://i.pinimg.com/originals/14/22/3f/14223f903ac31d76af40053070c78287.png"
            info="Endereço:"
            contato=" Vinhedo - São Paulo"
          />
     

        
          <CardPequeno
            imagem="data:image/png;base64,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"
            info="E-mail:"
            contato="Bruna_Nunciato@hotmail.com"
          />
         </PageSectionContainer>
          

        <PageSectionContainer>
          <h2>Experiências profissionais</h2>

         
            <CardGrande
              imagem="https://th.bing.com/th/id/R10394e3916cb91581c768282cff58c20?rik=TtAVGz2L8OeugQ&riu=http%3a%2f%2fwww.neurosurg.cam.ac.uk%2ffiles%2f2017%2f09%2fyourstory_service_msme.jpg&ehk=ofBwcjfhhM5lcuoyDpbO1CjenFzWbPez51VCk0bsT3E%3d&risl=&pid=ImgRaw"
              nome="Persi Service Inc"
              cargo="Diretora Executiva"
              descricao="Crescimento anual da companhia, através de controle financeiro, implementação de melhorias, criações de métodos à fim de agilizar serviços e a qualidade, focando na satisfação dos clientes e bem estar dos prestadores."
            />
        

         
            <CardGrande
              imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGrDbFVAXsYsg/company-logo_100_100/0/1519868819821?e=1628121600&v=beta&t=wrhvALNgx2SVdy8ba85Liq7JU_o_I6eso9Nk8qW8DEE"
              nome="Perdido Beach Resort"
              cargo="English Exchange Program"
              descricao="Intercambio Cultural em Inglês / Setor Entretenimento"
            />
         

          
            <CardGrande
              imagem="https://th.bing.com/th/id/Rf88bc8ce787eb3580688ffbb63f70485?rik=9hgvVnI8aeg2dQ&riu=http%3a%2f%2fafabespinstituci1.hospedagemdesites.ws%2fwp-content%2fuploads%2f2020%2f01%2fMARCA.png&ehk=UvY26b6b%2fg9EcLAs6VRxXAQh9UaOcAxYPjp7q2dRA8g%3d&risl=&pid=ImgRaw"
              nome="Afabesp (Recanto Campestre)"
              cargo="Assistente Administrativo"
              descricao="Ampla atuação em diversas areas administrativas tais como, compras, contas à pagar, custos, departamento pessoal, financeiro e fiscal, pois, frequentemente cobri férias dos setores em questão.
        Responsável por contas à pagar, caixinha em espécie, fluxo de caixa, emissão de notas fiscais e controle custos,
        Participação ativa em inventários e controle de estoque,
        Contato com clientes, fornecedores e funcionários,
        Fechamento de ponto eletronico, folha de pagamento, rescisão, homologação, vale transporte , escala de folgas, atendimento aos funcionários."
            />
         

         
            <CardGrande
              imagem="https://th.bing.com/th/id/OIP.Of2MynLiBpmYv32Dp7p_SwAAAA?pid=ImgDet&rs=1"
              nome="Minimax do Brasil"
              cargo="Assistente Administrativo"
              descricao="Acompanhamento da programação de manutenções.
         Agendando reservas de carro, hotéis, táxis, viagens na América do Sul e Alemanha.
         Compra de passagens nacionais e internacionais.
         Amparando os técnicos no que for necessário."
            />
          

          
            <CardGrande
              imagem="http://www.sanebavi.com.br/wp-content/uploads/2018/01/logopeq.png"
              nome="Sanebavi"
              cargo="Estagiaria Administração"
              descricao="Atendimento ao público, cidadães da cidade com dúvidas sobre contas, financiamentos, e fornecimento de água. Também trabalhei no setor de faturamento e processos administrativos referentes à esta Autarquia."
            />
          
          </PageSectionContainer>
          
          <h2>Formação acadêmica</h2>

          <PageSectionContainer>
            <CardGrande
              imagem="data:image/png;base64,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"
              nome="Labenu"
              cargo="EAD - Brasil"
              descricao="Programação Full Stack Frontend e BackEnd"
            />
        

          
            <CardGrande
              imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHPUJk2l6B0Fw/company-logo_200_200/0/1612998285253?e=1628121600&v=beta&t=Ql-Itqp40foWlOaO6A-YFnxY5Voeefrfd6XWJhhR6LU"
              nome="ASA College"
              cargo="Florida - USA"
              descricao="English As Second Language for Business"
            />
        

        
            <CardGrande
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Y8FnWE3wt855dznnDO7x9kpQmMIo7Fc5191w4JguCUjYGZr9LzqSrqU_9oCH3s3RxNg&usqp=CAU"
              nome="Uceda School"
              cargo="Boca Raton - FL"
              descricao="English As Second Language"
            />
          

          
            <CardGrande
              imagem="https://i1.wp.com/multarte.com.br/wp-content/uploads/2020/09/senac-logo.png?resize=696%2C387&ssl=1"
              nome="Senac"
              cargo="Campinas - São Paulo"
              descricao="Escrituração Fiscal, Finanças e Contabilidade"
            />
          

          
            <CardGrande
              imagem="https://pbs.twimg.com/profile_images/421246768/Logo_Fac_em_pe.jpg"
              nome=" Faculdade de Vinhedo"
              cargo="Vinhedo - São Paulo"
              descricao="Bacharel em Administração de Empresas"
            />
          

          
            <CardGrande
              imagem="data:image/png;base64,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"
              nome="CEPROVI"
              cargo="Vinhedo - São Paulo"
              descricao="Técnico em Química"
            />
         
        </PageSectionContainer>

       
          <h2>Minhas redes sociais</h2>
          <PageSectionContainer>
            <ImagemButton
              imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
              texto="Facebook"
            />
          
            <ImagemButton
              imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
              texto="Twitter"
            />
       
       </PageSectionContainer>
      </AppContainer>
    </div>
  );
}

export default App;
