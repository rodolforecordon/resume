import React from 'react'
import getUser from '../utils/getUser'

// Frontend - elemento react do frontend
const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto'>
            <h1 className="text-5xl">Meus Repositorios!</h1>
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
    )
}

// Backend - a primeira linha abaixo funciona para que o site venha renderizado do backend
export async function getServerSideProps(context){
    const { repos, user } = await getUser('rodolforecordon')
    return {
        props: {
            repos,
            user
        }
    }
}

// Export
export default Index