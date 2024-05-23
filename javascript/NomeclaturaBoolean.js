// Boleanos

const userParke = {
    name: 'Diego Fernandes',
    height: 190,
    hasTicket: true,
}
  
  const UserNecessaryHeight = 130
  
  const parkwCurrentTime = new Date().getHours()
  
  const isParkOpen = parkwCurrentTime > 9 && parkwCurrentTime < 18
  
  if (!isParkOpen) {
    throw new Error('O parque está fechado!')
  }
  
  const isThereTicket = userParke.hasTicket
  
  if (!isThereTicket) {
    throw new Error('O Diego não possui um bilhete para entrar no parque!')
  }
  
  const enterTheToy = userParke.height > UserNecessaryHeight
  
  if (!enterTheToy) {
    throw new Error('O Diego não pode entrar no brinquedo!')
  } 
  
  console.log('O Matheus se divertiu muito! :)')