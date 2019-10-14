let id = 0

const defaultMembers = [
  {
    id: 2,
    name: "Member 1"
  },
  {
    id: 1,
    name: "Member 4"
  },
  {
    id: 6,
    name: "Member 6"
  },
  {
    id: 15,
    name: "Member 2"
  },
  {
    id: 22,
    name: "Member 3"
  }
]

const loremLine = "Proident commodo cupidatat ad duis duis irure"
const loremPara = "Velit nisi culpa occaecat officia.Duis eu ea id velit elit.Adipisicing tempor commodo cillum mollit eu excepteur culpa enim esse elit."

function createTeam(name, subtitle = loremLine, description = loremPara, member = defaultMembers) {
  return {
    id: id++,
    name,
    subtitle,
    description,
    member
  }
}

const teamData = [
  createTeam("Team 1"),
  createTeam("Team 2"),
  createTeam("Team 3"),
  createTeam("Team 4"),
  createTeam("Team 5"),
]

export default teamData