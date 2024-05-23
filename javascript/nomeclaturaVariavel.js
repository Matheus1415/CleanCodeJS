// Nomenclatura de variáveis

const listUserFollower = [
    {
      titleUser: 'User',
      followers: 5
    },
    {
      titleUser: 'Friendly',
      followers: 50,
    },
    {
      titleUser: 'Famous',
      followers: 500,
    },
    {
      titleUser: 'Super Star',
      followers: 1000,
    },
  ]
  
  export default async function getData(req, res) {
    const github = String(req.query.username)
  
    if (!github) {
      return res.status(400).json({
        message: `Please provide an username to search on the github API`
      })
    }
  
    const response = await fetch(`https://api.github.com/users/${github}`);
  
    if (response.status === 404) {
      return res.status(400).json({
        message: `User with username "${github}" not found`
      })
    }
  
    const userGitHub = await response.json()
  
    const orderListFollower = list.sort((a, b) =>  b.followers - a.followers); 
  
    const categoryFollower = orderListFollower.find(i => userGitHub.followers > i.followers)
  
    const result = {
      github,
      category: categoryFollower.titleUser
    }
  
    return result
  }
  
  getData({ query: {
    username: 'josepholiveira'
  }}, {})