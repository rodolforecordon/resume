import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'

// Frontend - elemento react do frontend
const Index = ({ repos, user }) => {
    return (
        <div>
        <Head>
            <title>Rodolfo Recordon</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>
        <div className='flex max-w-screen-xl mx-auto shadow-2xl rounded-lg h-screen'>
            <div className='w-64 h-auto bg-green-600 p-2 rounded-l-lg'>
                <h1 className='block text-gray-100 text-center text-xl py-5 font-bold'>Rodolfo Recordon</h1>
                <img id='rounded-img' src='eu-casual.jpg' className='rounded-full h-32 mx-auto shadow-xl'></img>
                <p className='text-center text-xs text-gray-100 py-5'>Hi, my name is Rodolfo Recordon and I'm a Full Stack Developer. Welcome to my personal website!</p>
                <div className='text-center pt-1 pb-5'>
                    <a href="#" className='fa fa-linkedin'></a>
                    <a href="#" className='fa fa-github'></a>
                </div>
                <hr className='border-green-700 border'></hr>
                <div className='text-center pt-5 pb-5'>
                    <a href="#" className=''>About Me</a><br></br>
                    <a href="#" className=''>Portfolio</a><br></br>
                    <a href="#" className=''>Resume</a><br></br>
                    <a href="#" className=''>Contact</a><br></br>
                </div>
            </div>
            <div className='container mx-auto pl-5'>
                <h1 className='text-5xl'>Meus Repositorios!</h1>
                <h2 className='font-bold text-3xl'>Meus repositórios no GitHub</h2>
                <p>GitHub stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers: {user.followers}</p>
                {repos.map(repo => {
                    return (
                        <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-2 hover:shadow-md'>
                            <h3 className='font-bold'>{repo.full_name}</h3>
                            <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
                            <p>Fork: {repo.fork}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

// Backend - a primeira linha abaixo funciona para que o site venha renderizado do backend
export async function getServerSideProps(context){
    const { repos, user } = await getUser('rodolforecordon')
    return {
        props:{
            repos,
            user
        }
    }
}

// Export
export default Index