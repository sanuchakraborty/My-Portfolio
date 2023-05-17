import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 xl:gap-14">
        <ProjectsCard
          title="Responsive E-commerce Website"
          techStacks="MERN Stack"
          des="Users can browse products, add review, add items to their cart, complete the checkout process and
          see their orders and also update proﬁle and passwords.
          Admin can control all the orders, users and also create, update and delete a product.
          Implemented a responsive UI using React, integrated Redux to manage application state.
          Used Node.js and MongoDB to create a RESTful API for backend functionality with all CRUD
          operations, used Cluodinary to store the uploaded photos.
          Implemented user authentication and authorization using JWT.
          Cookie, local, and session storage are used as and when required."
          src={projectOne}
          githubLink="https://github.com/sanuchakraborty/EcommerceWebsite"
          webLink="https://sanu-ecommerce.vercel.app/"
        />
        <ProjectsCard
          title="Responsive Web3.0 Blockchain App"
          techStacks="HTML, CSS, Solidity, JavaScript, Node.js, React.js, Ethers.js"
          des=" This is a modern web 3.0 application which can transfer Ethereum on a blockchain
          network, pairing it with Metamask.
          The smart contracts are scripted in Solidity language and deployed in Alchemy platform by paying
          the gas fees using Rinkeby faucet."
          src={projectTwo}
          webLink="https://sanuchakraborty.github.io/smartETH/"
          githubLink="https://github.com/sanuchakraborty/smartETH"
        />
        <ProjectsCard
          title="Responsive Restaurant Website"
          techStacks="HTML, CSS, JavaScript, React.js"
          des=" This is responsive restaurant website using React and Styled Components. 
          Scrollreveal and React-icon are used for animation and icons.
          There is a facility  introduced to add items to cart."
          src={projectThree}
          webLink="https://sanuchakraborty.github.io/Food-Addict-Restaurant-Website/"
          githubLink="https://github.com/sanuchakraborty/Food-Addict-Restaurant-Website"
        />
       
      </div>
    </section>
  );
}

export default Projects