import React from 'react'
import Styles from './sobrenos.module.css'
import Image from 'next/image';
import Header  from '../components/header/header';
import Header2 from '../components/header2/page';



function SobreNos() {
    return (
        <main className={Styles.main1}>
 <div className={Styles.header}>
   <Header />
    </div>
   <div className={Styles.header2}>
      <Header2/>
      </div>

            <h1 className={Styles.titulo}>Sobre Nós</h1>

            <div className={Styles.container}>

                <div className={Styles.divisao}>

                    <div className={Styles.card}>

                        <a href="https://www.instagram.com/borgesrth" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus01.png" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong>Arthur Borges</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>Arthur Borges é um membro talentoso e dedicado da equipe Octopus, atuando com maestria como Tech Lead. Sua paixão por futebol e computação o torna um profissional versátil e entusiasmado, equilibrando suas habilidades no mundo virtual e no campo. Residindo na acolhedora Valinhos, São Paulo, Arthur, com seus 16 anos, demonstra um futuro brilhante à frente, onde sua determinação e amor por tecnologia prometem conquistar desafios e conquistas impressionantes.</p>
                    </div>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/nicolyval_" target='_blank'> <Image className={Styles.img} src="/123407106.jpg" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Nicoly Val</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>Nicoly Val, uma integrante talentosa da equipe Octopus, traz consigo uma paixão singular por literatura e design. Sua apreciação pela palavra escrita e pela estética visual a torna uma força criativa notável. Com 16 anos de idade, Nicoly, residente de Valinhos, São Paulo, é um exemplo de juventude versátil, capaz de unir a arte da escrita à expressão visual de maneira única. Seu comprometimento e criatividade enriquecem nossa equipe e prometem um futuro brilhante, onde literatura e design se entrelaçam para criar experiências cativantes e inspiradoras.</p>
                    </div>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/mathh_costa" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus03.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Matheus Zambom</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 17 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong> Matheus Zambon, um membro dedicado da equipe Octopus, traz em seu perfil uma paixão evidente pela academia e futebol. Sua determinação e vigor refletem não apenas em suas atividades esportivas, mas também na sua abordagem à equipe. Com 16 anos de idade e residindo em Valinhos, São Paulo, Matheus é um jovem talentoso que demonstra um comprometimento incansável em todos os seus empreendimentos. Seu entusiasmo contagioso é um ativo valioso, prometendo um futuro repleto de conquistas tanto no campo como no mundo digital.</p>
                    </div>

                </div>

                <div className={Styles.divisao}>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/bela.osouza" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus04.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Isabela Souza</p>
                        <p className={Styles.text1}><strong>Idade:</strong>16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>Isabela Souza, uma integrante cativante da equipe Octopus, traz consigo uma paixão especial pelo mundo da culinária e pelas maratonas de séries. Sua habilidade na cozinha é tão impressionante quanto seu entusiasmo em explorar tramas e personagens através das telas. Residindo em Valinhos, São Paulo, com seus 16 anos, Isabela é uma jovem de múltiplos talentos que ilumina nossa equipe com sua criatividade e paixão. Seu amor pela gastronomia e narrativas promete criar um sabor especial em nossos projetos futuros, tornando-os tão envolventes quanto seus pratos culinários e séries favoritas.</p>
                    </div>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/joaoo.sntx" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopusme.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong>João Oliveira</p>
                        <p className={Styles.text1}><strong>Idade:</strong>16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>João Victor, membro entusiasta da equipe Octopus, traz consigo uma paixão inegável por futebol e música. Seu amor pelo esporte é tão vibrante quanto suas notas musicais, e ele equilibra com maestria o ritmo das partidas com a harmonia da melodia. Com seus 16 anos e residindo em Valinhos, São Paulo, João é uma promessa brilhante, combinando seu comprometimento nos campos e sua paixão pelos acordes. Sua presença na equipe Octopus adiciona um toque especial de energia e criatividade, prometendo um futuro repleto de conquistas notáveis em ambas as áreas.</p>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default SobreNos