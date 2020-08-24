var app = new Vue({
  el:"#setup",
  data: {
    pipes: [
      {
        type: 'pipe',
        length: '',
        length_unit: 'Einheit',
        diameter: '',
        diameter_unit: 'Einheit',
        roughness: '',
        roughness_unit: 'Einheit'
      }
    ],
    fittings: [
     {
       type: 'fitting',
       zeta: ''
     } 
    ]
  },
  methods: {
    addNewPipeForm () {
      this.pipes.push({
        type: 'pipe',
        length: '',
        length_unit: 'Einheit',
        diameter: '',
        diameter_unit: 'Einheit',
        roughness: '',
        roughness_unit: 'Einheit'
      })
    },
    deletePipeForm (index) {
      this.pipes.splice(index, 1)
    },
    addNewFittingForm () {
      this.fittings.push({
        name: '',
        unit: ''
      })
    },
    deleteFittingForm (index) {
      this.fittings.splice(index, 1)
    }
  }
})
