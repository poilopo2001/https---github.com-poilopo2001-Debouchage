// Realistic intervention schedule for Luxembourg
export const interventionSchedule = [
  {
    city: 'Luxembourg-Ville',
    sector: 'Gare',
    agents: 3,
    baseTime: 8, // Starting at 8am
    duration: 90, // 90 minutes intervention
  },
  {
    city: 'Luxembourg-Ville',
    sector: 'Kirchberg',
    agents: 2,
    baseTime: 10, // 10am
    duration: 60,
  },
  {
    city: 'Esch-sur-Alzette',
    sector: 'Centre',
    agents: 2,
    baseTime: 11.5, // 11:30am
    duration: 75,
  },
  {
    city: 'Differdange',
    agents: 2,
    baseTime: 14, // 2pm
    duration: 60,
  },
  {
    city: 'Luxembourg-Ville',
    sector: 'Bonnevoie',
    agents: 3,
    baseTime: 15.5, // 3:30pm
    duration: 90,
  },
  {
    city: 'Dudelange',
    agents: 2,
    baseTime: 17, // 5pm
    duration: 60,
  }
]

// Fixed number of agents per area
export const agentAllocation = {
  'Luxembourg-Ville': {
    totalAgents: 4,
    sectors: ['Gare', 'Kirchberg', 'Bonnevoie', 'Limpertsberg']
  },
  'Esch-sur-Alzette': {
    totalAgents: 2,
    sectors: ['Centre', 'Raemerich']
  },
  'Differdange': {
    totalAgents: 2,
    sectors: ['Centre']
  },
  'Dudelange': {
    totalAgents: 2,
    sectors: ['Centre']
  }
}
