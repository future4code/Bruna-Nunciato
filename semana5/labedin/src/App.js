import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

// const maincontainer = styled.div`
// color=red;
// `

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <maincontainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFP2xIFrIZbhg/profile-displayphoto-shrink_400_400/0/1597533101193?e=1625702400&v=beta&t=KWAc4AizVQxh4rfLJ9mW2fCC_sQCEdbeTXXWm5jn_IM" 
          nome="Bruna Nunciato" 
          descricao="Olá, eu sou a Bruna atualmente estudo programação na Labenu, antes disso trabalhava na area administrativa, mas também já atuei em outras areas. Adoro estar sempre aprendendo e me desenvolvendo."
        />
        <CardPequeno
        imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFakiEY_0nordHE00jzVXmbwU7FEYXv8GafHX5TqE&usqp=CAU"
        nome="Contatos"
        endereco="Vinhedo - São Paulo"
        telefone = "(19) 93618 - 0376"
        email = "bruna_nunciato@hotmail.com"
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </maincontainer>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
           <CardGrande
        imagem="https://th.bing.com/th/id/R10394e3916cb91581c768282cff58c20?rik=TtAVGz2L8OeugQ&riu=http%3a%2f%2fwww.neurosurg.cam.ac.uk%2ffiles%2f2017%2f09%2fyourstory_service_msme.jpg&ehk=ofBwcjfhhM5lcuoyDpbO1CjenFzWbPez51VCk0bsT3E%3d&risl=&pid=ImgRaw"
        nome="Persi Service Inc"
        descricao="Diretora Executiva"
        />
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGrDbFVAXsYsg/company-logo_100_100/0/1519868819821?e=1628121600&v=beta&t=wrhvALNgx2SVdy8ba85Liq7JU_o_I6eso9Nk8qW8DEE" 
          nome="Perdido Beach Resort" 
          descricao="English Exchange Program" 
        />
        <CardGrande
        imagem="https://th.bing.com/th/id/Rf88bc8ce787eb3580688ffbb63f70485?rik=9hgvVnI8aeg2dQ&riu=http%3a%2f%2fafabespinstituci1.hospedagemdesites.ws%2fwp-content%2fuploads%2f2020%2f01%2fMARCA.png&ehk=UvY26b6b%2fg9EcLAs6VRxXAQh9UaOcAxYPjp7q2dRA8g%3d&risl=&pid=ImgRaw"
        nome="Afabesp (Recanto Campestre)"
        descricao="Assistente Administrativo"
        />
        <CardGrande
        imagem="https://th.bing.com/th/id/OIP.Of2MynLiBpmYv32Dp7p_SwAAAA?pid=ImgDet&rs=1"
        nome="Minimax do Brasil"
        descricao="Assistente Administrativo"
        />
        <CardGrande
        imagem="http://www.sanebavi.com.br/wp-content/uploads/2018/01/logopeq.png"
        nome="Sanebavi"
        descricao="Estagiaria Administração"
        />      

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQEnZRDbOvEgbw/company-logo_100_100/0/1519856412300?e=1628121600&v=beta&t=sotXsYfdjCpbqtU6PcbuaFwqTj65kM6mPvW7Xu65L0I" 
          nome="Saint Gobain" 
          descricao="Operadora de Produção" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
